const ctx = document.getElementById('carbonChart').getContext('2d');

const carbonChart = new Chart(ctx, {
    type: 'bar', // Change to 'pie' or 'line' for different chart types
    data: {
        labels: ['Electricity', 'Natural Gas', 'Transportation', 'Waste', 'Food'],
        datasets: [{
            label: 'Emissions (kg CO2)',
            data: [200, 150, 300, 50, 100], // Replace these numbers with your data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
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


