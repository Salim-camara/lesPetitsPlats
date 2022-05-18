


const cardCreator = (data) => {
    for (const element of data) {

        const allCards = document.querySelector('.card');
        const cardContainer = document.createElement('div');
        const cardUpSide = document.createElement('div');
        const cardDownSide = document.createElement('div');
        const cardDownSide_up = document.createElement('div');
        const cardDownSide_down = document.createElement('div');
        const cardDownSide_down_left = document.createElement('div');
        const cardDownSide_down_right = document.createElement('div');



        // affectation de chaque élément dans son élément parent
        cardContainer.classList.add('cardContainer');
        cardContainer.appendChild(cardUpSide);
        cardContainer.appendChild(cardDownSide);
        cardUpSide.classList.add('cardUpSide');
        cardDownSide.classList.add('cardDownSide');
        cardDownSide.appendChild(cardDownSide_up);
        cardDownSide_up.classList.add('cardDownSide_up');
        cardDownSide.appendChild(cardDownSide_down);
        cardDownSide.classList.add('cardDownSide');
        cardDownSide_down.classList.add('cardDownSide_down');
        cardDownSide_down.appendChild(cardDownSide_down_left);
        cardDownSide_down_left.classList.add('cardDownSide_down_left');
        cardDownSide_down.appendChild(cardDownSide_down_right);
        allCards.appendChild(cardContainer);



        // injection de la data dans chaque élément
        const titleRecipe = document.createElement('p');
        titleRecipe.classList.add('titleRecipe');
        titleRecipe.innerHTML = element.name;
        cardDownSide_up.appendChild(titleRecipe);

        const timeRecipe = document.createElement('span');
        timeRecipe.classList.add('timeRecipe');
        timeRecipe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width:20px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> <div style="width:90px; font-weight:700;">${data[0].time} min</div>`;
        cardDownSide_up.appendChild(timeRecipe);


        console.log(element.ingredients);
        for (const ingredientsFromData of element.ingredients) {
            
            const ingredientsRecipeContainer = document.createElement('div');
            ingredientsRecipeContainer.classList.add('ingredientsRecipeContainer');
            const ingredientsRecipeName = document.createElement('p');
            ingredientsRecipeName.classList.add('ingredientsRecipeName');
            const ingredientsRecipeQuantity = document.createElement('p');

            ingredientsRecipeName.innerHTML = `${ingredientsFromData.ingredient}: `;
            if (ingredientsFromData.unit) {
                ingredientsRecipeQuantity.innerHTML = `${ingredientsFromData.quantity}${ingredientsFromData.unit}`
            } else if (ingredientsFromData.quantity) {
                ingredientsRecipeQuantity.innerHTML = `${ingredientsFromData.quantity}`
            }
            ingredientsRecipeContainer.appendChild(ingredientsRecipeName);
            ingredientsRecipeContainer.appendChild(ingredientsRecipeQuantity);
            cardDownSide_down_left.appendChild(ingredientsRecipeContainer);
        }


        const descRecipe = document.createElement('p');
        descRecipe.innerHTML = element.description;
        cardDownSide_down_right.appendChild(descRecipe);

    }


}