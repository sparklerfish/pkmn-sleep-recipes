
const ingredientWordsMap = Object.keys(ingredients)
    .reduce((acc, ingredient) => ({
        ...acc,
        [ingredient.split('-')[0]]: ingredient,
    }), {});

const ingredientWords = Object.keys(ingredientWordsMap);

const parseData = ({ lines }) => {
    return lines.reduce((acc, line, index) => {
        const text = line.text.toLowerCase();

        const includesIngredient = (word) => {
            const includesWord = text.includes(word);
            // if the word found is "bean", make sure the string is not "soybeans" before returning true
            if (word === 'bean') {
                if (acc.greengrass) return false;
                const beanIndex = text.indexOf('bean');
                const soybeansIndex = text.indexOf('soybeans');
                return includesWord && (beanIndex < soybeansIndex || soybeansIndex === -1 || beanIndex > soybeansIndex + 8);
            }
            return includesWord;
        }

        if (ingredientWords.some(includesIngredient)) {
            const ingredientsInLine = ingredientWords.filter(includesIngredient);
            const quantityLine = lines[index - 1];
            const quantities = quantityLine.text.match(/\d+/g);
            const quantity = quantities ? quantities.map(Number) : [];

            ingredientsInLine.forEach((ingredient, index) => {
                const ingredientKey = ingredientWordsMap[ingredient];
                acc[ingredientKey] = quantity[index];
            });
        }
        return acc;
    }, {});
};

const recognizeFile = async(file) => {
    const worker = await Tesseract.createWorker({
        logger: function(m){console.log(m);},
    });

    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const { data } = await worker.recognize(file);
    const imageIngredients = parseData(data);
    const newIngredients = Object.assign(initialIngredients, imageIngredients);

    Object.entries(newIngredients).forEach(([ingredient, quantity]) => {
        const ingredientInput = document.querySelector(`input[name="${ingredient}"]`);
        if (ingredientInput) ingredientInput.value = quantity;
    });

    localStorage.setItem('ingredients', JSON.stringify(newIngredients));
    filterRecipes();

    await worker.terminate();
};
