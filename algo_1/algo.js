let dataForAlgo = recipes;
let variable = [new AlgoAppareil(), new AlgoIngredient(), new AlgoUstensile()];

const algo = () => {
    const allWords = document.querySelectorAll('.word');
    if (allWords.length != 0) {

        for (const word of allWords) {
            for (const element of variable) {
                if (element.support(word.dataset.type)) {
                    element.filter(word.innerText);
                    document.querySelector('.card').innerHTML = '';
                    cardCreator(dataForAlgo);
                }
            }
        }
        dataForAlgo = recipes;

    } else {
        document.querySelector('.card').innerHTML = '';
        cardCreator(dataForAlgo);
        console.log('yes');
    }
};

document.querySelector('.searchIcon').addEventListener('click', () => {
    console.log('hello');
    algo();
    setTimeout(() => {
        console.log('setTimeOut ' + dataForAlgo);
    }, 3000);
});