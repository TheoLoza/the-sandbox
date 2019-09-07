import { elements } from './base';

import { limitRecipeTitle } from './searchView';

// Function to toggle the like button
export const toggleLike = isLiked => {
	const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
	document
		.querySelector('.recipe__love use')
		.setAttribute('href', `img/icons.svg#${iconString}`);
	// icons.svg#icon-heart-outlined
};

// Function to toggle the like menu
export const toggleLikeMenu = numLikes => {
	elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

// Function to render the likes to the menu
export const renderLikes = like => {
	const markup = `
        <li>
            <a class="likes__link" href="#${like.id}">
                <figure class="likes__fig">
                    <img src="${like.image}" alt="${like.title}">
                </figure>
                <div class="likes__data">
                    <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                    <p class="likes__author">${like.author}</p>
                </div>
            </a>
        </li>
    `;
	elements.likesList.insertAdjacentHTML('beforeend', markup);
};

// Function to delete the liked recipe
export const deleteLike = id => {
	const element = document.querySelector(`.likes__link[href*="${id}"]`)
		.parentElement;

	if (element) element.parentElement.removeChild(element);
};
