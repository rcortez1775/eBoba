function displayNav() {
    var nav = document.getElementById("myNav");
    nav.style.width = nav.style.width == '100%' ? '0%' : '100%';
}

function myFunction() {
    var x = document.getElementById("buttons");
    x.style.display = x.style.display === 'none' ? 'block' : 'none';
}

function activityFunction(title) {
    var currentDate = new Date(),
        day = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear();

    var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var suffix = "AM";
    if (hours >= 12) {
        suffix = "PM";
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    }
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = title;
    cell2.innerHTML = hours + ":" + minutes + " " + suffix;
    cell3.innerHTML = month + "/" + day + "/" + year;
}