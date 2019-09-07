// Very similar to the List model
export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, image) {
        const like = {
            id,
            title,
            author,
            image
        }
        this.likes.push(like);

        // Persist data to localStorage
        this.persistData();

        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(element => element.id === id);
        this.likes.splice(index, 1);

        // Persist data to localStorage
        this.persistData();
    }

    // Test if we have a like in our this.likes array
    isLiked(id) {
        return this.likes.findIndex(element => element.id === id) !== -1;
    }

    // Number of likes
    getNumLikes() {
        return this.likes.length;
    }

    // Save the data to localStorage so that the data will stay even if the page reloads
    persistData() {
        // Key value pair on setting items
        // Function only accept strings! So here, stringify method is called on our array
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    // Retriving data from localStorage
    readStorage() {
        // Need to parse the array because it was an entire string
        const storage = JSON.parse(localStorage.getItem('likes')); // Will return null when there are no likes

        // Restore likes from the localStorage
        if (storage) this.likes = storage;
    }
}