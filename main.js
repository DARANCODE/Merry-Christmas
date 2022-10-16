$(document).ready(function() {
    var flag, bwidth, bheight;
document.onclick = function () {
  dowin();
};
    var ghost = document.getElementsByClassName("ghost-container")[0];
    var sound = new Audio("file.wav"); // buffers automatically when created
   
    var showGhost = function() {
        sound.load();
        sound.play();
        ghost.style.visibility = "visible";
    };

    $("#ghostbutton").click(function(){

      $(".inner").addClass("faded");
      //Shows ghost and plays sound after one second
      setTimeout(showGhost, 1000);

      //Hides ghost 3 seconds after appears
      setTimeout(function () {
        $(".inner").removeClass("faded");
        ghost.style.visibility = "hidden";
      }, 3000);
      setTimeout( function Redirect() {
               window.location="https://www.facebook.com/daran06";}, 6000);

    });
});
