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
            for(let i=0; i<9; i++){
                const element = document.createElement('div');
                element.classList.add('menu-card');
                mainDiv.appendChild(element);
            }
            break;

        case 'contact-button':
            wipe().doClean(mainDiv);
            console.log('Everything cleared');
            const element = document.createElement('div');
            element.classList.add('contact-card');
            mainDiv.appendChild(element);
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
        _clean(node);
    };

    return { doClean };
};

contentDiv.addEventListener('click', handle);