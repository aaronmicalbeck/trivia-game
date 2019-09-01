// GLOBAL VARIABLES //

var number = 60;
var intervalId;
var score = 0;






















// FUNCTIONS //
$("#start-button").click(makeQuestionsVisible);
$("#start-button").click(run);
$("#submit-button").click(gameOver);
$("#submit-button").click(makeScoreVisible);
$("#submit-button").click(stop);



// ////////////////
// 
// TIMER FUNCTIONS
// 
// ///////////////


// Starts timer and decreases by 1 sec

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function stop() {
    clearInterval(intervalId);
}

// This function will display the timer in the #show-timer div //
function decrement() {
    number--;
    $("#show-timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop(); alert("Times Up!");
        
    }

    var converted = timeConverter(number);



    $("#show-timer").text(converted);
}

// Converts decrement into timer format

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

// Clears interval so timer doesn't continue/go negative
function stop() {

    clearInterval(intervalId);
}



// ////////////////
// 
// TRIVIA FUNCTIONS
// 
// ///////////////

function makeQuestionsVisible() {
    $(".container-fluid").css("visibility", "visible");
   
};
function makeScoreVisible(){
    $("#score-view").css("visibility","visible");
};


function gameOver(){
    console.log("WORKING!");
    var score = 0;
    $(".form-check-input:checked").each(function(){
        score+=parseInt($(this).val(),10);
    });
    console.log(score);
    $("#yourScore").html(score);
};


    
    

    



   











// function justTestinStuff(){

//     for (i = 1; i < questions.length; i++) {
//         let tempVar = document.querySelector(`input[name='inlineRadioOptions${i}'`).value;
//         console.log(` You selected: ${tempVar} for question ${i}`);
//     }

// };


// document.onkeyup = function(event){
//     justTestinStuff();
//     console.log("YOU TESTED STUFF");
// };