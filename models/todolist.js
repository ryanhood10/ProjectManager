// ======= Handlebars.js stuff

// Get Template with HTML & Handlebars syntax
var source = $("#some-template").html();

// Compile (package) HTML & Javascript
var template = Handlebars.compile( source );

// Data to be displayed
var data = {
    tasks: [
        {
            priority: "High",
            title: "Rebuild Task Portal UI",
            description: "Figure out a new way to build the task system.",
            status: "35%",
            timeUsed: 4.5,
            timeTotal: 4.75
        }, {
            priority: "High",
            title: "Update Client Portal",
            description: "Remove the Iframes from the client portal.",
            status: "70%",
            timeUsed: 1.5,
            timeTotal: 5
        }, {
            priority: "Normal",
            title: "Update Time Card Forms",
            description: "Convert the time card forms to web forms.",
            status: "0%",
            timeUsed: 0,
            timeTotal: 3.25
        }, {
            priority: "Normal",
            title: "Assign employee ID numbers",
            description: "Give each employee their own unique employee number.",
            status: "15%",
            timeUsed: 6,
            timeTotal: 43.50
        }, {
            priority: "Low",
            title: "Change website styling",
            description: "Edit design of company website.",
            status: "100%",
            timeUsed: 4.5,
            timeTotal: 4.75
        }, {
            priority: "Low",
            title: "Resupply company cleaning supplies.",
            description: "Go to store to purchase janitorial supplies.",
            status: "10%",
            timeUsed: 1,
            timeTotal: 4.75
        }
    ]
};

// Create a helper function to calculate the remaining time on a task
Handlebars.registerHelper('calcRemaining', function() {
  return this.timeTotal - this.timeUsed;
});

// Merge the template with the data, and place it on the page
$("#content-placeholder").html( template( data ) ); 
