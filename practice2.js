let inp=prompt("Enter Students Marks");
if(inp>80){
    console.log("A Grade");
}
else if(inp>70 && inp<=80){
    console.log("B Grade");

}
else if(inp>60 && inp<=70){
    console.log("C Grade");
}
else if(inp>50 && inp<=60){
    console.log("D Grade");
}
else if(inp>=40 && inp<=50){
    console.log("E Grade");
}
else {
    console.log("Student Fail");
}