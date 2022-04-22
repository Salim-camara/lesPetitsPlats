const input = document.querySelector('.searchByIngredientsInput');
const buttonArrowIngredient = document.querySelector('.iconIngredientContainer');

const fausseData = ['patate', 'tomate', 'artichot', 'patate douce', 'poivron', 'aubergine', 'cellerie', 'cerise', 'petit poit']

// allongement du champ
input.addEventListener('keydown', (e) => {
    if(e.code == "Backspace") {
        input.style.width = ((input.value.length - 1) * 8) + 'px';
        console.log(input.style.width + e.code);
    } else {
        input.style.width = ((input.value.length + 1) * 8) + 'px';
        console.log(input.style.width + e.code);
    }
});

buttonArrowIngredient.addEventListener('click', () => {
    
})


