class AlgoText {

    support(type) {
        return type == 'input';
    }

    filter(wordInnerText) {
            let data = dataForAlgo;
            let newData = [];
        
            for(const element of data) {
                console.log(element.name + element.name.indexOf(wordInnerText));
                if(element.name.toLowerCase().indexOf(wordInnerText.toLowerCase()) > -1) {
                    newData.push(element);
                }
            }
            dataForAlgo = newData;
    
}}