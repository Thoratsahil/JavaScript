/*
let a=document.getElementById("id1");
console.log(a);
console.dir(a);  */

let c=document.getElementsByClassName("cls");
console.log(c);
console.dir(c);

let h=document.querySelector("h2");
console.dir(h.innerText);

h.innerText=h.innerText + " from Students";
console.dir(h.innerText);