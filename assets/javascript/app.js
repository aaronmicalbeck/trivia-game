// GLOBAL VARIABLES //

var number = 60;
var intervalId;

// FUNCTIONS //

function run() {

    intervalId = setInterval(decrement, 1000);
}

  function stop() {

    clearInterval(intervalId);
}

function decrement() {
    number--;
    $("#show-timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop(); alert("Times Up!");
    }
   
    var converted = timeConverter(number);
    


    $("#show-timer").text(converted);
}


function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function stop() {

    clearInterval(intervalId);
}

run();
