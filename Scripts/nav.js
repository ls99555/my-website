document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.textContent = 'Electrical Contractors Essex';
    h1.appendChild(homeLink);
    header.appendChild(h1);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const links = [
        { href: 'index.html', text: 'Home' },
        { href: 'team.html', text: 'Meet the team' },
        { href: 'services.html', text: 'Services' },
        { href: 'estimates.html', text: 'Estimates' },
        { href: 'electrical-calculations.html', text: 'Electrical Calculations' },
        { href: 'contact.html', text: 'Contact' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);

    document.body.insertBefore(header, document.body.firstChild);
});