document.addEventListener('DOMContentLoaded' , () => {
    const footer = document.createElement('footer');

    const p = document.createElement('p');
    p.textContent = ' \u00A9 Electrical Contractors Essex Ltd 2024. Designed by ';

    const link = document.createElement('a');
        length.href = 'https://www.example.com';
        link.textContent ='Luke Stevens';
   
    p.appendChild(link);
    footer.appendChild(p);

    document.body.appendChild(footer);

});