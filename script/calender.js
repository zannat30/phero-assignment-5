//catching the day element by current-day ID
const currentDay = document.getElementById("current-day");
//catching the date element by current-date ID
const currentDate = document.getElementById("current-date");

// Function to update date and time
const updateDateTime = () => {
    const now = new Date();
    
    // shortening the day name
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //getDay() returns the day of the week, remember it starts from 0 and ends at 6
    const dayName = days[now.getDay()];
    
    // shortening the month name
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //getMonth() returns the month of the year, remember it starts from 0 and ends at 11
    const month = months[now.getMonth()];

    //getDate() returns the day of the month
    const date = now.getDate();
    //getFullYear() returns the full year 
    const year = now.getFullYear();
    
    // Update the DOM elements
    currentDay.textContent = `${dayName} ,`;
    currentDate.textContent = `${month} ${date} ${year}`;
}
updateDateTime();
setInterval(updateDateTime, 86400000);