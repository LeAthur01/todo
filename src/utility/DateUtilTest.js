import dateUtil from './DateUtil.js';

let today = new Date();
let nextWeek = new Date();
let thisWeek = new Date();

thisWeek.setDate(today.getDate() + 6);  
nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString());
console.log(dateUtil.isDateInThisWeek(today));

console.log(thisWeek.toDateString());
console.log(dateUtil.isDateInThisWeek(thisWeek));

console.log(nextWeek.toDateString());
console.log(dateUtil.isDateInThisWeek(nextWeek));
