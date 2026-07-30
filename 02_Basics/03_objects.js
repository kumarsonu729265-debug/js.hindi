
//declaring a symbol
const mySym = Symbol("mykey");

const JsUser = {
    name : "sonu",
    age : 21,
    isStudent : true,
    isLoggedIn : false,
    email : "sonu@google.com",
    location : "jaipur",
    lastLogInDays : ["monday", "friday"],
    [mySym] : "mykey1"
}

console.log(JsUser.email);
console.log(JsUser.isLoggedIn);
console.log(JsUser["name"]);
JsUser.name = "ishika"
console.log(JsUser);



//accesing a symbol from an object
console.log(JsUser[mySym]);

// Object.freeze(JsUser);
JsUser.name = "abhay"
console.log(JsUser);

JsUser.greeting = function greet(){
    console.log(`hell0`);
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function (){
    console.log(`hello ${this.name}`);   
}

console.log(JsUser.greetingTwo());



