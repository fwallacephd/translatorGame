//Hide Correct
$(".correct").hide();
//Hide Try Again
$(".try-again").hide();

//Click on the word button to go into the display.
$("#word-buttons").on("click", ".word-button", function(){
    $("#word-container").append(this);
    //Add a space.
    $("#word-container").append(" ");
});

//Click on the word button and put it back into the container
$("#word-container").on("click", "button", function(){
    $("#word-buttons").append(this);
    $("#word-buttons").append(" ");
});

//Click on the submit button and see if you are correct.
$("#submit").on("click", function() {
    var result = $("#word-container .word-button").text();
    if (result === "todayisagooddaytodie") {
        $(".correct").show();
        $(".try-again").hide();
    } else {
        $(".correct").hide();
        $(".try-again").show();
    }
});

