function load_trending_graph(timing) {
    var tr = document.getElementsByTagName("table")[0].querySelectorAll("tr");
    var date_list = [], score_list = [], close_price_list = []
    for (i=1; i<tr.length; i++) {
        var td = tr[i].querySelectorAll("td");
        date_list.push(td[0].innerHTML);
        score_list.push(td[1].innerHTML);
        close_price_list.push(td[2].innerHTML);
    }

    if (timing == "Past 12 months") {
        document.querySelector(".reminder").innerHTML = `Note: Last data point (Week of ${date_list[date_list.length-1]}) is currently incomplete.`
    }

    var trending = document.getElementById('trending');
    var trending = new Chart(trending, {
        type: 'line',
        data: {
            labels: date_list,
            datasets: [{
                label: 'Interest',
                lineTension: 0,
                data: score_list,
                borderColor: "orange",
                backgroundColor: 'transparent',
                tension: 0.1,
                yAxisID: 'A',
            },
            {
                label: 'Close Price',
                lineTension: 0,
                data: close_price_list,
                borderColor: "rgb(38, 166, 154)",
                backgroundColor: 'transparent',
                tension: 0.1,
                yAxisID: 'B',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true
             },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                    },
                    gridLines: {
                        drawOnChartArea: false,
                        color: "grey",
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Interest [%]',
                        beginAtZero: true,
                    },
                    id: "A",
                },
                {
                    ticks: {
                        beginAtZero: false,
                    },
                    gridLines: {
                        drawOnChartArea: false,
                        color: "grey",
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Prev Close [$]',
                        beginAtZero: true,
                    },
                    id: "B",
                    position:"right"
                }],
                xAxes: [{
                    ticks: {
                      maxTicksLimit: 15,
                      maxRotation: 45,
                      minRotation: 0,
                    },
                    gridLines: {
                        drawOnChartArea: false,
                        color: "grey",
                    }
                }]
            },
            // To remove the point of each label
            elements: {
                point: {
                    radius: 0
                }
            },

            // To show value when hover on any part of the graph
            tooltips: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        var label = data.datasets[tooltipItem.datasetIndex].label;
                        if (label.includes("Price")) {
                            return label + ': $' + value;
                        }
                        else {
                            return label + ': ' + value + '%';
                        }
                    }
                }
            },
            hover: {
                mode: 'index',
                intersect: false
            },
        }
    });
}