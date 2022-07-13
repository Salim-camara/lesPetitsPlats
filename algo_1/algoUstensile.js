class AlgoUstensile {

    support(type) {
        return type == 'ustensile';
    }

    filter(wordInnerText) {
        let data = dataForAlgo;
        let newData = [];

        for (const element of data) {
            for (const usten of element.ustensils) {
                if (usten == wordInnerText) {
                    newData.push(element);
                }
            }
        }
        dataForAlgo = newData;
    }
}