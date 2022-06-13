const algoAppareil = async (wordInnerText) => {
    let data = dataForAlgo;
    let newData = [];

    for(const element of data) {
        if(element.appliance == wordInnerText) {
            newData.push(element);
        }
    }
    dataForAlgo = newData;
}