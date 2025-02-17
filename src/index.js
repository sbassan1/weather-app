import "./styles/styles.css"

const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

// Update this to get the day/month/years updated
setInterval(function(){
    let date = new Date();

    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let dayName = date.getDay();
    let dayNum = date.getDate();
    let monthNum = date.getMonth();
    let year = date.getFullYear();

    document.getElementById('date').innerHTML = days[dayName] + " ," + dayNum + ", " + months[monthNum] + ", " + year;
    document.getElementById('time').innerHTML = hour + ":" + minute + ":" + second;
    },1000);