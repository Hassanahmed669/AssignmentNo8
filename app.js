var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;


function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}
	
function start(){
interval = setInterval(timer, 10)
}


function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    stop();

}

document.getElementById("startBtn").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById('startBtn').disabled = true;
}
 
document.getElementById("stopBtn").addEventListener("click", myFunction2);

function myFunction2() {
    document.getElementById('startBtn').disabled = false;
}

document.getElementById("resetBtn").addEventListener("click", myFunction3);

function myFunction3() {
    document.getElementById('startBtn').disabled = false;
}