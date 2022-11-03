const pageLoad = () => {
    const headerElement = document.createElement('div');
    const mainElement = document.createElement('div');
    const footerElement = document.createElement('div');
    headerElement.classList.add('header');
    mainElement.classList.add('main');
    footerElement.classList.add('footer');

    return { headerElement, mainElement, footerElement };
}

export default pageLoad;