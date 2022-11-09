const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
async function showRecipe(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}`);
        // console.log(data.recipe);
        let { recipe  } = data;
        recipe = {
            id: recipe.recipe_id,
            title: recipe.title
        };
        console.log(recipe);
    } catch  {
        alert("there is an error");
    }
}
showRecipe("https://forkify-api.herokuapp.com/api/get?rId=47746");

//# sourceMappingURL=index.62406edb.js.map
