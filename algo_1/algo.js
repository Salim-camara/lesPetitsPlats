let variable = [new AlgoAppareil(), new AlgoIngredient(), new AlgoUstensile(), new AlgoText()];
const refreshCardDisplay = () => {
    document.querySelector('.card').innerHTML = '';
    cardCreator(dataForAlgo);
}
const inputSearch = document.querySelector('.inputRecette');
inputSearch.addEventListener('keyup', () => handleSearch());


const handleSearch = () => {
    const allWords = document.querySelectorAll('.word');
    const allWordsArray = [...allWords];
    const search = allWordsArray.map((element) => {
        return {
            type: element.dataset.type,
            value: element.innerText
        }
    });
    search.push({
        type: 'input',
        value: inputSearch.value
    });
    algo(search);
}

const algo = (items) => {
    for (const word of items) {
        for (const element of variable) {
            if (element.support(word.type)) {
                element.filter(word.value);
            }
        }
    }
    refreshCardDisplay();
    dataForAlgo = recipes;
};



document.querySelector('.searchIcon').addEventListener('click', () => {
    resultContainerAppareil.innerHTML = '';
});
