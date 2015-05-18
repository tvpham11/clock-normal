var box = document.getElementById('box');
var clock = document.getElementById('clock');

function checkTime (x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}

var currentDay = new Date();
var hours = checkTime(currentDay.getHours());
var minutes = checkTime(currentDay.getMinutes());
var seconds = checkTime(currentDay.getSeconds());

function currentTime () {
  var hexCode = '#' + hours + minutes + seconds;

  clock.innerHTML = hexCode;
  box.style.backgroundColor = hexCode;
  clock.style.backgroundColor = hexCode;

  var timer = setTimeout(function () {
            currentTime()
        }, 1000);
}

function stopCurrentTime() {
  clearInterval(timer);
}

function switchDisplay () {
  clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  box.style.backgroundColor = "black";
  clock.style.backgroundColor = "black";
}

currentTime();
