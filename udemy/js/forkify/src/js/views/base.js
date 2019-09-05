// Contains all of the elements we select from our DOM
// Notice that they are all selected too!
export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResult: document.querySelector('.results'),
    searchResultList: document.querySelector('.results__list'),
    searchResultPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe')
};

export const elementStrings = {
    loader: 'loader'
};

// Function to render the spinning circle when doing queries
// Pass in the general parent because we will use it for the recipe section as well
export const renderLoader = parent => {
    const loader = `
        <div class='${elementStrings.loader}'>
            <svg>
                <use href='img/icons.svg#icon-cw'></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

// Function to clear the spinning circle when the query is finished
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};