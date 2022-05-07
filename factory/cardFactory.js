


const cardCreator = () => {

    const cardContainer = document.createElement('div');
    const cardUpSide = document.createElement('div');
    const cardDownSide = document.createElement('div');
    const cardDownSide_up = document.createElement('div');
    const cardDownSide_down = document.createElement('div');
    const cardDownSide_down_left = document.createElement('div');
    const cardDownSide_down_right = document.createElement('div');




    cardContainer.classList.add('cardContainer');
    cardUpSide.classList.add('cardUpSide');
    cardDownSide.classList.add('cardDownSide');
    cardDownSide.appendChild(cardDownSide_up);
    cardDownSide_up.classList.add('cardDownSide_up');
    cardDownSide.appendChild(cardDownSide_down);
    cardDownSide.classList.add('cardDownSide');
    cardDownSide_down.appendChild(cardDownSide_down_left);
    cardDownSide_down.appendChild(cardDownSide_down_right);



}