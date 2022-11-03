import './style.css';
import pageLoad from './home.js';

console.log('Jay Jagannath');
const contentDiv = document.querySelector('.content');
pageLoad(contentDiv).render();

const mainDiv = document.querySelector('.main');
console.log(mainDiv);

const handle = (event) => {
    let _linkId;
    if (event.target.nodeName == 'A') {
        console.log('Responding');
        _linkId = event.target.getAttribute('id');
    }
    console.log(_linkId);
};

contentDiv.addEventListener('click', handle);