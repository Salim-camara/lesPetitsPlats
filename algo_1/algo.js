let dataForAlgo = recipes;

const algo = async () => {
    const allWords = document.querySelectorAll('.word');
    for(const word of allWords) {
        console.log(word.innerText);
        const classContainer = word.classList.value.split(' ');

        if(classContainer.includes('ingredient')) {

            await algoIngredient(word.innerText);
            console.log(dataForAlgo);

        } else if(classContainer.includes('appareil')) {
            await algoAppareil(word.innerText);
            console.log(dataForAlgo);
        }
    }
    console.log(allWords);
};

document.querySelector('.searchIcon').addEventListener('click', () => {
    console.log('hello');
    algo();
    setTimeout(() => {
        console.log('setTimeOut ' + dataForAlgo);
    }, 5000);
});