//for a given array with marks of student [33,23,434,32],find the average marks of class.
let sum= 0;
let count=0;
let marksStudent=[22,33,44,55]
 for(let i=0;i<marksStudent.length;i++){
    sum=sum+marksStudent[i];
    count++;
    console.log(sum);
 }
 let avg=sum/count;
 console.log(avg)