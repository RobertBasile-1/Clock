function myCounter(elem, options) {
  let time = 0;
  let interval;
  let offset;

  function update() {
    if (this.isOn) {
      time += delta();
    }
    elem.textContent = timeformater(time);
  }

  function delta() {
    let now = Date.now();
    let timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeformater(time) {
    time = new Date(time);
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }
    while (milliseconds.length < 3) {
      milliseconds = "0" + milliseconds;
    }

    return minutes + " : " + seconds + " : " + milliseconds;
  }

  this.start = function () {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 20);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function () {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function () {
    if (!this.isOn) {
      time = 0;
      update();
    }
  };
  this.isOn = false;
}

var timer = document.getElementById("timing");
var startbtn = document.getElementById("toggle");
const stopbtn = document.getElementById("untoggle");
const resbtn = document.getElementById("reset");
var watch = new myCounter(timer, { delay: 10 });

function clear() {
  watch.reset();
}
function startTime() {
  watch.start();
}
function stopTime() {
  watch.stop();
}

startbtn.addEventListener("click", function () {
  startTime();
});

stopbtn.addEventListener("click", function () {
  stopTime();
});
resbtn.addEventListener("click", function () {
  clear();
});
