import * as model from './model.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

async function showRecipe() {
  // Load recipe
  try {
    const recipeId = window.location.hash.slice(1);
    // console.log(recipeId);
    if (!recipeId) return;
    recipeView.renderSpiner();
    await model.getRecipe(recipeId);

    recipeView.render(model.state.recipe);
    // console.log(model.state.recipe);
  } catch (err) {
    // alert(`${err} 1010`);

    recipeView.renderError();
  }
}

async function showSearchResuls() {
  try {
    const query = searchView.getquery();
    if (!query) return;
    await model.getRecipes(query);
    console.table(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
}

const init = function () {
  recipeView.addEventHandler(showRecipe);
  searchView.addSearchHandler(showSearchResuls);
};

init();
// showSearchResuls();
