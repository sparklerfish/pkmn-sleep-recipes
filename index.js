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
    input.addEventListener('input', handleInputChange);
    input.addEventListener('click', (event) => event.target.select());

    div.appendChild(label);
    div.appendChild(input);
    form.appendChild(div);
});

const toggleCollapse = (button) => {
    const icon = button.querySelector('i');
    if (form.classList.contains('collapsed')) {
        form.classList.remove('collapsed');
        form.classList.add('expanded');
        button.classList.remove('collapsed');
        button.classList.add('expanded');
        icon.classList.add('fa-angles-up');
        icon.classList.remove('fa-angles-down');
    } else {
        form.classList.remove('expanded');
        form.classList.add('collapsed');
        button.classList.remove('expanded');
        button.classList.add('collapsed');
        icon.classList.add('fa-angles-down');
        icon.classList.remove('fa-angles-up');
    }
};

document.onload = filterRecipes();