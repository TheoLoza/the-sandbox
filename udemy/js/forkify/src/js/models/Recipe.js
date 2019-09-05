import axios from 'axios';
import {
    key,
    proxy
} from '../config';
export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    // Do ajax call based on id
    async getRecipe() {
        try {
            const result = await axios(
                `https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`
            );
            this.title = result.data.recipe.title;
            this.author = result.data.recipe.publisher;
            this.image = result.data.recipe.image_url;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('There was an error with the recipe API');
        }
    }

    calcTime() {
        // Rough estimate of time: Add 15 min for every 3 minutes
        const numIngredients = this.ingredients.length;
        const periods = Math.ceil(numIngredients / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const unitsLong = [
            'tablespoons',
            'tablespoon',
            'ounces',
            'ounce',
            'teaspoons',
            'teaspoon',
            'cups',
            'pounds'
        ];
        const unitsShort = [
            'tbsp',
            'tbsp',
            'oz',
            'oz',
            'tsp',
            'tsp',
            'cup',
            'pound'
        ];
        const newIngredients = this.ingredients.map(element => {
            // Uniform units
            let ingredient = element.toLowerCase();
            unitsLong.forEach((unit, index) => {
                ingredient = ingredient.replace(unit, unitsShort[index]);
            }); // Iterate through the long units and find it in the ingredients to replace it with the short one

            // Remove parenthesis
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' '); // Using regex to find parenthesis and replace it

            // Parse ingredient into count, unit, and ingredient
            const arrayIng = ingredient.split(' ');
            // A way to find the position of the unit when we don't know what unit we are looking for
            const unitIndex = arrayIng.findIndex(element2 => unitsShort.includes(element2)); // Returns the index of the unit in the split array

            let objectIng; // Final object we are returning
            if (unitIndex > -1) {
                // There is a unit
                // Ex: 4 1/2 cups -> arrayCount is [4, 1/2] -> eval("4+1/2") -> 4.5
                // Ex: 4 cups -> arrayCount is [4]
                const arrayCount = arrayIng.slice(0, unitIndex);

                let count;
                if (arrayCount.length === 1) {
                    count = eval(arrayIng[0].replace('-', '+'));
                } else {
                    // Using the eval function
                    count = eval(arrayIng.slice(0, unitIndex).join('+'));
                }

                objectIng = {
                    count,
                    unit: arrayIng[unitIndex],
                    ingredient: arrayIng.slice(unitIndex + 1).join(' ')
                }
            } else if (parseInt(arrayIng[0], 10)) {
                // There is no unit but first element is a number
                objectIng = {
                    count: parseInt(arrayIng[0], 10),
                    unit: '',
                    ingredient: arrayIng.slice(1).join(' ')
                };
            } else if (unitIndex === -1) {
                // There is no unit and no number in first position
                objectIng = {
                    count: 1,
                    unit: '',
                    ingredient // Value is the ingredient from 'let ingredient'
                };
            }
            return objectIng;
        });
        this.ingredients = newIngredients;
    }
}