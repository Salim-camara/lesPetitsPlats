class AlgoText {

    support(type) {
        return type == 'input';
    }

    filter(wordInnerText) {
            let data = dataForAlgo;
            let newData = [];
        
            if(wordInnerText.length > 2) {
                for(const element of data) {
                    if((element.name.toLowerCase().indexOf(wordInnerText.toLowerCase()) > -1) || (element.description.toLowerCase().indexOf(wordInnerText.toLowerCase()) > -1)) {
                        newData.push(element);
                    }
                    for(const item of element.ingredients) {
                        if(item.ingredient.toLowerCase().indexOf(wordInnerText.toLowerCase()) > -1) {
                            newData.push(element);
                        }
                    }
                }
                dataForAlgo = newData;
            } 
}}