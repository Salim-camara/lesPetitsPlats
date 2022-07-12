class AlgoUstensile {

    support(type) {
        return type == 'ustensile';
    }

    filter(wordInnerText) {
        let data = dataForAlgo;
        let newData = [];

        data.map((element) => {
            element.ustensils.map((item) => {
                if (item == wordInnerText) {
                    newData.push(element);
                }
            })
        });

        dataForAlgo = newData;
    }
}