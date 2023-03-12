let startTime;
let stopwatchInterval;

function startStopwatch() {            // To start time of the Stopwatch
  startTime = Date.now();
  stopwatchInterval = setInterval(updateStopwatch, 100);
}

function updateStopwatch() {          // To calculate the elapsed time since the start time
  const elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;
  const stopwatchDisplay = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}.${padNumber(milliseconds, 3)}`;
  document.getElementById("stopwatch-display").innerHTML = stopwatchDisplay;
}

function stopStopwatch() {            // This Function cancels the interval setup by start stop watch
  clearInterval(stopwatchInterval);
}

function padNumber(number, digits = 2) {   
  return number.toString().padStart(digits, "0");
}