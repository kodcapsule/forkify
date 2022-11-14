import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
};

export async function getRecipe(recipeId) {
  try {
    const data = await getJSON(`${API_URL}=${recipeId}`);
    // console.log(data);
    let { recipe } = data;
    state.recipe = recipe;

    console.log(state.recipe);
  } catch (err) {
    alert(`${err} occured and it is happening in the model`);
  }
}
