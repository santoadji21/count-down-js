const countDown = () => {
    const countDate = new Date('May 17, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const texDay = Math.floor(gap / day) ;
    const texHour = Math.floor((gap % day) / hour) ;
    const texMinute = Math.floor((gap % hour) / minute) ;
    const texSecond = Math.floor((gap % minute) / second) ;

    document.querySelector('.day').innerText = texDay;
    document.querySelector('.hour').innerText = texHour;
    document.querySelector('.minute').innerText = texMinute;
    document.querySelector('.second').innerText = texSecond;

}

setInterval(countDown, 1000);