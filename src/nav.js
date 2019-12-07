function Nav() {
    const element = document.createElement('div');
    element.className = 'fixed-top';
    element.classList.add('bg-dark');
    element.classList.add('tab-wrapper');

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('btn');
    homeBtn.classList.add('btn-dark');
    homeBtn.id = 'home-btn';
    homeBtn.textContent = 'HOME';

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('btn');
    menuBtn.classList.add('btn-dark');
    menuBtn.id = 'menu-btn';
    menuBtn.textContent = 'MENU';

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('btn');
    contactBtn.classList.add('btn-dark');
    contactBtn.id = 'contact-btn';
    contactBtn.textContent = 'CONTACT';

    btnGroup.appendChild(homeBtn);
    btnGroup.appendChild(menuBtn);
    btnGroup.appendChild(contactBtn);

    element.appendChild(btnGroup);

    return element;
}

export default Nav;