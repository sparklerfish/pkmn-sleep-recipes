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
