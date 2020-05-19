function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var ampm = hour >= 12 ? "pm" : "am";
  if (hour > 12) {
    hour = hour - 12;
  } else if (hour == 0) {
    hour = 12;
  }
  min = update(min);
  document.getElementById("curr_time").innerHTML =
    hour + " : " + min + " " + ampm; /* adding time to the div */
  var t = setTimeout(function () {
    currentTime();
  }, 10);
}
function slideUp(el) {
  var elem = document.getElementById(el);
  elem.style.transition = "all .6s";
  elem.style.height = "0px";
}

function showThreeButtons() {
  document.getElementsByClassName("btn-secondary")[0].style.display = "block";
  document.getElementsByClassName("btn-secondary")[1].style.display = "block";
  document.getElementsByClassName("btn-secondary")[2].style.display = "block";
  document.getElementsByClassName("btn-secondary")[3].style.display = "block";
}
function hideText() {
  document.getElementById("msg").style.display = "none";
}
function hideButton() {document.getElementById("Enter").style.display = "none";}
function showTime() { document.getElementById("curr_time").style.display = "block";}
function hideClock() {
  document.getElementById("curr_time").style.display = "none";
}
function showTimer() {
  document.getElementById("box_timer").style.display = "block";
}
function hideTimer() {
  document.getElementById("box_timer").style.display = "none";
}

function update(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

let clockbtn = document.getElementById("Clock");
let timation = document.getElementById("Timer");
let getStarted = document.getElementById("Enter");
let boxing = document.getElementById("msg");
let StudyPeriod = document.getElementById("Studier");


StudyPeriod.addEventListener("click",function(){
    hideClock();
    hideTimer();

});

getStarted.addEventListener("click", function () {
  slideUp("box");
  hideButton();
  currentTime();
  showTime();
  showThreeButtons();
  hideText();
});

timation.addEventListener("click", function () {
  hideClock();
  showTimer();
});
clockbtn.addEventListener("click", function () {
  hideTimer();
  showTime();
});
