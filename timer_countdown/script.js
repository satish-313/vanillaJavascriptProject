const newyear = '1 jan 2021';

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function countdown(){
    const newYearDate = new Date(newyear);
    const currentDate = new Date();

    const allSecond = Math.floor((newYearDate - currentDate)/1000);
    const days = Math.floor(allSecond/3600/24);
    const hours = Math.floor(allSecond/3600%24);
    const minutes = Math.floor(allSecond/60%60);
    const seconds = Math.floor(allSecond%60)
    /* console.log(days+" "+hours+" "+minutes+" "+seconds); */
    daysElement.innerText = formatTime(days);
    hoursElement.innerText = formatTime(hours);
    minutesElement.innerText = formatTime(minutes);
    secondsElement.innerText = formatTime(seconds);
}

function formatTime(t){
    return t < 10 ? `0${t}` : t;
}

countdown();

setInterval(countdown , 1000);