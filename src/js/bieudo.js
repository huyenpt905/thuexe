// char.js
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'Số xe',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0,2,4,6,8,10,12,14,16,18]
        }

            // {
            //    label: 'Doanh thu',
            //    data: [14000000, 16000000, 8000000, 2000000, 4000000, 6000000, 10000000,18000000, 12000000],
            //    borderColor: 'red',
            //    type: 'line'
            // }
        ],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },

    // Configuration options go here
    options: {}
});