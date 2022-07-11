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
const inputIngredient = document.querySelector('.searchByIngredientsInput');



// state false
const stateFalseUstensile = () => {
    ustensileState = false;
    arrowUstensile.classList.remove('iconArrowSearchActive');
    resultContainerUstensile.style.width = '170px';
    resultContainerUstensile.innerHTML = "";
    fixWidthUstensileContainer.style.width = '170px'
}

const stateFalseIngredient = () => {
    ingredientState = false;
    arrowIngredient.classList.remove('iconArrowSearchActive');
    resultContainer.style.width = '170px';
    resultContainer.innerHTML = "";
    fixWidthIngredientContainer.style.width = '170px';
}

const stateFalseAppareil = () => {
    appareilState = false;
    arrowAppareil.classList.remove('iconArrowSearchActive');
    resultContainerAppareil.style.width = '170px';
    resultContainerAppareil.innerHTML = "";
    fixWidthAppareilContainer.style.width = '170px';
}




// INGREDIENT
const wordIngredientGenerator = () => {
    dataByIdRecup('appareil');
    for (const element of dataForAlgoFilter) {
        for (const ingredient of element.ingredients) {
            if (!document.querySelector(`[data-namelistingredient="${ingredient.ingredient}"]`)) {

                const newIngredient = document.createElement('p');
                newIngredient.classList.add('ingredientContainer');
                newIngredient.classList.add('ingredientFilter');
                newIngredient.innerHTML = ingredient.ingredient;
                newIngredient.dataset.namelistingredient = ingredient.ingredient;
                resultContainer.appendChild(newIngredient);
                newIngredient.addEventListener('click', () => {
                    const selectedIngredientContainer = document.createElement('div');
                    selectedIngredientContainer.classList.add('selectedIngredientContainer');
                    selectedIngredientContainer.classList.add('word');
                    selectedIngredientContainer.classList.add('ingredient');
                    selectedIngredientContainer.dataset.type = 'ingredient';
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
                    // lancement de l'algo
                    handleSearch();
                    resultContainer.innerHTML = '';
                    wordIngredientGenerator();

                    // supression des mots
                    selectedIngredientCross.addEventListener('click', () => {
                        selectedIngredientContainer.remove();
                        handleSearch();
                        resultContainerAppareil.innerHTML = '';
                        if (ingredientState == false) {
                            resultContainer.style.height = "0";
                        }
                        resultContainer.innerHTML = '';
                        wordIngredientGenerator();
                    })


                })
            }
        }
    }
};


buttonArrowIngredient.addEventListener('click', () => {
    if (ingredientState === false) {
        resultContainer.innerHTML = '';
        ingredientState = true;
        stateFalseUstensile();
        stateFalseAppareil();
        arrowIngredient.classList.add('iconArrowSearchActive');
        resultContainer.style.width = '667px';
        resultContainer.style.height = "";
        fixWidthIngredientContainer.style.width = '667px';

        wordIngredientGenerator();
    } else {
        stateFalseIngredient();
    }
});


// recherche dynamique
inputIngredient.addEventListener('keyup', () => {
    ingredientState = true;
    arrowIngredient.classList.add('iconArrowSearchActive');
    resultContainer.style.width = '667px';
    fixWidthIngredientContainer.style.width = '667px';

    wordIngredientGenerator();
    const allIngredientWords = document.querySelectorAll('.ingredientFilter');
    const allIngredientWordsArray = [...allIngredientWords];
    for (const element of allIngredientWordsArray) {
        if (element.innerHTML.indexOf(inputIngredient.value) == -1) {
            document.querySelector(`[data-namelistingredient="${element.innerHTML}"]`).remove();
        }
    }
});




