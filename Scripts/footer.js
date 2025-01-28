document.addEventListener('DOMContentLoaded', () => {
    createFooter();
});

/**
 * Creates and appends the footer to the document body.
 */
function createFooter() {
    const footer = document.createElement('footer');

    const paragraph = document.createElement('p');
    paragraph.textContent = ' \u00A9 Electrical Contractors Essex Ltd 2024. Designed by ';

    const link = document.createElement('a');
    link.href = 'https://github.com/ls99555?tab=repositories';
    link.textContent = 'Luke Stevens';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    paragraph.appendChild(link);
    footer.appendChild(paragraph);

    document.body.appendChild(footer);
}