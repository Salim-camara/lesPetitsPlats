class AlgoAppareil {

    support(type) {
        return type == 'appareil';
    }

    filter(wordInnerText) {
            let data = dataForAlgo;
            let newData = [];

            data.map( (element) => {
                if(element.appliance == wordInnerText) {
                    newData.push(element);
                }
            });
            
            dataForAlgo = newData;
    }
}