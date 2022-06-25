// APPAREIL
buttonArrowAppareil.addEventListener('click', () => {
    if (appareilState === false) {
        appareilState = true;
        arrowAppareil.classList.add('iconArrowSearchActive');
        resultContainerAppareil.style.width = '667px';
        fixWidthAppareilContainer.style.width = '667px';


        for (const element of recipes) {
            const newIngredient = document.createElement('p');
            newIngredient.classList.add('ingredientContainer');
            newIngredient.innerHTML = element.appliance;
            resultContainerAppareil.appendChild(newIngredient);
            newIngredient.addEventListener('click', () => {
                const selectedIngredientContainer = document.createElement('div');
                selectedIngredientContainer.classList.add('selectedAppareilContainer');
                selectedIngredientContainer.classList.add('word');
                selectedIngredientContainer.classList.add('appareil');
                selectedIngredientContainer.dataset.type = 'appareil';
                const selectedIngredientName = document.createElement('p');
                const selectedIngredientCross = document.createElement('p');
                selectedIngredientCross.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style="width: 20px; margin-left: 8px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`;
                selectedIngredientCross.style.display = 'flex';
                selectedIngredientName.innerHTML = element.appliance;
                selectedIngredientContainer.appendChild(selectedIngredientName);
                selectedIngredientContainer.appendChild(selectedIngredientCross);
                wordContainer.appendChild(selectedIngredientContainer);
                // lancement de l'algo
                handleSearch();

                // supression des mots
                selectedIngredientCross.addEventListener('click', () => {
                    selectedIngredientContainer.remove();
                    // lancement de l'algo
                    handleSearch();
                })
            })
        }
    } else {
        appareilState = false;
        arrowAppareil.classList.remove('iconArrowSearchActive');
        resultContainerAppareil.style.width = '170px';
        resultContainerAppareil.innerHTML = "";
        fixWidthAppareilContainer.style.width = '170px';
        // lancement de l'algo
        handleSearch();
        document.querySelector('.card').innerHTML('');
        cardCreator(dataForAlgo);
    }
})