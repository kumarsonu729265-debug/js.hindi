// for of 

const arr = [10,20,30,40,50];
for (const val of arr) {
    console.log(val);
}

const greetings = "hello world";
for (const greet of greetings) {
    console.log(`each character of word is ${greet}`);
}

const map = new Map();
map.set('IN',"India")
map.set('US',"USA")
map.set('Ch',"China")

// console.log(map);


for (const [key,value] of map) {
    console.log(key + "=>" + value);
}

const myObject = {     // doesn't works for object
    game1 : "NFS",
    game2 : "GTA"
}

// for (const key of myObject) {
//     console.log(key);
// }