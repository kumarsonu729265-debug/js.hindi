//for in   

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(key + '=>' + myObject[key]);
}

const arr = ["rb", "swift", "py", "cpp"]
for (const key in arr) {
    console.log(arr[key]);
}


const map = new Map();    // --> doesn't works with map
map.set('IN',"India")
map.set('US',"USA")
map.set('Ch',"China")

// for (const key in map) {
//     console.log(key);
// }