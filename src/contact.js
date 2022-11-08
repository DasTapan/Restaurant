const contactLoad = (element) => {

    let _contactDiv = document.createElement('div');
    _contactDiv.classList.add('contact-card');

    let _contactHeading = document.createElement('h2');
    _contactHeading.classList.add('contact-heading');
    _contactHeading.textContent = 'Royal Restaurant';

    let _addressBox = document.createElement('div');
    _addressBox.classList.add('address-box');

    const _spanOne = document.createElement('span');
    _spanOne.classList.add('span-one')
    _spanOne.textContent = 'C T Road';
    const brOne = document.createElement('br');

    const _spanTwo = document.createElement('span');
    _spanTwo.classList.add('span-two')
    _spanTwo.textContent = 'Puri-2, Odisha'
    const brTwo = document.createElement('br');

    const _spanThree = document.createElement('span');
    _spanThree.classList.add('span-three')
    _spanThree.textContent = 'PIN- 752002'
    const brThree = document.createElement('br');

    const _spanFour = document.createElement('span');
    _spanFour.classList.add('span-four')
    _spanFour.textContent = 'Ph- 8280213987';
    const brFour = document.createElement('br');

    _addressBox.append(_spanOne, _spanTwo, _spanThree, _spanFour);

    _spanOne.insertAdjacentElement('afterend', brOne);
    _spanTwo.insertAdjacentElement('afterend', brTwo);
    _spanThree.insertAdjacentElement('afterend', brThree);
    _spanFour.insertAdjacentElement('afterend', brFour);

    _contactDiv.append(_contactHeading, _addressBox);

    const _render = () => {
        element.appendChild(_contactDiv);
    };

    const renderContact = () => {
        _render();
    };

    return { renderContact };

};

export default contactLoad;