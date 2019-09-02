// HOW ES6 MODULES WORK
// Default exports: when you only want to export one thing
// export default 'i am an exported string';
import axios from 'axios'; // Like a fetch request but it will work on all browsers
export default class Search {
    constructor(query) {
        this.query = query;
    }
    // Making API calls
    // API key: 6b6481fe9c48a2825d2986126dc78ef3 
    // Search link: https://www.food2fork.com/api/search
    // Trying out the API
    async getResults() {
        const key = '6b6481fe9c48a2825d2986126dc78ef3';
        // Starting axios package 
        // Handling errors
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`); // Adding parameters to the URL by using '?'
            this.result = res.data.recipes; // Properties from a successful query from the API
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}