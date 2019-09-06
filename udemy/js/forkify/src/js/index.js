// Global app controller
// HOW ES6 MODULES WORK
/*
// Importing from Search.js (default export)
import string from './models/Search';

// Named export: when you want to export multiple things
// import {add as a, mult as m, id} from './views/searchView';
// Or this way:
import * as searchView from './views/searchView';

console.log(`using imported functions ${searchView.add(searchView.id, 2)} and ${searchView.mult(3, 5)} and ${string}`);
*/

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';

/** Global state of the app: good to have it in one central place that can be accessed in any part of the controller
 * - Search object: where we have the search query and results
 * - Current recipe object: 
 * - Shopping list object:
 * - Liked recipes: 
 */
const state = {};
// FOR TESTING
window.state = state;

// SEARCH CONTROLLER
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2. New search object and add it to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput(); // Get rid of the input in the search bar
        searchView.clearResults(); // Get rid of the results to prevent the new results from appending to the old ones
        renderLoader(elements.searchResult) // Render our loader, pass in parent so that it knows where to display itself

        // Need a try/catch here because of our getResults()
        try {
            // 4. Search for recipes
            await state.search.getResults();

            // 5. Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            alert('There was an error in searching');
            clearLoader();
        }
    }
}

// Event listener that checks if user submitted a search query
elements.searchForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevents the page from reloading every time the event is triggered
    controlSearch();
});

// Event listener that checks if user clicked on pagination button
elements.searchResultPages.addEventListener('click', event => {
    // Demonstration of the closest method
    // Helpful so that no matter where you click on the button, the element captured will still be the button
    const btn = event.target.closest('.btn-inline'); // We are only interested in the ones with btn-inline
    // console.log(btn); // Exactly where this click happened
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10); // Second param means on base 10
        searchView.clearResults(); // Clear results first!
        searchView.renderResults(state.search.result, goToPage);
        // console.log(goToPage);
    }
});

// RECIPE CONTROLLER

const controlRecipe = async () => {
    // Get id from the url hash
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes 
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected item
        if (state.search) searchView.highlightSelected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        // Need the try/catch here because of our getRecipe() function
        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcServings();
            state.recipe.calcTime();

            // Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch (error) {
            alert('There was an error in obtaining recipe');
        }
    }
}

// Global event listener
// Hashchange event is when something changes in the hash of the url
// Ex: when clicking on an id, the hash changes in the url
// window.addEventListener('hashchange', controlRecipe);

// Event listener to fire when the page is loaded
// This is so that the data would not change if the person either bookmarks it or reloads the page
// window.addEventListener('load', controlRecipe);

// A way to add multiple events into one event listener
// Loop over the events into the event listener
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// LIST CONTROLLER
const controlList = () => {
    // Create a new list if there is none yet
    if (!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(element => {
        const item = state.list.addItem(element.count, element.unit, element.ingredient);

        // Render the item
        listView.renderItem(item);
    });
};

// Event listeners for the buttons to delete and update items in the shopping list
// Using event delegation because the buttons are not yet on the DOM when we first load the page
elements.shopping.addEventListener('click', event => {
    // Retrieve the id
    const id = event.target.closest('.shopping__item').dataset.itemid;

    // Handle the delete event
    if (event.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete from state
        state.list.deleteItem(id);
        // Delete from UI
        listView.deleteItem(id);
    } else if (event.target.matches('.shopping__count-value')) {
        // Read data from interface
        const value = parseFloat(event.target.value);
        // Update it
        state.list.updateCount(id, value);
    }
});

// Event listeners for the buttons to change the servings
// Using event delegation because the buttons are not yet on the DOM
elements.recipe.addEventListener('click', event => {
    if (event.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button in clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServIng(state.recipe);
        }
    } else if (event.target.matches('.btn-increase, .btn-increase *')) {
        // increase button in clicked
        state.recipe.updateServings('inc');
        recipeView.updateServIng(state.recipe);
    } else if (event.target.matches('.recipe__btn-add, .recipe__btn-add *')) {
        // Add recipe to shopping list button is clicked
        controlList();
    }
});