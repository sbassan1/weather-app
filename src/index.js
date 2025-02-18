import "./styles/styles.css"

class DateTime {

    getFormattedDateTime() {
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        const days = [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ];    

        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = String(now.getDate());
        const dayName = now.getDay() - 1;
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        const formattedDate = `${days[dayName]} ${day}, ${months[month]}, ${year}`;
        const formattedTime = `${hours}:${minutes}:${seconds}`;
    
        return { date: formattedDate, time: formattedTime };
    }

};

const clock = new DateTime();

function setDateTimeDOM() {
    
    const {date , time} = clock.getFormattedDateTime();

    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
}

setInterval(setDateTimeDOM,1000);
