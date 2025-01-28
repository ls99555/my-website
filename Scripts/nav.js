document.addEventListener('DOMContentLoaded', () => {
    createHeader();
});

/**
 * Creates and appends the header with navigation to the document body.
 */
function createHeader() {
    try {
        const header = document.createElement('header');

        // Create and append the site title
        const siteTitle = document.createElement('h1');
        const homeLink = document.createElement('a');
        homeLink.href = 'index.html';
        homeLink.textContent = 'Electrical Contractors Essex';
        siteTitle.appendChild(homeLink);
        header.appendChild(siteTitle);

        // Create and append the navigation
        const nav = document.createElement('nav');
        const navList = document.createElement('ul');

        const links = [
            { href: 'index.html', text: 'Home' },
            { href: 'team.html', text: 'Meet the team' },
            { href: 'services.html', text: 'Services' },
            { href: 'estimates.html', text: 'Estimates' },
            { href: 'contact.html', text: 'Contact' }
        ];

        links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.text;
            anchor.setAttribute('aria-label', link.text); // Accessibility
            listItem.appendChild(anchor);
            navList.appendChild(listItem);
        });

        nav.appendChild(navList);
        header.appendChild(nav);

        // Insert the header at the beginning of the body
        document.body.insertBefore(header, document.body.firstChild);
    } catch (error) {
        console.error('Error creating header:', error);
    }
}