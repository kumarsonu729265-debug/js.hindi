let arr = [10,20,'hello',3.14]
console.log(arr);
console.log(arr[2]);
console.log(arr.length);

let myArr = new Array(1,2,3,4,5)
console.log(myArr);

myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift();
console.log(myArr);

const newArr = arr.join("-")
console.log(newArr);

const newArr2 = myArr.slice(0,2);
console.log(newArr2);
console.log(myArr);

const newArr3 = myArr.splice(0,2,6,7,8);
console.log(newArr3);
console.log(myArr);

let arr2 = [1,2,3,[4,5,[6,7]],8,9]
const newArr4 = arr2.flat(3)
console.log(newArr4);
