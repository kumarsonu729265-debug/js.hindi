function greet(){
    console.log("hello");
}
greet()

function greet2(name){
    console.log(`hello ${name}`);
}
greet2("sonu");

const greet3 = function(user){
    return user;
}
console.log(greet3("abhay"));


function add(a,b){
    return a+b;
}
console.log(add(3,4));

function loginUserMessage(username){
    if(!username){
        console.log("enter a valid username");
        return;
    }
    console.log(`${username} just logged in`);
}

loginUserMessage("ishika")
loginUserMessage()

function loginUserMessage2(username = "sam"){
    if(!username){
        console.log("enter a valid username");
        return;
    }
    console.log(`${username} just logged in`);
}

loginUserMessage2()

function calculateCartPrice(...val){
    return val;
}
console.log(calculateCartPrice(100,300,400));

function calculateCartPrice2(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice2(100,200,500,2000));

let JsUser = {
    name: "sonu",
    age:21
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}
handleObject(JsUser);
handleObject({
    name: "ishika",
    age:24
})

let numbers = [10,20,30,40,50]

function handleArray(anyArray){
    console.log(`value at index 1 is ${anyArray[1]}`);
}
handleArray(numbers)

handleArray([1,2,3,4,5])