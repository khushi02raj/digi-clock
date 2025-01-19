const buildClock=()=>{
const date=new Date();
const hours=date.getHours();
const mins=date.getMinutes();
const secs=date.getSeconds();

let hr=document.getElementById('hr').innerText=hours;
let min=document.getElementById('min').innerText=mins;
let sec=document.getElementById('sec').innerText=secs;

setTimeout(buildClock,1000);
//to call function every sec or time will not change 
}
buildClock();
