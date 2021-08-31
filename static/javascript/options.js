function display_input() {
    var error_msg_class = document.getElementById("error_msg").className;
    if (error_msg_class == "instructions error_true") {
        document.getElementById("error_msg").style.removeProperty("display");
        document.getElementsByClassName("contents_div")[0].style.display = "none";
    }
}

function reset_dropdown() {
    document.getElementsByName("date")[0].value = "";
}

function update_table() {
    var tables = document.getElementsByClassName("dataframe");
    var calls_itm = 0, calls_otm = 0, puts_itm = 0, puts_otm = 0;
    var next_itm_call_oi = 0, next_itm_call_strike = 0;

    var calls_tr = tables[0].getElementsByTagName("tr");
    for (i = 1; i < calls_tr.length; i++) {
        if (calls_tr[i].children[11].innerHTML == "False") {
            calls_otm += Number(calls_tr[i].children[9].innerHTML);
            if (next_itm_call_oi == 0) {
                next_itm_call_oi = parseInt(calls_tr[i].children[9].innerHTML);
                next_itm_call_strike = calls_tr[i].children[2].innerHTML;
            }
        }
        else {
            calls_tr[i].style.backgroundColor = "#26a69a";
            calls_tr[i].style.fontWeight = "bold";
            calls_tr[i].style.opacity = "0.65";
            calls_itm += Number(calls_tr[i].children[9].innerHTML);
        }
        calls_tr[i].children[7].innerHTML = calls_tr[i].children[7].innerHTML + "%"
        calls_tr[i].children[10].innerHTML = calls_tr[i].children[10].innerHTML + "%"
        calls_tr[i].children[11].style.display = "none";
    }

    var puts_tr = tables[1].getElementsByTagName("tr");
    for (i = 1; i < puts_tr.length; i++) {
        if (puts_tr[i].children[11].innerHTML == "True") {
            puts_tr[i].style.backgroundColor = "red";
            puts_tr[i].style.fontWeight = "bold";
            puts_tr[i].style.opacity = "0.65";
            puts_itm += Number(puts_tr[i].children[9].innerHTML);
        }
        else {
            puts_otm += Number(puts_tr[i].children[9].innerHTML);
        }

        puts_tr[i].children[7].innerHTML = puts_tr[i].children[7].innerHTML + "%"
        puts_tr[i].children[10].innerHTML = puts_tr[i].children[10].innerHTML + "%"
        puts_tr[i].children[11].style.display = "none";
    }

    c_p_ratio = Math.round(100 * (calls_itm / puts_itm)) / 100
    percentage_diff_next_itm = Math.round(((next_itm_call_oi / calls_itm) * 100))

    options_summary_code = `
        <div class="options_summary_sub_div">
            <div class="options_summary_sub"><span>${calls_itm}<br></span>Calls ITM</div>
            <div class="options_summary_sub"><span>${calls_otm}<br></span>Calls OTM</div>
            <div class="options_summary_sub"><span>${puts_itm}<br></span>Puts ITM</div>
            <div class="options_summary_sub"><span>${puts_otm}<br></span>Puts OTM</div>
            <div class="options_summary_sub"><span>${c_p_ratio}<br></span>C/P Ratio</div>
            <div class="options_summary_sub"><span>+${next_itm_call_oi}(${percentage_diff_next_itm}%)<br></span>Calls ITM @ $${next_itm_call_strike}</div>
        </div>`
    document.getElementsByClassName("options_summary")[0].innerHTML += options_summary_code;

    calls_tr[0].children[11].style.display = "none";
    puts_tr[0].children[11].style.display = "none";

    var straddle = tables[2].getElementsByTagName("tr");
    var straddle_th = straddle[0].querySelectorAll("th");
    for (i=0; i<=4; i++) {
        straddle_th[i].style.backgroundColor = "#26a69a"
    }
    for (i=6; i<=10; i++) {
        straddle_th[i].style.backgroundColor = "red"
    }

    for (i=0; i<straddle.length; i++) {
        straddle[i].children[5].className = "straddle_strike"
    }
}

function show_choice(elem) {
    var choices = document.getElementsByClassName("choices");
    var list_format = document.getElementById("list_format");
    var straddle_format = document.getElementById("straddle_format");
    if (elem == "list") {
        choices[0].className = "choices choice_selected";
        choices[1].className = "choices";
        list_format.style.display = "";
        straddle_format.style.display = "none";
    }
    else {
        choices[0].className = "choices";
        choices[1].className = "choices choice_selected";
        list_format.style.display = "none";
        straddle_format.style.display = "";
    }
}

function draw_open_interest_and_volume() {
    var tr = document.getElementsByTagName("table")[2].querySelectorAll("tr");

    var calls_oi_list = [], puts_oi_list = []
    var calls_vol_list = [], puts_vol_list = []
    var strike_list = [];

    for (row=1; row<tr.length; row++) {
        var td = tr[row].querySelectorAll("td");
        calls_vol_list.push(td[3].innerHTML);
        calls_oi_list.push(td[4].innerHTML);
        puts_vol_list.push(td[9].innerHTML);
        puts_oi_list.push(td[10].innerHTML);
        strike_list.push(td[5].innerHTML);
    }

    options_dict = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                },
                gridLines: {
                    drawOnChartArea: false
                },

            }],

            xAxes: [{
                ticks: {
                    maxTicksLimit: 20,
                    maxRotation: 45,
                    minRotation: 0,
                    callback: function(value, index, values) {
                        return "$" + value;
                    }
                },
                gridLines: {
                    drawOnChartArea: false
                },
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
        },
        hover: {
            mode: 'index',
            intersect: false
        },
    }

    var volume_chart = document.getElementById('volume_chart');
    var volume_chart = new Chart(volume_chart, {
        type: 'line',
        data: {
            labels: strike_list,
            datasets: [{
                label: 'Calls',
                lineTension: 0,  // straight line instead of curve
                data: calls_vol_list,
                borderColor: "green",
                backgroundColor: 'transparent',
                tension: 0.1,
            },
            {
                label: 'Puts',
                lineTension: 0,  // straight line instead of curve
                data: puts_vol_list,
                borderColor: "red",
                backgroundColor: 'transparent',
                tension: 0.1,
            }]
        },
        options: options_dict,
    });

    var oi_chart = document.getElementById('oi_chart');
    var oi_chart = new Chart(oi_chart, {
        type: 'line',
        data: {
            labels: strike_list,
            datasets: [{
                label: 'Calls',
                lineTension: 0,  // straight line instead of curve
                data: calls_oi_list,
                borderColor: "green",
                backgroundColor: 'transparent',
                tension: 0.1,
            },
            {
                label: 'Puts',
                lineTension: 0,  // straight line instead of curve
                data: puts_oi_list,
                borderColor: "red",
                backgroundColor: 'transparent',
                tension: 0.1,
            }]
        },
        options: options_dict,
    });
}