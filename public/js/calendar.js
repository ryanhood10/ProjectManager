let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let prevButton = document.getElementById("prev-month");
if (prevButton) {
prevButton.addEventListener("click", function() {
currentMonth--;
if (currentMonth < 0) {
currentMonth = 11;
currentYear--;
}
updateCalendar();
});
}

let nextButton = document.getElementById("next-month");
if (nextButton) {
nextButton.addEventListener("click", function() {
currentMonth++;
if (currentMonth > 11) {
currentMonth = 0;
currentYear++;
}
updateCalendar();
});
}

function updateCalendar() {
let date = 1;
let rows = [];
for (let i = 0; i < 6; i++) {
let cells = [];
for (let j = 0; j < 7; j++) {
if (i === 0 && j < (new Date(currentYear, currentMonth, 1).getDay())) {
cells.push("");
} else if (date > (new Date(currentYear, currentMonth + 1, 0).getDate())) {
cells.push("");
} else {
cells.push(date);
date++;
}
}
rows.push({cells});
}
console.log(rows)

document.getElementById("calendar-template").innerHTML = sour 
ce
let template = Handlebars.compile(source);
let html = template({rows});
document.getElementById("calendar").innerHTML = html;
}

updateCalendar();