const input = document.querySelector('.searchByIngredientsInput');
const inputAppareil = document.querySelector('.searchByAppareilsInput');
const inputUstensile = document.querySelector('.searchByUstensilesInput');
const resultContainer = document.querySelector('.searchByIngredientsResult');
const resultContainerAppareil = document.querySelector('.searchByAppareilsResult');
const resultContainerUstensile = document.querySelector('.searchByUstensilesResult');

// allongement du champ
input.addEventListener('keydown', (e) => {
    if (e.code == "Backspace") {
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
let appareilState = false;
let ustensileState = false;
const buttonArrowIngredient = document.querySelector('.iconIngredientContainer');
const buttonArrowAppareil = document.querySelector('.iconAppareilsContainer');
const buttonArrowUstensile = document.querySelector('.iconUstensilesContainer');
const arrowIngredient = document.querySelector('.iconArrowSearch');
const arrowAppareil = document.querySelector('.iconArrowSearchAppareil');
const arrowUstensile = document.querySelector('.iconArrowSearchUstensile');
const inputIngredient = document.querySelector('.searchIngredientsInput');
// const inputAppareil = document.querySelector('.searchAppareil')

// INGREDIENT
buttonArrowIngredient.addEventListener('click', () => {
    if (ingredientState === false) {
        ingredientState = true;
        arrowIngredient.classList.add('iconArrowSearchActive');
        resultContainer.style.width = '667px';


        for (const element of recipes) {
            for (const ingredient of element.ingredients) {
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
        resultContainer.innerHTML = "";

    }
})

// APPAREIL
buttonArrowAppareil.addEventListener('click', () => {
    if (appareilState === false) {
        console.log('test_false');
        appareilState = true;
        arrowAppareil.classList.add('iconArrowSearchActive');
        resultContainerAppareil.style.width = '350px';


        for (const element of recipes) {
            const newIngredient = document.createElement('p');
            newIngredient.classList.add('ingredientContainer');
            newIngredient.innerHTML = element.appliance;
            resultContainerAppareil.appendChild(newIngredient);
        }
    } else {
        appareilState = false;
        arrowAppareil.classList.remove('iconArrowSearchActive');
        resultContainerAppareil.style.width = '200px';
        resultContainerAppareil.innerHTML = "";
    }
})

// USTENSILE
buttonArrowUstensile.addEventListener('click', () => {
    if (ustensileState === false) {
        ustensileState = true;
        arrowUstensile.classList.add('iconArrowSearchActive');
        resultContainerUstensile.style.width = '350px';


        for (const element of recipes) {
            for (const ustensile of element.ustensils) {
                const newIngredient = document.createElement('p');
                newIngredient.classList.add('ingredientContainer');
                newIngredient.innerHTML = ustensile;
                resultContainerUstensile.appendChild(newIngredient);
            }
        }
    } else {
        ustensileState = false;
        arrowUstensile.classList.remove('iconArrowSearchActive');
        resultContainerUstensile.style.width = '200px';
        resultContainerUstensile.innerHTML = "";

    }
})




