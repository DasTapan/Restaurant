import './style.css';
import pageLoad from './home.js';

console.log('Jay Jagannath');
const contentDiv = document.querySelector('.content');
console.log(contentDiv);
contentDiv.append(
    pageLoad().headerElement,
    pageLoad().mainElement,
    pageLoad().footerElement
);