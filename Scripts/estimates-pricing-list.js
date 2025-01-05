document.addEventListener('DOMContentLoaded', function() {
    const domesticList = document.querySelector('.domestic-list');
    const commercialList= document.querySelector('.commercial-list');
    const testingList = document.querySelector('.testing-list');

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
        { name: 'HVAC control wiring', price: 600 }
    ];

    const testingServices = [
        { name: 'Periodic inspection report', price: 150 },
        { name: 'Portable appliance testing (PAT)', price: 2 },
        { name: 'Electrical installation condition report (EICR)', price: 150 },
        { name: 'Landlord safety certificate', price: 120 }
    ];
function createEstimateForm  (services, container) {  
    const form = document.createElement('form');
    form.id = 'estimates-form';

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

        label.appendChild(input);
        form.appendChild(label);
    });

    const totalEstimate = document.createElement('p');
    totalEstimate.innerHTML = 'Total Estimate: £<span id="total-estimate">0</span>';
    totalEstimate.style.gridColumn = 'span 3'; // Span across both columns
    form.appendChild(totalEstimate);

    container.appendChild(form);

    const serviceInputs = document.querySelectorAll('.service');
    const totalEstimateElement = document.getElementById('total-estimate');

    serviceInputs.forEach(service => {
        service.addEventListener('change', updateTotal);
    });

    function updateTotal() {
        let total = 0;
        serviceInputs.forEach(service => {
            total += parseFloat(service.dataset.price) * parseInt(service.value, 10);
        });
        totalEstimateElement.textContent = total.toFixed(2);
    }
}

createEstimateForm(domesticServices, domesticList);
createEstimateForm(commercialServices, commercialList);
createEstimateForm(testingServices, testingList);

});