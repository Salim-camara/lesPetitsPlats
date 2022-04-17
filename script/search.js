const input = document.querySelector('.searchByIngredientsInput');
input.addEventListener('keypress', () => {
    input.style.width = ((input.value.length + 1) * 8) + 'px';
    console.log(input.style.width);
})