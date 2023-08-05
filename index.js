const ingredientsInStorage = JSON.parse(localStorage.getItem('ingredients'));
const initialIngredients = {
    ['large-leek']: 0,
    ['tasty-mushroom']: 0,
    ['fancy-egg']: 0,
    ['soft-potato']: 0,
    ['fancy-apple']: 0,
    ['fiery-herb']: 0,
    ['bean-sausage']: 0,
    ['moomoo-milk']: 0,
    ['honey']: 0,
    ['pure-oil']: 0,
    ['warming-ginger']: 0,
    ['snoozy-tomato']: 0,
    ['soothing-cacao']: 0,
    ['slowpoke-tail']: 0,
    ['greengrass-soybeans']: 0
};

const ingredients = ingredientsInStorage || initialIngredients;
if (!ingredientsInStorage) localStorage.setItem('ingredients', JSON.stringify(ingredients));

const ingredientNames = {
    ['large-leek']: 'Large Leek',
    ['tasty-mushroom']: 'Tasty Mushroom',
    ['fancy-egg']: 'Fancy Egg',
    ['soft-potato']: 'Soft Potato',
    ['fancy-apple']: 'Fancy Apple',
    ['fiery-herb']: 'Fiery Herb',
    ['bean-sausage']: 'Bean Sausage',
    ['moomoo-milk']: 'Moomoo Milk',
    ['honey']: 'Honey',
    ['pure-oil']: 'Pure Oil',
    ['warming-ginger']: 'Warming Ginger',
    ['snoozy-tomato']: 'Snoozy Tomato',
    ['soothing-cacao']: 'Soothing Cacao',
    ['slowpoke-tail']: 'Slowpoke Tail',
    ['greengrass-soybeans']: 'Greengrass Soybeans',
};

const filterRecipes = () => {
    const categoryInput = document.getElementById('category');
    const category = categoryInput.value;
    const categoryRecipes = recipes[category];
    const filteredRecipes = categoryRecipes.filter(canMake);
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    filteredRecipes.forEach((recipe) => {
        const li = (
            `<li class="recipe">
                <h3>${recipe.name}</h3>
                <ul class="recipe-ingredients">
                    ${Object.entries(recipe.ingredients).map(([ingredient, quantity]) => {
                        if (ingredient === 'any') return `<li>Any</li>`;
                        return `<li>${ingredientNames[ingredient]}: ${quantity}</li>`
                    }).join('')}
                </ul>
            </li>`
        );
        recipeList.innerHTML += li;
    });
};

const handleInputChange = (event) => {
    const quantity = event.target.value;
    const ingredient = event.target.name;
    const ingredients = JSON.parse(localStorage.getItem('ingredients'));
    ingredients[ingredient] = quantity;
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
    filterRecipes();
};

const canMake = (recipe) => {
    const { ingredients } = recipe;
    if (ingredients.hasOwnProperty('any')) return true;
    const ingredientsInStorage = JSON.parse(localStorage.getItem('ingredients'));
    return Object.entries(ingredients).every(([ingredient, quantity]) => {
        return ingredientsInStorage[ingredient] >= quantity;
    });
};

const form = document.getElementById('ingredient-inputs');

const inputs = Object.entries(ingredients).forEach(([ingredient, quantity]) => {
    const div = document.createElement('div');
    div.className = 'ingredient';

    const label = document.createElement('label');
    label.innerText = ingredientNames[ingredient];
    label.htmlFor = ingredient;

    const input = document.createElement('input');
    input.type = 'tel';
    input.name = ingredient;
    input.value = quantity;
    input.min = 0;
    input.max = 999;
    input.step = 1;
    input.addEventListener('change', handleInputChange);
    input.addEventListener('click', (event) => event.target.select());

    div.appendChild(label);
    div.appendChild(input);
    form.appendChild(div);
});

document.onload = filterRecipes();