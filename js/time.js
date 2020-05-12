function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
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
  function slideUp(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all .6s";
    elem.style.height = "0px";
  }


  function toggle_visibility(id) {
       var e = document.getElementById(id);
       if (e.style.visibility == 'visible')
          e.style.visibility = 'hidden';
       else
          e.style.visibility = 'visible';
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
  
  function update(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

  var clockbtn = document.getElementById("Clock");
  var timer = document.getElementById("Timer");
  var getStarted = document.getElementById("Enter");
  var boxing = document.getElementById("msg");

  getStarted.addEventListener('click',function(){
    slideUp('box');
    hideButton();
    currentTime();
    showTime();
    showTwoButtons();
    hideText(); 
  });

  timer.addEventListener('click',function(){
    hideTime();
    showTimer();
  });
  clockbtn.addEventListener('click',function(){
    showTime();
    hideTimer();
  });