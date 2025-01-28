let totalEstimateValue = 0;

document.addEventListener('DOMContentLoaded', function() {
    const domesticList = document.querySelector('.domestic-list');
    const commercialList = document.querySelector('.commercial-list');
    const testingList = document.querySelector('.testing-list');
    const totalPriceContainer = document.querySelector('.total-price-container');

    const domesticServices = [
        { name: 'New cooker or oven supply', price: 80 },
        { name: 'Cooker hood supply', price: 50 },
        { name: 'Double or single socket', price: 50 },
        { name: 'USB sockets', price: 75 },
        { name: 'Outside socket', price: 60 },
        { name: 'Downlights', price: 60 },
        { name: 'Ceiling pendant', price: 45 },
        { name: 'Lighting supply no fitting supplied', price: 40 },
        { name: 'Outside lights', price: 50 },
        { name: 'Bathroom fans', price: 160 },
        { name: 'Consumer unit and testing', price: 350 },
        { name: 'Electric shower supply', price: 200 },
        { name: 'Electric car charger', price: 350 },
        { name: 'Home Battery Installation', price: 500 }, 
        { name: 'Solar Panel Installation', price: 1000 }
    ];

    const commercialServices = [
        { name: 'Office rewiring', price: 4000 },
        { name: 'Installing new electrical sockets', price: 150 },
        { name: 'Installing new lighting fixtures', price: 200 },
        { name: 'Electrical safety certificate', price: 250 },
        { name: 'Consumer unit replacement', price: 800 },
        { name: 'Emergency lighting installation', price: 500 },
        { name: 'Security system installation', price: 1000 },
        { name: 'Data cabling installation', price: 300 },
        { name: 'Fire alarm system installation', price: 1200 },
        { name: 'HVAC control wiring', price: 600 },
        { name: 'Generator Installation', price: 2000 }, 
        { name: 'CCTV Installation', price: 1500 }
    ];

    const testingServices = [
        { name: 'Periodic inspection report', price: 150 },
        { name: 'Portable appliance testing (PAT)', price: 2 },
        { name: 'Electrical installation condition report (EICR)', price: 150 },
        { name: 'Landlord safety certificate', price: 120 },
        { name: 'Electrical Load Testing', price: 250 }, 
        { name: 'Emergency Lighting Testing', price: 100 }
    ];

    
    // Creates estiamtes forms
    function createEstimateForm(services, container, headingText) {
        // Create and append the heading
        const heading = document.createElement('h2');
        heading.textContent = headingText;
        container.appendChild(heading);

        // Create the form element
        const form = document.createElement('form');
        form.className = 'estimates-form';
        
        // Create and append form elements for each service
        services.forEach(service => {
            const label = document.createElement('label');
            label.className = 'service-label';
            label.textContent = `${service.name} (£${service.price} each):`;

            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'service';
            input.dataset.price = service.price;
            input.min = 0;
            input.value = 0;
            input.setAttribute('aria-label', service.name); // Accessibility

            label.appendChild(input);
            form.appendChild(label);
        });

        // Create and append the total estimate element
        const totalEstimate = document.createElement('h4');
        totalEstimate.className = 'total-estimate-heading';
        totalEstimate.innerHTML = 'Total Estimate: £<span class="total-estimate">0</span>';
        form.appendChild(totalEstimate);

        // Append the form to the container
        container.appendChild(form);

        // Add event listeners to update the total estimate
        const serviceInputs = form.querySelectorAll('.service');
        const totalEstimateElement = form.querySelector('.total-estimate');

        serviceInputs.forEach(service => {
            service.addEventListener('change', updateTotal);
        });

        /**
         * Updates the total estimate based on the input values.
         */
        function updateTotal() {
            let total = 0;
            serviceInputs.forEach(service => {
                total += service.value * service.dataset.price;
            });
            totalEstimateElement.textContent = total.toFixed(2);
            totalEstimateValue = total;
            updateTotalPrice();
        }
    }

    /**
     * Updates the grand total price by summing up all individual total estimates.
     */
    function updateTotalPrice() {
        const totalEstimates = document.querySelectorAll('.total-estimate');
        let grandTotal = 0;
        totalEstimates.forEach(totalEstimate => {
            grandTotal += parseFloat(totalEstimate.textContent);
        });
        totalPriceContainer.innerHTML = `<h2>Your total estimate is £${grandTotal.toFixed(2)}</h2>`;
    }

    createEstimateForm(domesticServices, domesticList, 'Domestic Services');
    createEstimateForm(commercialServices, commercialList, 'Commercial Services');
    createEstimateForm(testingServices, testingList, 'Testing Services');

    
    updateTotalPrice();
});

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