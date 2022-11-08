import './style.css';
import pageLoad from './home.js';

const contentDiv = document.querySelector('.content');
pageLoad(contentDiv).render();

let mainDiv = document.querySelector('.main');
console.log(mainDiv);
console.log(mainDiv.childElementCount);

const handle = (event) => {
    let _linkId;
    const _foodArray = ['Sahi Samosa', 'Large Dosa', 'Tandoori Chicken', 'Naan Paneer', 'Dahi Pakhal', 'Large Thali'];

    if (event.target.nodeName == 'A') {
        console.log('Responding');
        _linkId = event.target.getAttribute('id');
    }
    console.log(_linkId);

    switch (_linkId) {
        case 'home-button':
            wipe().doClean(mainDiv);
            console.log('Everything cleared');
            break;

        case 'menu-button':
            wipe().doClean(mainDiv);
            console.log('Everything cleared');

            let menuHeading = document.createElement('h3');
            menuHeading.classList.add('menu-heading');
            menuHeading.textContent = 'Menu'

            let menuDiv = document.createElement('div');
            menuDiv.classList.add('food-catalogue');

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
            mainDiv.append(menuHeading, menuDiv);

            break;

        case 'contact-button':
            wipe().doClean(mainDiv);
            console.log('Everything cleared');

            let contactDiv = document.createElement('div');
            contactDiv.classList.add('contact-card');

            let contactHeading = document.createElement('h2');
            contactHeading.classList.add('contact-heading');
            contactHeading.textContent = 'Royal Restaurant';

            let addressBox = document.createElement('div');
            addressBox.classList.add('address-box');
            mainDiv.appendChild(contactDiv);

            const spanOne = document.createElement('span');
            spanOne.classList.add('span-one')
            spanOne.textContent = 'C T Road';
            const brOne = document.createElement('br');

            const spanTwo = document.createElement('span');
            spanTwo.classList.add('span-two')
            spanTwo.textContent = 'Puri-2, Odisha'
            const brTwo = document.createElement('br');

            const spanThree = document.createElement('span');
            spanThree.classList.add('span-three')
            spanThree.textContent = 'PIN- 752002'
            const brThree = document.createElement('br');

            const spanFour = document.createElement('span');
            spanFour.classList.add('span-four')
            spanFour.textContent = 'Ph- 8280213987';
            const brFour = document.createElement('br');

            addressBox.append(spanOne, spanTwo, spanThree, spanFour);

            spanOne.insertAdjacentElement('afterend', brOne);
            spanTwo.insertAdjacentElement('afterend', brTwo);
            spanThree.insertAdjacentElement('afterend', brThree);
            spanFour.insertAdjacentElement('afterend', brFour);

            contactDiv.append(contactHeading, addressBox);
            mainDiv.appendChild(contactDiv);

            break;

        default:
            break;
    }
};

const wipe = () => {
    const _clean = (element) => {
        while (element.lastElementChild) {
            element.removeChild(mainDiv.lastElementChild);
        }
    };

    const doClean = (node) => {
        node.classList.add('tab-style');
        _clean(node);
    };

    return { doClean };
};

contentDiv.addEventListener('click', handle);