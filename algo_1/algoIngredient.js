class AlgoIngredient {

    support(type) {
        return type == 'ingredient';
    }

    filter(wordInnerText) {
            let data = dataForAlgo;
            let newData = [];

            data.map((element) => {
                element.ingredients.map((item) => {
                    if(item.ingredient == wordInnerText) {
                        newData.push(element);
                    }
                })
            });
            dataForAlgo = newData;
    }
}