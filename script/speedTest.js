// Test de vitesse des Algo, le résultat de chaque test est affiché dans la console sous cette forme "test algo => X ms"
const firstTest = [
    {
        type: 'appareil',
        value: 'Four'
    },

    {
        type: 'ingredient',
        value: 'Oeuf'
    },

    {
        type: 'ustensile',
        value: 'fouet'
    },

    {
        type: 'ingredient',
        value: 'Sucre'
    },

    {
        type: 'ustensile',
        value: 'moule'
    },
]


const secondTest = [
    {
        type: 'ingredient',
        value: 'Sucre'
    },

    {
        type: 'appareil',
        value: 'Casserolle'
    },

    {
        type: 'ustensile',
        value: 'saladier'
    }
]


// Test, recherche une recette précis X nombre de fois et calcul le temps total de l'opération
const speedTest = (chooseTest, operationNumber) => {
    const startDate = Date.now();
    const sync = () => {
        return new Promise(function(resolve, reject) {
            const algoCompt = () => {
                for(let i = 0; i<operationNumber; i++) {
                    algo(chooseTest);
                    handleSearch();
                    console.log(i);
                }

            }
            resolve(algoCompt());
        });
    }
    sync().then(() => {
        const totalTime = Date.now() - startDate;
        console.log(`test algo => ${totalTime} ms`);
    });
}


// Lancement du test via le bouton recherche
document.querySelector('.searchIcon').addEventListener('click', () => speedTest(secondTest, 200));