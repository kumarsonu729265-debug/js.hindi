function one(){
    let username = "sonu"

    function two(){
        username2 = "ishika"
        console.log(username);
    }

    // console.log(username2);

    two()
    
}
one()


console.log(addOne(5));

function addOne(num){
     return num+1;
}


console.log(addTwo(7));
const addTwo = function(num){
    return num+2
}