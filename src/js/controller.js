import * as model from './model.js';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// function renderSpiner(parentEL) {
//   const markup = `
//   <div class="spinner">
//     <svg>
//       <use href="${icons}#icon-loader"></use>
//     </svg>
// </div>`;
//   parentEL.innerHTML = '';
//   recipeContainer.insertAdjacentHTML('afterbegin', markup);
// }

async function showRecipe() {
  // Load recipe

  try {
    const recipeId = window.location.hash.slice(1);
    // console.log(recipeId);
    if (!recipeId) return;
    recipeView.renderSpiner();
    await model.getRecipe(recipeId);

    recipeView.render(model.state.recipe);
    console.log(model.state.recipe);
  } catch (err) {
    alert(`${err} 1010`);
  }
}

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
