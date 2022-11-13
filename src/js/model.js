import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

export async function getRecipe(recipeId) {
  try {
    let url = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}`);
    // console.log(data);

    let { recipe } = data;
    state.recipe = recipe;

    console.log(state.recipe);
  } catch (err) {
    alert(`${err} occured`);
  }
}
