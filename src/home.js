function HomeContent() {
    const element = document.createElement('div');
    element.className = 'header-wrapper';

    const caption = document.createElement('h1');
    caption.textContent = 'Cida Chicken Fries';

    const msg = document.createElement('p');
    msg.textContent = 'Here, it is our duty to match your taste buds to what you desire. Just grab a reservation and lets wow you!';

    element.appendChild(caption);
    element.appendChild(msg);

    return element;
}

export default HomeContent;