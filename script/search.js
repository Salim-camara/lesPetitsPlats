const input = document.querySelector('.searchByIngredientsInput');

// allongement du champ
input.addEventListener('keydown', (e) => {

    if(e.code == "Backspace") {
        input.style.width = ((input.value.length - 1) * 8) + 'px';
        console.log(input.style.width + e.code);
    } else {
        input.style.width = ((input.value.length + 1) * 8) + 'px';
        console.log(input.style.width + e.code);
    }
})

// raccourcissement du champ
// input.addEventListener('keypress', () => {
//     input.style.width = ((input.value.length - 1) * 8) + 'px';
//     console.log(input.style.width + 'minus');
// })