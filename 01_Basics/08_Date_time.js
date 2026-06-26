let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log((myDate.toJSON()));

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));

let myCreatedDate = new Date(2026,0,25);
console.log(myCreatedDate.toLocaleString());

let myCreated = new Date("01-26-2026");
console.log(myCreated.toString());

console.log((myDate.toLocaleString('dafault', { 
    weekday : "long",
    month : "long"
}
)));


























