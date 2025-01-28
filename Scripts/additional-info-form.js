document.addEventListener('DOMContentLoaded', () => {
    createAdditionalInfoForm();
});

/** creates additional info form  */

function createAdditionalInfoForm () {
    const container = document.querySelector('.additional-info-form-container');

    if (!container) {
        console.error('Additional info form container not found');
        return;
    }

    const totalEstimateDisplay = document.createElement('div');
    totalEstimateDisplay.className = 'total-price';
    totalEstimateDisplay.innerHTML = `<h2>Your total estimate is £${totalEstimateValue.toFixed(2)}</h2>`;
    container.appendChild(totalEstimateDisplay);

    const form = document.createElement('form');
    form.className = 'additional-info-form';

    const fields = [
        { label: 'Additional Information:', type: 'textarea', id: 'additional-info', name: 'additional-info', rows: 4, cols: 50 },
        { label: 'Name:', type: 'text', id: 'name', name: 'name', required: true },
        { label: 'Email:', type: 'email', id: 'email', name: 'email', required: true },
        { label: 'Phone Number:', type: 'tel', id: 'phone', name: 'phone', required: true }
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
            textarea.rows = field.rows;
            textarea.cols = field.cols;
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

    const totalEstimateInput = document.createElement('input');
    totalEstimateInput.type = 'hidden';
    totalEstimateInput.id = 'total-estimate';
    totalEstimateInput.name = 'total-estimate';
    totalEstimateInput.value = totalEstimateValue; // Set the total estimate value
    form.appendChild(totalEstimateInput);

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn';
    button.innerHTML = 'Submit <span class="button-arrow"> > ></span>';
    form.appendChild(button);

    container.appendChild(form);
}

/**
 * Handles the form submission.
 * @param {Event} event - The form submission event.
 */
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Send the form data to the server using fetch
    fetch(form.action, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Form submitted successfully');
        } else {
            alert('Form submission failed');
        }
    }).catch(error => {
        console.error('Error submitting form:', error);
        alert('Error submitting form');
    });
}