import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
};

export async function getRecipe(recipeId) {
  try {
    let url = `${API_URL}=${recipeId}`;
    const data = await getJSON(url);
    // console.log(data);

    let { recipe } = data;
    state.recipe = recipe;

    console.log(state.recipe);
  } catch (err) {
    alert(`${err} occured`);
  }
}
