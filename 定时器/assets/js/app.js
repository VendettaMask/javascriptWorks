const timer = document.getElementById('timer');
let time ;
let sec = 0;
let min = 0;
let hour = 0;
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const restartBtn = document.getElementById('restartBtn');
startBtn.addEventListener('click',function(){
    time = setInterval(timeHandler,1000);
    pauseBtn.disabled =false;
})
pauseBtn.addEventListener('click',function(){
    time = clearInterval(time);
})
restartBtn.addEventListener('click',function(){
    time = clearInterval(time);
    sec = 0;
    min = 0;
    hour = 0;
    timer.innerHTML = '00:00:00';
    pauseBtn.disabled = true;
})
function timeHandler(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
    }
    if(min == 60){
        min = 0;
        hour++;
    }
    displayTime();
}
function displayTime(){
    secDisplay = sec;
    minDisplay = min;
    hourDispaly = hour;
    if(sec<10){
        secDisplay='0'+sec; 
    }
    if(min<10){
        minDisplay = '0'+min;
    }
    if(hour<10){
        hourDispaly = '0'+hour;
    }

    timer.innerHTML = hourDispaly + ':' + minDisplay + ':' + secDisplay;
}