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
    // Load recipe
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}`);
        // console.log(data.recipe);
        let { recipe  } = data;
        // recipe = {
        //   id: recipe.recipe_id,
        //   title: recipe.title,
        //   ingredients: recipe.ingredients,
        //   image: recipe.image_url,
        //   pulisher: recipe.publish,
        // };
        console.log(data);
        const renderRecipe = ` <div class="spinner">
    <svg>
      <use href="src/img/icons.svg#icon-loader"></use>
    </svg>
  </div> 
  
  <!--  <div class="error">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div> -->
  
  
  <figure class="recipe__fig">
    <img src="${recipe.image_url}" alt="${recipe.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipe.title}</span>
    </h1>
  </figure>
  
  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="src/img/icons.svg#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">45</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="src/img/icons.svg#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">4</span>
      <span class="recipe__info-text">servings</span>
  
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="src/img/icons.svg#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="src/img/icons.svg#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
  
    <div class="recipe__user-generated">
      <svg>
        <use href="src/img/icons.svg#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="src/img/icons.svg#icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">

    ${recipe.ingredients.map((ing)=>{
            return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="src/img/icons.svg#icon-check"></use>
      </svg>
      
      <div class="recipe__description">
        <span class="recipe__unit"></span>
        ${ing}
      </div>
    </li>`;
        }).join("")}



     
  
    </ul>
  </div>
  
  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${recipe.source_url}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `;
        recipeContainer.innerHTML = "";
        recipeContainer.insertAdjacentHTML("afterbegin", renderRecipe);
    } catch  {
        alert("there is an error");
    }
// 2 render recipe
}
showRecipe("https://forkify-api.herokuapp.com/api/get?rId=47746");

//# sourceMappingURL=index.62406edb.js.map
