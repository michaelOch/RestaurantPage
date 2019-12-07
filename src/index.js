import Nav from './nav';
import Footer from './footer';
import HomeContent from './home';
import MenuContent from './menu';
import ContactContent from './contact';

document.querySelector('#content').appendChild(Nav());
document.querySelector('#content').appendChild(HomeContent());
document.querySelector('#content').appendChild(Footer());

//  Add Event Listener to the Nav buttons
document.querySelector('#content').addEventListener('click', function(e) {
    if(e.target.id === 'home-btn') {
        document.querySelector('#content').children[1].remove();
        document.querySelector('#content').children[1].remove();
        document.querySelector('#content').appendChild(HomeContent());
        document.querySelector('#content').appendChild(Footer());
    }

    if(e.target.id === 'menu-btn') {
        document.querySelector('#content').children[1].remove();
        document.querySelector('#content').children[1].remove();
        document.querySelector('#content').appendChild(MenuContent());
        document.querySelector('#content').appendChild(Footer());
    }

    if(e.target.id === 'contact-btn') {
        document.querySelector('#content').children[1].remove();
        document.querySelector('#content').children[1].remove();
        document.querySelector('#content').appendChild(ContactContent());
        document.querySelector('#content').appendChild(Footer());
    }
});