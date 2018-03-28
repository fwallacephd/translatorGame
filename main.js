//Click on the word button to go into the display.
$(".word-button").on("click", function(){
      $("#word-container").append(this);
      //Add a space.
      $("#word-container").append(" ");
  });

$("#word-container").on("click", function(){
   console.log("pressed button");
});
