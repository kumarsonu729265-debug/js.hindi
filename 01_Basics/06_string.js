let str = "Hello";

let name = "sonu";
let age =20;
console.log("My name is "+name+" and i am "+age+" years old."); // old way
console.log(`my name is ${name} and i am ${age} years old`); // modern way

console.log(str.length);
console.log(str +" "+ name);

//Common String Methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(2));
console.log(str.indexOf('o'));

let newString = str.substring(0,3);
console.log(newString);

console.log(name.slice(1,-1));

console.log(str.includes("ll"));

let arr = str.split("");
console.log(arr);

let newStr = str.replace("H","p");
console.log(newStr);


// console.log(str.replace(h,p));












