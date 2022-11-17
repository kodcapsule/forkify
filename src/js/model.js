import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export async function getRecipe(recipeId) {
  try {
    const data = await getJSON(`${API_URL}get?rId=${recipeId}`);
    // console.log(data);
    let { recipe } = data;
    state.recipe = recipe;

    // console.log(state.recipe);
  } catch (err) {
    // alert(`${err} occured and it is happening in the model`);
    throw err;
  }
}

export async function getRecipes(query) {
  state.search.query = query;
  try {
    const jsonData = await getJSON(`${API_URL}search?q=${query}`);
    // console.log(jsonData.recipes);
    state.search.results = jsonData.recipes;
    // console.table(state.search.results);
  } catch (err) {
    throw err;
  }
}

getRecipes('asparagus');
