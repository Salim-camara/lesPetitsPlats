const input = document.querySelector('.searchByIngredientsInput');
const resultContainer = document.querySelector('.searchByIngredientsResult');

const fausseData = ['patate', 'tomate', 'artichot', 'patate douce', 'poivron', 'aubergine', 'cellerie', 'cerise', 'petit poit']

// allongement du champ
input.addEventListener('keydown', (e) => {
    if(e.code == "Backspace") {
        input.style.width = ((input.value.length - 1) * 8) + 'px';
        resultContainer.style.width = ((input.value.length - 1) * 3) + 'ch';
        console.log(input.style.width + e.code);
        
    } else {
        input.style.width = ((input.value.length + 1) * 8) + 'px';
        resultContainer.style.width = ((input.value.length + 1) * 3) + 'ch';
        console.log(input.style.width + e.code);
    }
});



// récupération de la data
let ingredientState = false;
const buttonArrowIngredient = document.querySelector('.iconIngredientContainer');
const arrowIngredient = document.querySelector('.iconArrowSearch');
const inputIngredient = document.querySelector('.searchIngredientsInput');

buttonArrowIngredient.addEventListener('click', () => {
    if(ingredientState === false) {
        ingredientState = true;
        arrowIngredient.classList.add('iconArrowSearchActive');
        resultContainer.style.width = '350px';


        for(const element of recipes) {
            for(const ingredient of element.ingredients) {
                console.log(ingredient.ingredient);
                const newIngredient = document.createElement('p');
                newIngredient.classList.add('ingredientContainer');
                newIngredient.innerHTML = ingredient.ingredient;
                resultContainer.appendChild(newIngredient);
            }
        }
    } else {
        ingredientState = false;
        arrowIngredient.classList.remove('iconArrowSearchActive');
        resultContainer.style.width = '200px';
        console.log('hi');
        resultContainer.innerHTML= "";
        
    }
})




