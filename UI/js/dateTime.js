/**
 * Display of the current date and time on the UI
 */
let displayDateTime = function () {
    let hours, minutes, seconds, year, month, day, displayTime, displayDate;
    const timeIndicator = document.querySelector('.time-indicator');        
    const dateIndicator = document.querySelector('.date-indicator');

    const date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();    

    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();

    hours = (hours == 0) ? 12 : hours;    
    hours = (hours < 10) ? "0"+hours : hours;
    minutes = (minutes < 10) ? "0"+minutes : minutes;
    seconds = (seconds < 10) ? "0"+seconds : seconds;

    displayTime = `${hours} : ${minutes} : ${seconds} `;
    displayDate = `${month} - ${day} - ${year}`;
    timeIndicator.innerHTML = displayTime;
    dateIndicator.innerHTML = displayDate;
    setTimeout(displayDateTime, 1000);    
};
displayDateTime();