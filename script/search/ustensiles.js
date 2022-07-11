let dataForFilterUstens = dataForAlgo

const wordUstensileGenerator = () => {
    dataByIdRecup('appareil');
    for (const element of dataForAlgoFilter) {
        for (const ustens of element.ustensils) {
            if (!document.querySelector(`[data-namelistustensiles="${ustens}"]`)) {

                const newIngredient = document.createElement('p');
                newIngredient.classList.add('ingredientContainer');
                newIngredient.classList.add('ustensileFilter');
                newIngredient.innerHTML = ustens;
                newIngredient.dataset.namelistustensiles = ustens;
                resultContainerUstensile.appendChild(newIngredient);
                newIngredient.addEventListener('click', () => {
                    const selectedIngredientContainer = document.createElement('div');
                    selectedIngredientContainer.classList.add('selectedUstensileContainer');
                    selectedIngredientContainer.classList.add('word');
                    selectedIngredientContainer.classList.add('ustensile');
                    selectedIngredientContainer.dataset.type = 'ustensile';
                    const selectedIngredientName = document.createElement('p');
                    const selectedIngredientCross = document.createElement('p');
                    selectedIngredientCross.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style="width: 20px; margin-left: 8px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>`;
                    selectedIngredientCross.style.display = 'flex';
                    selectedIngredientName.innerHTML = ustens;
                    selectedIngredientContainer.appendChild(selectedIngredientName);
                    selectedIngredientContainer.appendChild(selectedIngredientCross);
                    wordContainer.appendChild(selectedIngredientContainer);
                    // lancement de l'algo
                    handleSearch();
                    resultContainerUstensile.innerHTML = '';
                    wordUstensileGenerator();

                    // supression des mots
                    selectedIngredientCross.addEventListener('click', () => {
                        selectedIngredientContainer.remove();
                        // lancement de l'algo
                        handleSearch();
                        resultContainerAppareil.innerHTML = '';
                        if (ustensileState == false) {
                            resultContainerUstensile.style.height = "0";
                        }
                        resultContainerUstensile.innerHTML = '';
                        wordUstensileGenerator();
                    })
                })
            }
        }
    }
}


buttonArrowUstensile.addEventListener('click', () => {
    if (ustensileState === false) {
        resultContainerUstensile.innerHTML = '';
        ustensileState = true;
        stateFalseIngredient();
        stateFalseAppareil();
        arrowUstensile.classList.add('iconArrowSearchActive');
        resultContainerUstensile.style.width = '667px';
        fixWidthUstensileContainer.style.width = '667px';

        wordUstensileGenerator();
    } else {
        stateFalseUstensile();
    }
});


// recherche dynamique
inputUstensile.addEventListener('keyup', () => {
    ustensileState = true;
    arrowUstensile.classList.add('iconArrowSearchActive');
    resultContainerUstensile.style.width = '667px';
    resultContainer.style.height = "";
    fixWidthUstensileContainer.style.width = '667px';

    wordUstensileGenerator();
    const allUstensileWords = document.querySelectorAll('.ustensileFilter');
    const allUstensileWordsArray = [...allUstensileWords];
    for (const element of allUstensileWordsArray) {
        if (element.innerHTML.indexOf(inputUstensile.value) == -1) {
            document.querySelector(`[data-namelistustensiles="${element.innerHTML}"]`).remove();
        }
    }
});