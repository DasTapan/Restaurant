import './style.css';
import pageLoad from './home.js';

console.log('Jay Jagannath');
const contentDiv = document.querySelector('.content');
pageLoad(contentDiv).render();