let second = 0,
    minute = 0,
    hour = 0,
    date = new Date();

setInterval(() => {
    date = new Date();
        second = date.getSeconds() * 6
        minute = date.getMinutes() * 6
        hour = date.getHours() * 30 + Math.round(minute / 12)
        document.querySelector('.wrapper1').style.transform = `rotate(${minute}deg)`;
        document.querySelector('.wrapper2').style.transform = `rotate(${hour}deg)`;
        document.querySelector('.wrapper3').style.transform = `rotate(${second}deg)`;
}, 1000) 