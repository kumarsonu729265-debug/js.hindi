//Adding properties in an object
const tinderUser = {}
tinderUser.name = "sonu"
tinderUser.id = 121
console.log(tinderUser);

//nested objects
let JsUser = {
    email : "sonu@java.com",
    username : {
        fullname : {
            firstname: "sonu",
            lastname: "kumar"
        }
    }
}
console.log(JsUser.username.fullname.lastname);

let obj1 = {1:"a",2:"b"}
let obj2 = {3:"a",4:"b"}
// let obj3 = Object.assign({}, obj1, obj2)
Object.assign(obj1,obj2)
console.log(obj1);

const obj4 = {...obj1, ...obj2}
console.log(obj4);


//Array of objects
const user = [
    {
        name : "sonu",
        email : "sonu@microsoft.com"
    },
    {
        name :"abhay",
        email : "abhay@tcs.com"
    }
]
console.log(user[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id"));

const course = {
    coursename : "js hindi",
    price : 399,
    teacher : "hitesh chaudhary"
}

const{teacher} = course
console.log(teacher);

const {teacher : sir} = course
console.log(sir);