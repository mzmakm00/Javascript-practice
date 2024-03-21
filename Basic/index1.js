// Task 1

const currentDate = new Date();

const weekDays = ['Monday', 'Tuesday','Wednesday','Thrusday','Friday', 'Saturday', 'Sunday']

const Today = weekDays[currentDate.getDay()-1]


let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

const ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12

minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds ;


console.log("Today is : " + Today + ".");
console.log("Current time is : " + hours + " " + ampm + ":" + minutes + ":" + seconds)