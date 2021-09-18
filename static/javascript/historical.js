function display_data() {
    var historical_data = document.getElementsByTagName("table")[0]
    var latest_date = document.getElementById("latest_date").value
    var input_row = historical_data.insertRow(1);
    var input_rank = input_row.insertCell(0);
    var input_day = input_row.insertCell(1);
    var input_date = input_row.insertCell(2);
    var input_open = input_row.insertCell(3);
    var input_high = input_row.insertCell(4);
    var input_low = input_row.insertCell(5);
    var input_close = input_row.insertCell(6);
    var input_vol = input_row.insertCell(7);
    var input_price_change = input_row.insertCell(8);
    var input_amplitude = input_row.insertCell(9);
    var input_vol_change = input_row.insertCell(10);
    var input_vol_price_ratio = input_row.insertCell(11);

    input_rank.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 0)'>"
    input_day.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 1)'>"
    input_date.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 2)'>"
    input_open.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 3)'>"
    input_high.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 4)'>"
    input_low.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 5)'>"
    input_close.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 6)'>"
    input_vol.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 7)'>"
    input_price_change.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 8)'>"
    input_amplitude.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 9)'>"
    input_vol_change.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 10)'>"
    input_vol_price_ratio.innerHTML = "<input placeholder='Search: ' onkeyup='searchColumn(this, 11)'>"

    historical_data = historical_data.querySelectorAll("tr");
    for (i=2; i<historical_data.length; i++) {
        var td = historical_data[i].querySelectorAll("td");

        if (td[2].innerHTML == latest_date) {
            historical_data[i].style.fontWeight = "bold";
            historical_data[i].style.backgroundColor = "gray";
        }

        td[7].innerHTML = Number(td[7].innerHTML).toLocaleString()
        td[11].innerHTML = Number(td[11].innerHTML).toLocaleString()

        if (String(td[8].innerHTML).includes("-")) {
            td[8].style.color = "red";
        }
        else {
            td[8].style.color = "green";
        }

        if (String(td[10].innerHTML).includes("-")) {
            td[10].style.color = "red";
        }
        else {
            td[10].style.color = "green";
        }

        td[8].innerHTML = td[8].innerHTML + "%"
        td[9].innerHTML = td[9].innerHTML + "%"
        td[10].innerHTML = td[10].innerHTML + "%"
    }
}

const searchColumn = (elem, col_num) =>{
let filter = elem.value.toUpperCase();
let table = document.getElementsByTagName("table")[0];
let tr = table.getElementsByTagName('tr');
for (var i = 2; i < tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[col_num];
    if(td) {
        let textValue = td.textContent || td.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display="";
        }
        else {
            tr[i].style.display="none";
            }
        }
    }
}

function stats() {
    var historical_data = document.getElementsByTagName("table")[0].querySelectorAll("tr");

    var total_count = 0;
    var green_days = 0
    for (i=2; i<historical_data.length; i++) {
        total_count += 1;
        var percent_change = historical_data[i].querySelectorAll("td")[8].innerHTML;
        if (! percent_change.includes("-")) {
            green_days += 1
        }
    }
    var percent_green = Math.round(10000 * green_days / total_count) / 100
    document.getElementById("general_stats").innerHTML = `Green Days: ${green_days}/${total_count} (${percent_green}%)`
}


function draw_graph() {
    tr = document.querySelectorAll("table")[1].querySelectorAll("tr")
    day_list = [], percent_change_list = []
    for (i=1; i<tr.length; i++) {
        td = tr[i].querySelectorAll("td")
        day_list.push(td[0].innerHTML)
        percent_change_list.push(td[1].innerHTML)
    }

    var historical_chart = document.getElementById('historical_chart');
    var historical_chart = new Chart(historical_chart, {
        type: 'bar',
        data: {
            labels: day_list,
            datasets: [{
                label: '% Price Change',
                data: percent_change_list,
                borderColor: "orange",
                backgroundColor: 'orange',
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                bar: {
                  borderWidth: 1,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
            },
            scales: {
                 x: {
                    grid: {
                        display: true,
                    }
                 },
                 y: {
                    grid: {
                        display: true,
                    }
                 }
            },

            // To show value when hover on any part of the graph
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'index',
                intersect: false
            },
        }
    });
}