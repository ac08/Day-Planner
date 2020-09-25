console.log('logic.js connected');

// Delaring Variables 
let ex = JSON.parse(window.localStorage.getItem("item"));
console.log(ex);

// On Click Events 

// click event configured to log value(s) entered in time slot associated with save button pressed
$(".saveBtn").on("click", function() {
    let savedEvents = JSON.parse(window.localStorage.getItem("item")) || [];

    let eventText = $(this).prev();
    let timeVal   = eventText.prev();

    let newEvent = {
        time: parseInt(timeVal.text()),
        event: eventText.val()
    };
    
    savedEvents.push(newEvent);
    window.localStorage.setItem("item", JSON.stringify(savedEvents));
    
});


// Functions 

function generateCurrentDay() {

};
// Establish current day on page load
generateCurrentDay();

// Add Remove class of 'active' for highlighting current hour

// Populate saved events 
function onLoad() {
    ex.forEach(value, i) {
        let event = ex[i].
    };
};
