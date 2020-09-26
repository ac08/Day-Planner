// Variable Declaration 
let savedEvents = JSON.parse(window.localStorage.getItem("item"));

// On Click Events 

// click event configured to log value(s) entered in time slot associated with save button clickd
$(".saveBtn").on("click", function() {
    // retreive key value "item" from local storage, or create new array for storing time: event pair
    let savedEvents = JSON.parse(window.localStorage.getItem("item")) || [];

    // on click, set variable eventText to the event text associated with save button clicked
    let eventText = $(this).prev();
    // on click, set variable timeVal to retrieve value of time attribute on save button clicked
    let timeVal = $(this).attr("time");

    // set variable newEvent to time: event pair of save button clicked
    let newEvent  = {
        time: parseInt(timeVal),
        event: eventText.val()
    };
    
    // push new event to savedEvents array
    savedEvents.push(newEvent);
    // set savedEvents array (of time: event object) to localStorage under key "item" as a string using JSON.stringify
    window.localStorage.setItem("item", JSON.stringify(savedEvents));
    
});

// on click event configured to clear localStorage (and thus calendar UI) on click of element with ID of "clear"
$("#clear").on("click", function () {
    localStorage.clear();
    window.location.reload() 
});

// Functions 

// function established to colorize calendar UI based on current time
function hourUpdater() {
    // establish current time using moment.js 
    let currentTime   = moment().hours();

    // search html for elements with class of "hour" and perform logic
    $(".hour").each(function() {
        
        // for each of the elements selected using selector above, set variable hourBlock to its text content (parsed)
        let hourBlock = $(this).text();
        hourBlock     = parseInt(hourBlock);

        // if statements established to colorize calendar UI; comparing the parsed integer in hourBlock with moment.js currentTime
        if (hourBlock < currentTime) {
            $(this).addClass('past');
            $(this).nextAll().addClass('past');
        }
        if (hourBlock === currentTime) {
            $(this).addClass('present');
            $(this).nextAll().addClass('present');
        }
        if (hourBlock > currentTime) {
            $(this).addClass('future')
            $(this).nextAll().addClass('future');
            $(this).prevAll().addClass('past');
        }
        
    });
};
// call hourUpdater function on page load
hourUpdater();
// setInterval to refresh hourUpdater function every 15 seconds
setInterval(hourUpdater, 15000);


// Establish current day on page load
function generateCurrentDay(){
    let currentDayTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    // select element with ID of "currentDay" and replace HTML with currentDayTime established from moment.js CDN
    $("#currentDay").html(currentDayTime);
};
// call generateCurrentDay function on page load
generateCurrentDay();
// setInterval to refresh generateCurrentDay function every 15 seconds
setInterval(generateCurrentDay, 15000);


// designed onLoad function to retrive data from localStorage for saved time: event pairs 
function onLoad() {
    for (i = 0; i < savedEvents.length; i++) {
        if (savedEvents[i].time === 9) {
            let eventDetail = $(".hour-9").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
        if (savedEvents[i].time === 10) {
            let eventDetail = $(".hour-10").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
        if (savedEvents[i].time === 11) {
            let eventDetail = $(".hour-11").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
        if (savedEvents[i].time === 12) {
            let eventDetail = $(".hour-12").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
        if (savedEvents[i].time === 1) {
            let eventDetail = $(".hour-1").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
        if (savedEvents[i].time === 2) {
            let eventDetail = $(".hour-2").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
        if (savedEvents[i].time === 3) {
            let eventDetail = $(".hour-3").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
        if (savedEvents[i].time === 4) {
            let eventDetail = $(".hour-4").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
        if (savedEvents[i].time === 5) {
            let eventDetail = $(".hour-5").find("textarea");
            eventDetail.text(savedEvents[i].event);
        };
    };    
};

// run onLoad function based on the condition that there are values in localStorage 
if (savedEvents != null) {
    onLoad();
    console.log("this should not log if savedEvents is null");
};
