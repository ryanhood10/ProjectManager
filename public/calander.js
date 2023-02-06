

//CALENDAR CLICK EVENTS

// Click event for Entering events 
document.addEventListener("click", function(event) {
  if (event.target.id.endsWith("-button-enter")) {
    const input = event.target.parentElement.querySelector("input");
    const output = event.target.parentElement.querySelector("output");
    const newOutput = document.createElement("li");
    newOutput.textContent = input.value;
    output.appendChild(newOutput);
    input.value = "";
  }
});
// Click event for deleting events
document.addEventListener("click", function(event) {
  if (event.target.id.endsWith("-button-delete")) {
  const output = event.target.parentElement.querySelector("output");
  let outputArray = output.textContent.split(", ");
  outputArray.pop();
  output.textContent = outputArray.join(", ");
  }
  });

//  TO DO: click event for zooming in on events




// TO DO: Create an array to make the calander 7x5 grid for the dayjs array to populate into
// TO DO: Write a function to make the array start to populate where the day of the week matches 

// let calBoxArray = [];

// for (let i = 1; i <= 35; i++) {
//   calBoxArray.push({
//     id: "calBox" + i
//   });
// };
// let calendarBody = document.querySelector("#calendar-body");



