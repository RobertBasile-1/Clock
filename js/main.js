
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = hour >= 12 ? 'pm' : 'am';
    if (hour > 12 ){
      hour = hour - 12;
    } else if (hour == 0) {
      hour = 12;
    }
    min = update(min);
    document.getElementById("curr_time").innerHTML = hour + " : " + min + " " + ampm; /* adding time to the div */ 
    var t = setTimeout(function(){ currentTime() }, 10);
  
  }

  function doesBoth(el){
    slideUp(el);
    hideText();
    showTime();
    hideButton();
    showTwoButtons();
    currentTime();
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
  function showTimer(){
    document.getElementById("box_timer").style.visibility = 'visible';
  }
  
  function hideTimer(){
    document.getElementById("box_timer").style.visibility = 'hidden';
  }
  
  function Timerbtn(){
    document.getElementById("Clock").style.visibility = "hidden";
  }
  function ClockBtn(){
    showTime();
    hideTimer();
  }
  function SwitchToTimer() { 
    hideTime();
    showTimer();
  }
 
  function update(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

  var timer = document.getElementById('timing');
  var startbtn = document.getElementById('toggle');
  var stopbtn = document.getElementById('untoggle');
  var resbtn  = document.getElementById('reset');
  var watch = new myCounter(timer);

  function clear(){
    watch.reset();
  }
  function startTime(){
    watch.start();
  }
  function stopTime(){
    watch.stop();
  }
  
  startbtn.addEventListener('click',function(){
      startTime();
  });

  stopbtn.addEventListener('click',function(){
    stopTime();
  });
  resbtn.addEventListener('click', function(){
    clear();
  });


