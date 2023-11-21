const $hour = document.querySelector('.hour-hand');
const $min = document.querySelector('.minute-hand');
const $sec = document.querySelector('.second-hand');
const $date = document.querySelector('.date');
const $day = document.querySelector('.day');

function update() {
    const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    const hdeg = h * 30 + m * (360 / 720);
    const mDeg = m * 6 + s * (360 / 3600);
    const sDeg = s * 6;

    if (month < 10) {
        month = "0" + month;
    }

    $hour.style.transform = `rotate(${hdeg}deg)`;
    $min.style.transform = `rotate(${mDeg}deg)`;
    $sec.style.transform = `rotate(${sDeg}deg)`;
    $date.innerHTML = `${year}/${month}/${date}`;
    $day.innerHTML = weekday[d.getDay()];
}

setInterval(update, 1000);
update();  // Um die Uhr sofort zu initialisieren
