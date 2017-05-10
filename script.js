function startTimer(duration, breakTime, display) {
  var timer = duration;
  var minutes;
  var seconds;

  myTime = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if (--timer < 0 && document.getElementById("state").innerHTML == "Break" ) {
      timer = duration;
      document.getElementById("state").innerHTML = "Work";
    }
    else if ( timer < 0) {
      document.getElementById("state").innerHTML = "Break";
      timer = breakTime;
    }
  }, 1000);
}

// Change Cursor
$(document).ready(function() {
  $('#playbutton, #resetbutton, #pausebutton, #up1button, #down1button, #up2button, #down2button').css('cursor', 'pointer');
});

// Play Button
document.getElementById("playbutton").onclick = function() {
  clickPlay()
};

function clickPlay() {
  var workTime = 60*initialWork;
  var breakTime = 60*initialBreak;
  display = document.querySelector('#timer');
  startTimer(workTime, breakTime, display);
};

// Reset Button
document.getElementById("resetbutton").onclick = function() {
  reset()
};

function reset() {
  clearInterval(myTime);
  clickPlay();
};

// Pause Button
document.getElementById("pausebutton").onclick = function() {
  pause();
};

function pause() {
  clearInterval(myTime);
};

// Increase Work Timer
document.getElementById("up1").onclick = function() {
  initialWork = initialWork + 1;
  document.getElementById("min1").innerHTML = initialWork;
  document.getElementById("timer").innerHTML = initialWork;
};

// Decrease Work Timer
document.getElementById("down1").onclick = function() {
  initialWork = initialWork - 1;
  document.getElementById("min1").innerHTML = initialWork;
  document.getElementById("timer").innerHTML = initialWork;
};

// Increase Break Timer
document.getElementById("up2").onclick = function() {
  initialBreak = initialBreak + 1;
  document.getElementById("min2").innerHTML = initialBreak;
};

// Decrease Break Timer
document.getElementById("down2").onclick = function() {
  initialBreak = initialBreak - 1;
  document.getElementById("min2").innerHTML = initialBreak;
};

// Load default values
window.onload = function() {
  document.getElementById("min1").innerHTML = initialWork;
  document.getElementById("timer").innerHTML = initialWork;
  document.getElementById("min2").innerHTML = initialBreak;
};

// Global Variables
var initialWork = 25;
var initialBreak = 10;
