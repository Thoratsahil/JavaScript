/*
let a=document.getElementById("id1");
console.log(a);
console.dir(a);  */

let c=document.getElementsByClassName("cls");
console.log(c);
console.dir(c);


//create h2 element and append the string like "from student" using javascript.
let h=document.querySelector("h2");
console.dir(h.innerText);

h.innerText=h.innerText + " from Students"; //
console.dir(h.innerText);