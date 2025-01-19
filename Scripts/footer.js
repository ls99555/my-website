document.addEventListener('DOMContentLoaded' , () => {
    const footer = document.createElement('footer');

    const p = document.createElement('p');
    p.textContent = ' \u00A9 Electrical Contractors Essex Ltd 2024. Designed by ';

    const link = document.createElement('a');
        link.href = 'https://github.com/ls99555?tab=repositories';
        link.textContent ='Luke Stevens';
        link.target='_blank';
        link.rel = 'noopener noreferrer';
   
    p.appendChild(link);
    footer.appendChild(p);

    document.body.appendChild(footer);

});