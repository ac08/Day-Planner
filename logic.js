// Variable Declaration 
let savedEvents = JSON.parse(window.localStorage.getItem("item"));

// On Click Events 

// click event configured to log value(s) entered in time slot associated with save button clickd
$(".saveBtn").on("click", function() {
    let savedEvents = JSON.parse(window.localStorage.getItem("item")) || [];

    let eventText = $(this).prev();
    let timeVal = $(this).attr("time");

    let newEvent  = {
        time: parseInt(timeVal),
        event: eventText.val()
    };
    
    savedEvents.push(newEvent);
    window.localStorage.setItem("item", JSON.stringify(savedEvents));
    
});

// Functions 

function hourUpdater() {
    let currentTime = moment().hours();

    $(".hour").each(function() {
        
        // take the value frome each id and setting to the variable block. HINT parseInt
        let block = $(this).text();
        block     = parseInt(block);

        // if statments to ask: Is the current time before the block? after the block or equal to the block
        if (block < currentTime) {
            $(this).addClass('past');
            $(this).nextAll().addClass('past');
        }
        // in each if statement you will need to add a class and remove a class
        if (block === currentTime) {
            $(this).addClass('present');
            $(this).nextAll().addClass('present');
        }
        if (block > currentTime) {
            $(this).addClass('future')
            $(this).nextAll().addClass('future');
            $(this).prevAll().addClass('past');
        }
        
    });

};

hourUpdater();

// Establish current day on page load
function generateCurrentDay(){
    let currentDayTime = moment().format('MMMM Do YYYY');
    console.log(currentDayTime);
    $("#currentDay").html(currentDayTime);
};
generateCurrentDay();

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


if (savedEvents != null) {
    onLoad();
    console.log("this should not log if savedEvents is null");
};


$("#clear").on("click", function () {
    localStorage.clear();
    window.location.reload() 
});