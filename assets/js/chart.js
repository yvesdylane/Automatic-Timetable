document.addEventListener("DOMContentLoaded", function () {
    // Get the values from the <p> elements
    const commonValue = document.getElementById('common').textContent;
    const generalValue = document.getElementById('general').textContent;
    const specialityValue = document.getElementById('speciality').textContent;

    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Create the chart
    const myChart = new Chart(ctx, {
        type: 'pie', // You can change this to 'pie', 'line', etc.
        data: {
            labels: ['Common', 'General', 'Speciality'],
            datasets: [{
                label: 'Statistics',
                data: [commonValue, generalValue, specialityValue],
                backgroundColor: [
                    'aquamarine',
                    'turquoise',
                    'teal'
                ],
                borderColor: [
                    'aquamarine',
                    'turquoise',
                    'teal'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
