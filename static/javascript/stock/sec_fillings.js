function load_table_url() {
    tr = document.getElementsByTagName("table")[0].querySelectorAll("tr");
    tr[0].querySelectorAll("th")[3].style.display = "none"
    tr[0].querySelectorAll("th")[4].style.display = "none"
    for (i=1; i<tr.length; i++) {
        td = tr[i].querySelectorAll("td")
        report_link = td[3].innerHTML
        sec_link = td[4].innerHTML
        td[1].innerHTML = `<a href="${sec_link}" target="_blank" class="explore_sec">SEC</a>
                           <a href="${report_link}" target="_blank" class="explore_report">Report</a>` + td[1].innerHTML
        td[3].style.display = "none"
        td[4].style.display = "none"
    }
}