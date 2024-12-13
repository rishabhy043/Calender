const day = document.querySelector(".day");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const today = new Date ;
console.log(today);

const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Ssaturday"];
const months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sep" ,"Oct" , "Nov" , "Dec"];

day.innerHTML = days[today.getDay()];
date.innerHTML = today.getDate();
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();
