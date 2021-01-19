function updateTime()
{
                    /*TIME*/
    const hour = document.querySelector("#hour");
    const minute = document.querySelector("#minute");
    const second = document.querySelector("#second");
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours >= 0 && hours <= 9) hours = "0" + hours;
    if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
    if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
                    /*DATE*/
    const date = document.querySelector("#Date");
    let date = d.getDate();
    if (date >= 0 && date <= 9) date ="0" + date;
    let month = d.getMonth();
    if (month >= 0 && month <= 9) month = "0" + month;
    let year = d.getFullYear();
    if (year >= 0 && year <= 9) year = "0" + year;
    date.innerHTML = `${date}/${month}/${year}`;
                     /*DAYS*/ 
    const days = document.querySelector("#day");
    let dayNumber = d.getDay();
    let day = "";
    switch(dayNumber)
    {
        case 0: day =   "SUNDAY";       break;
        case 1:day =    "MONDAY";       break;
        case 2:day =    "TUESDAY";     break;
        case 3:day =    "WEDNESDAY";   break;
        case 4:day =    "THURSDAY";    break;
        case 5:day =    "FRIDAY";      break;
        case 6:day =    "SATURDAY";    break;
    } 
    days.innerHTML = day;
}
window.onload = function ()
{
    setInterval(updateTime, 1000)
};

