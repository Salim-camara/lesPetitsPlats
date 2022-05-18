const data = recipes;

class CardManager {
    constructor(data) {
        this.data = data
    }


    CardCreate() {
        cardCreator(this.data)
        // console.log('test sata ' +this.data)
    }
}

const test = new CardManager(data).CardCreate();
test;