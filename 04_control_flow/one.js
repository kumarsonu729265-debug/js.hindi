const userEmail = [];
if(userEmail){
    console.log(`got user email`);
}
else{
    console.log(`don't have user email`);
}

const emptyObject = {}
if(Object.keys(emptyObject).length ===0){
    console.log(`object is empty`);
}

//Nullish coalescing operator 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 20
val1 = null ?? 7 ?? 14

console.log(val1);
