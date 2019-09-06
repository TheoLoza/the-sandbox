import uniqid from 'uniqid'; // Will give unique ids to items

export default class List {
    constructor() {
        this.items = []; // Each of the elements is an object with count, unit, and ingredient
    }

    // Add new item to list
    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    // Delete an item from list
    deleteItem(id) {
        const index = this.items.findIndex(element => element.id === id);

        // splice(): Pass in start index and how many positions we want to take
        // Returns these elements and delete them from the original array, mutating the original array
        // slice(): Pass in the start and end index of part of the array we want to delete
        // Returns a new array, not mutating the original array
        // Ex: [2, 4, 8].splice(1, 2) -> returns [4, 8], original array: [2]
        // Ex: [2, 4, 8].slice(1, 2) -> returns 4, original array: [2, 4, 8]
        this.items.splice(index, 1);
    }

    // Update the count
    updateCount(id, newCount) {
        this.items.find(element => element.id === id).count = newCount;
    }
}