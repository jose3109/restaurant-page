import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadAbout} from './about.js';
import './styles.css';

const content = document.querySelector('#content');
const nav = document.querySelector('nav');

const clearPage = () => {
   content.replaceChildren();
}
const pages = {
    home: loadHome,
    menu: loadMenu,
    about: loadAbout
}

//Loads a different ui depending on the tab by targeting the class name
const currentTab = (e) => {
    const target = e.target.classList;
    if (!target) return;

    for (const key in pages) {
        if(target.contains(key)){
            clearPage();
            pages[key](content);
        }
    }
   
}
loadHome(content);
nav.addEventListener('click', currentTab);
