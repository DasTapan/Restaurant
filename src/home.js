const pageLoad = (element) => {
    const _headerElement = document.createElement('div');
    const _mainElement = document.createElement('div');
    const _footerElement = document.createElement('div');

    _headerElement.classList.add('header');
    _mainElement.classList.add('main');
    _footerElement.classList.add('footer');

    const _headingSpan = document.createElement('span');
    _headingSpan.classList.add('heading');
    _headerElement.append(_headingSpan);

    _headingSpan.textContent = 'Royal Restaurant';
    _footerElement.textContent = '© DasTapan. All Rights Reserved';

    const _navMenu = document.createElement('div');
    _navMenu.classList.add('nav-menu');

    const _homeLink = document.createElement('a');
    _homeLink.setAttribute('id', 'home-button');
    _homeLink.textContent = 'Home';

    const _menuLink = document.createElement('a');
    _menuLink.setAttribute('id', 'menu-button');
    _menuLink.textContent = 'Menu';

    const _contactLink = document.createElement('a');
    _contactLink.setAttribute('id', 'contact-button');
    _contactLink.textContent = 'Contact';

    _navMenu.append(_homeLink, _menuLink, _contactLink);
    _headerElement.appendChild(_navMenu);

    const _append = () => {
        element.append(_headerElement, _mainElement, _footerElement);
    }

    const render = () => { _append() };

    return { render };
}

export default pageLoad;