// HOW ES6 MODULES WORK
// Named export: when you want to export multiple things
// export const add = (a, b) => a + b;
// export const mult = (a, b) => a * b;
// export const id = 23;
import {
    elements
} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
    elements.searchResultPages.innerHTML = ''; // Clear the buttons as well
};

// Function that will limit the title to one line only. Adds three dots if more than one line
// This function should not cut the words into different pieces.
// Takes in the recipe and the limit of characters in a line. According to instructor, 17 was the sweet spot in this project
/** Algorithm:
 *  Split the title into its words and then use the reduce() method in the 
 *  resulting array to get an accumulator. That accumulator is just like a
 *  variable that we can add to in each iteration of the loop. What we will
 *  check each iteration is if the current title plus the next word is still
 *  under the limit
 */
/*
Example: 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
*/
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((accumulator, current) => {
            if (accumulator + current.length < limit) {
                newTitle.push(current);
            }
            return accumulator + current.length;
        }, 0);

        // Return the result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}

// Function that serves one purpose: to render a single recipe
// Notice how we don't need to export it because we only want it in this module, like a private function!
const renderRecipe = recipe => {
    // Use the template strings to replace the static data with the dynamic data from the API
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

// type: prev or next
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;

    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Only button to go to previous page
        button = createButton(page, 'prev');
    }

    elements.searchResultPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // Render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe); // Notice how we didn't have to make a callback function. The current element will be passed to the function

    // Render pagination buttons
    renderButtons(page, recipes.length, resPerPage);
}