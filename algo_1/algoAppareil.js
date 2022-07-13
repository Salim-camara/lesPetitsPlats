class AlgoAppareil {

    support(type) {
        return type == 'appareil';
    }

    filter(wordInnerText) {
            let data = dataForAlgo;
            let newData = [];
        
            for(const element of data) {
                if(element.appliance == wordInnerText) {
                    newData.push(element);
                }
            }
            dataForAlgo = newData;
    }
}