import './style.css';
import pageLoad from './home.js';

const contentDiv = document.querySelector('.content');
pageLoad(contentDiv).render();

let mainDiv = document.querySelector('.main');
console.log(mainDiv);
console.log(mainDiv.childElementCount);

const handle = (event) => {
    let _linkId;

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
            for(let i=0; i<6; i++) {
                const element = document.createElement('div');
                element.classList.add('food-box');
                menuDiv.appendChild(element);
            };
            mainDiv.append(menuHeading, menuDiv);

            break;

        case 'contact-button':
            wipe().doClean(mainDiv);
            console.log('Everything cleared');

            let contactDiv = document.createElement('div');
            contactDiv.classList.add('contact-card');
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
        node.classList.add('menu-home-view');
        _clean(node);
    };

    return { doClean };
};

contentDiv.addEventListener('click', handle);