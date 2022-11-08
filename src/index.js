import './style.css';
import pageLoad from './home.js';
import menuLoad from './menu.js';
import contactLoad from './contact.js';

const contentDiv = document.querySelector('.content');
pageLoad(contentDiv).render();

let mainDiv = document.querySelector('.main');

const handle = (event) => {
    let _linkId;

    if (event.target.nodeName == 'A') {
        _linkId = event.target.getAttribute('id');
    }

    // call respective methods
    const _filterTask = () => {
        switch (_linkId) {
            case 'home-button':
                wipe().doClean(mainDiv);
                break;

            case 'menu-button':
                wipe().doClean(mainDiv);
                menuLoad(mainDiv).renderMenu();

                break;

            case 'contact-button':
                wipe().doClean(mainDiv);
                contactLoad(mainDiv).renderContact();

                break;

            default:
                break;
        }
    };

    const render = () => {
        _filterTask();
    };

    return { render };
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

contentDiv.addEventListener('click', (event) => {
    handle(event).render();
});