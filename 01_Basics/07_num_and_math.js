let num = 400;
console.log(num);
console.log(typeof num);

let balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(num.toString().length);

let x = 12.3567;
console.log(x.toFixed(2));
console.log(x.toPrecision(3));
console.log(x.toString());

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
console.log((Number.MAX_SAFE_INTEGER));

//+++++++++++++++++++++++++++++++   MATHS   ++++++++++++++++++++++++++++++++++++++++++++++++++

const a = -10;
console.log(Math.abs(a));
console.log(Math.sqrt(25));
console.log(Math.pow(2,4));
console.log(2**4);

const b = 12.3654;
console.log(Math.round(b));
console.log(Math.ceil(b));
console.log(Math.floor(b));

console.log(Math.max(1,5,4,3,8));
console.log(Math.min(1,5,4,3,8));


console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*max-min+1)+min);













