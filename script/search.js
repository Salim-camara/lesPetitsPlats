const input = document.querySelector('.searchByIngredientsInput');
const buttonArrowIngredient = document.querySelector('.iconIngredientContainer');
const resultContainer = document.querySelector('.searchByIngredientsResult');

const fausseData = ['patate', 'tomate', 'artichot', 'patate douce', 'poivron', 'aubergine', 'cellerie', 'cerise', 'petit poit']

// allongement du champ
input.addEventListener('keydown', (e) => {
    if(e.code == "Backspace") {
        input.style.width = ((input.value.length - 1) * 8) + 'px';
        resultContainer.style.maxWidth = ((input.value.length - 1) * 8) + 'px';
        console.log(input.style.width + e.code);

    } else {
        input.style.width = ((input.value.length + 1) * 8) + 'px';
        resultContainer.style.maxWidth = ((input.value.length + 1) * 8) + 'px';
        console.log(input.style.width + e.code);
    }
});

buttonArrowIngredient.addEventListener('click', () => {
    
})


// récupération de la data

for(const element of recipes) {
    for(const ingredient of element.ingredients) {
        console.log(ingredient.ingredient);
        const newIngredient = document.createElement('p');
        newIngredient.classList.add('ingredientContainer');
        newIngredient.innerHTML = ingredient.ingredient;
        resultContainer.appendChild(newIngredient);
    }
}


