//+++++++++++++++++++++++++++++++++ "this" ++++++++++++++++++++++++++++++++++++

const user = {
    username : "sonu",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username},welcome`);     
        console.log(this);
           
    }
    
    
}
user.welcomeMessage()
user.username = "ishika"
user.welcomeMessage()

console.log(this);

function chai() {
    let username = "sonu"
    console.log(`${this.username}`);
}
// chai()

const chai2 = () => {
    let username = "sonu"
    console.log(`${this.username}`);
}
chai2()


//++++++++++++++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++++

// const add = (num1 , num2) => {
//     return num1+num2;
// }
// console.log(add(3,4));

// const sum = (a,b) => a+b;
// console.log(sum(4,5))

const sum = (a,b) => (a+b);
console.log(sum(4,5));

const add = (num1 , num2) => ({username:"sonu"})
console.log(add(3,4));