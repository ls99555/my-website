document.addEventListener('DOMContentLoaded', () => {
    createContactForm();
});


/* Creates contact form to the contact form container */


function createContactForm() {
    const container = document.querySelector('.contact-form-container');

    if (!container) {
        console.error('Contact form not found');
        return;
    }

    const heading = document.createElement('h2');
    heading.textContent = 'Contact form';
    container.appendChild(heading);

    const form = document.createElement('form');
    form.action = 'submit_form.php';
    form.method = 'post';
    form.className = 'contact-form';

    const fields = [
        {label: 'Name:', type: 'text', id: 'name', name: 'name', required: true },
        { label: 'Email:', type: 'email', id: 'email', name: 'email', required: true },
        { label: 'Phone Number:', type: 'tel', id: 'phone', name: 'phone', required: true },
        { label: 'Message:', type: 'textarea', id: 'message', name: 'message', required: true }
    ];

    fields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        form.appendChild(label);

        if (field.type === 'textarea') {
            const textarea = document.createElement('textarea');
            textarea.id = field.id;
            textarea.name = field.name;
            textarea.rows = 4;
            textarea.cols = 50;
            textarea.required = field.required;
            form.appendChild(textarea);
        } else {
           const input = document.createElement('input');
           input.type = field.type;
           input.id = field.id;
           input.name = field.name;
           input.required = field.required;
           form.appendChild(input);
        }
    });

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn';
    button.innerHTML = 'Submit <span class="button-arrow"> > ></span>';
    form.appendChild(button);

    container.appendChild(form);
}