import icons from 'url:../img/icons.svg';

import * as model from './model.js';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

function renderSpiner(parentEL) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
</div>`;
  parentEL.innerHTML = '';
  recipeContainer.insertAdjacentHTML('afterbegin', markup);
}

async function showRecipe() {
  // Load recipe

  try {
    const recipeId = window.location.hash.slice(1);
    console.log(recipeId);
    if (!recipeId) return;
    renderSpiner(recipeContainer);
    await model.getRecipe(recipeId);

    // const { recipe } = model.state;

    recipeView.render(model.state);
  } catch {
    alert('there is an error');
  }
}

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
