const input = document.querySelector('.searchByIngredientsInput');
const inputAppareil = document.querySelector('.searchByAppareilsInput');
const inputUstensile = document.querySelector('.searchByUstensilesInput');
const resultContainer = document.querySelector('.searchByIngredientsResult');
const resultContainerAppareil = document.querySelector('.searchByAppareilsResult');
const resultContainerUstensile = document.querySelector('.searchByUstensilesResult');
const fixWidthIngredientContainer = document.querySelector('.searchByIngredients');
const fixWidthUstensileContainer = document.querySelector('.searchByUstensiles');
const fixWidthAppareilContainer = document.querySelector('.searchByAppareils');
const wordContainer = document.querySelector('.wordContainer');

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
        fixWidthIngredientContainer.style.width = '667px';



        for (const element of recipes) {
            for (const ingredient of element.ingredients) {
                const newIngredient = document.createElement('p');
                newIngredient.classList.add('ingredientContainer');
                newIngredient.innerHTML = ingredient.ingredient;
                resultContainer.appendChild(newIngredient);
                newIngredient.addEventListener('click', () => {
                    const selectedIngredientContainer = document.createElement('div');
                    selectedIngredientContainer.classList.add('selectedIngredientContainer');
                    selectedIngredientContainer.classList.add('word');
                    selectedIngredientContainer.classList.add('ingredient');
                    const selectedIngredientName = document.createElement('p');
                    const selectedIngredientCross = document.createElement('p');
                    selectedIngredientCross.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style="width: 20px; margin-left: 8px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>`;
                    selectedIngredientCross.style.display = 'flex';
                    selectedIngredientName.innerHTML = ingredient.ingredient;
                    selectedIngredientContainer.appendChild(selectedIngredientName);
                    selectedIngredientContainer.appendChild(selectedIngredientCross);
                    wordContainer.appendChild(selectedIngredientContainer);

                    // supression des mots
                    selectedIngredientCross.addEventListener('click', () => {
                        selectedIngredientContainer.remove();
                    })


                })
            }
        }
    } else {
        ingredientState = false;
        arrowIngredient.classList.remove('iconArrowSearchActive');
        resultContainer.style.width = '170px';
        resultContainer.innerHTML = "";
        fixWidthIngredientContainer.style.width = '170px';

    }
})

// USTENSILE
// buttonArrowUstensile.addEventListener('click', () => {
//     if (ustensileState === false) {
//         ustensileState = true;
//         arrowUstensile.classList.add('iconArrowSearchActive');
//         resultContainerUstensile.style.width = '350px';


//         for (const element of recipes) {
//             for (const ustensile of element.ustensils) {
//                 const newIngredient = document.createElement('p');
//                 newIngredient.classList.add('ingredientContainer');
//                 newIngredient.innerHTML = ustensile;
//                 resultContainerUstensile.appendChild(newIngredient);
//             }
//         }
//     } else {
//         ustensileState = false;
//         arrowUstensile.classList.remove('iconArrowSearchActive');
//         resultContainerUstensile.style.width = '200px';
//         resultContainerUstensile.innerHTML = "";

//     }
// })




