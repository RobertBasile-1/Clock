
 
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




