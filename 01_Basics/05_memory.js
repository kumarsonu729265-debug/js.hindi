// stack --> primitive --> copy by value

let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

// Heap --> Non-primive --> reference to the same object

let userOne = {
    name : "sonu",
    email : "user@google.com", 
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "sonu@google.com"

console.log(userOne.email);
console.log(userTwo.email);

