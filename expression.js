
let a=prompt("enter your age =");
a= Number.parseInt(a);

if(a<8)
{
    alert("you are not eligible");
}
else if(a>8 && a<18)
{
    alert("you are eligible after some time");
}
else if(a>18 && a<70)
{
    alert("you are eligible");
}
else
{
    alert("invalid age or ur in oldage");
}