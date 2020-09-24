console.log('logic.js connected');

// Delaring Variables 

// On Click Events 

// click event configured to log value(s) entered in time slot associated with save button pressed
$(".saveBtn").on("click", function() {
    let value = $(this).prev();
    console.log(value.val());
    let key   = value.prev();
    console.log(key.text());

});


// Functions 

function generateCurrentDay() {

};
// Establish current day on page load
generateCurrentDay();

// addRemove class of 'active' for highlighting current hour
