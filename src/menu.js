const menuLoad = (element) => {
    const _foodArray = ['Sahi Samosa', 'Large Dosa', 'Tandoori Chicken', 'Naan Paneer', 'Dahi Pakhal', 'Large Thali'];

    let menuHeading = document.createElement('h3');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Menu'

    let menuDiv = document.createElement('div');
    menuDiv.classList.add('food-catalogue');

    //create six food box for six food items
    for (let i = 0; i < 6; i++) {
        const element = document.createElement('div');
        element.classList.add('food-box');

        const childElementOne = document.createElement('div');
        childElementOne.classList.add('food-pic', `food${i + 1}`);

        const childElementTwo = document.createElement('div');
        childElementTwo.classList.add('food-name');
        childElementTwo.textContent = _foodArray[i];

        element.append(childElementOne, childElementTwo);
        menuDiv.appendChild(element);
    };

    const _render = () => {
        element.append(menuHeading, menuDiv);
    }

    const renderMenu = () => {
        _render();
    }

    return { renderMenu }
};

export default menuLoad;