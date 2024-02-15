/*
console.log("1");
console.log("2");
console.log("3");
console.log("This is Synchronous type");
*/


//Sychoronous Type

console.log("1");
console.log("2");

function call(){
    console.log("function called")

}
setTimeout(call,2000)//milisec,callfunction
console.log("3");
console.log("This is Asynchronous type");

//Asychoronous Type
