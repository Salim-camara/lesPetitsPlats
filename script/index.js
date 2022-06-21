const data = recipes;

class CardManager {
    constructor(dataForAlgo) {
        this.data = dataForAlgo
    }


    CardCreate() {
        cardCreator(this.data);
    }
}

const test = new CardManager(data).CardCreate();
test;