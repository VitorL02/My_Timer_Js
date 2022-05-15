const timer = document.querySelector(".timer");

//Essa função formata os segundos
function getTimeSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-Br", {
    hour12: false,
    timeZone: "UTC",
  });
}
let secondsTimer = 0;
let clock;

function startTimer() {
  clock = setInterval(function () {
    timer.classList.remove("paused");
    secondsTimer++;
    timer.innerHTML = getTimeSeconds(secondsTimer);
  }, 1000);
}

//Uma forma mais performatica de criar os events listners
document.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("zero")) {
    timer.classList.remove("paused");
    clearInterval(clock);
    timer.innerHTML = "00:00:00";
    secondsTimer = 0;
  }

  if (element.classList.contains("start")) {
    clearInterval(clock);
    startTimer();
  }

  if (element.classList.contains("pause")) {
    timer.classList.add("paused");
    clearInterval(clock);
  }
});

// start.addEventListener("click", function (event) {
//   clearInterval(clock);
//   startTimer();
// });

// pause.addEventListener("click", function (event) {
//   timer.classList.add("paused");
//   clearInterval(clock);
// });

// zero.addEventListener("click", function (event) {
//   clearInterval(clock);
//   timer.innerHTML = "00:00:00";
//   secondsTimer = 0;
// });
