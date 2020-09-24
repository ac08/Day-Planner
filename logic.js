console.log('logic.js connected');

// Delaring Variables 

// On Click Events 

// click event configured to log value(s) entered in time slot associated with save button pressed
$(".saveBtn").on("click", function() {
    let item = $(this).prev();
    console.log(item.val());
});


// Functions 

function generateCurrentDay() {

};
// Establish current day on page load
generateCurrentDay();

// addRemove class of 'active' for highlighting current hour
