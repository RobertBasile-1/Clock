
window.onload = function currentTime() {


    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = update(hour);
    min = update(min);
    sec = update(sec);
    document.getElementById("curr_time").innerHTML = hour + " : " + min + " : " + sec; /* adding time to the div */ 
    var t = setTimeout(function(){ currentTime() }, 500);
  
  }

  function doesBoth(el){
    slideUp(el);
    hideText();
    showTime();
    hideButton();
    showTwoButtons();
  } 

  function slideUp(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all .3s ease-in-out";
    elem.style.height = "0px";
  }
  function showTwoButtons(){
    document.getElementById("Clock").style.visibility = "visible";
    document.getElementById("Timer").style.visibility = "visible";
  }
  function hideText(){
    document.getElementById("msg").style.visibility = 'hidden';
  }
  function hideButton(){
    document.getElementById("Enter").style.visibility = 'hidden';
  }
  function showTime(){
      document.getElementById("curr_time").style.visibility = 'visible';
  }
  function hideTime(){
    document.getElementById("curr_time").style.visibility = 'hidden';
  }


  function Timerbtn(){
    document.getElementById("Clock").style.visibility = "hidden";
  }
  function ClockBtn(){
    showTime();
  }
  function SwitchToTimer() { 
    hideTime();
  }
 
  
  function update(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
