function getTime() {
  var dt = new Date()
  document.getElementById("date-time").innerHTML = dt
}

function blink() {
  var x = document.getElementById("blink")
  setInterval(function () {
    x.innerHTML = x.innerHTML == "_" ? " " : "_"
  }, 500);
}
