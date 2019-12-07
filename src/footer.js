function Footer() {
    const element = document.createElement('div');
    element.className = 'footer-wrapper bg-dark text-light';
    element.innerHTML = '<p>Copyright &copy; 2019 | michaelOch</p>';

    return element;
}

export default Footer;