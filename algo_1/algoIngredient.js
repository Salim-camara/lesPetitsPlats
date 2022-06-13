const algoIngredient = (wordInnerText) => {
    let data = dataForAlgo;
    let newData = [];

    for(const element of data) {
        for(const ingre of element.ingredients) {
            if(ingre.ingredient == wordInnerText) {
                newData.push(element);
            }
        }
    }
    dataForAlgo = newData;

}