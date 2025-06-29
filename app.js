var day= document.getElementById("day");
var hr= document.getElementById("hr");
var min= document.getElementById("min");
var sec= document.getElementById("sec");


let day2 = new Date("12/31/2024");


function Data() {
let now = new Date();
let diff = day2.getTime() - now.getTime();

let totalSec = Math.floor(diff / 1000);

let days = Math.floor(totalSec / (3600 * 24));
let hours = Math.floor((totalSec % (3600 * 24)) / 3600);
let minutes = Math.floor((totalSec % 3600) / 60);
let seconds = totalSec % 60;


day.innerHTML=`${days} <br> <span>Days</span>`
hr.innerHTML=`${hours} <br> <span>Hours</span> `
min.innerHTML=`${minutes} <br> <span>Minutes</span>`
sec.innerHTML=`${seconds} <br> <span>Seconds</span>`


}
setInterval(Data, 1000);