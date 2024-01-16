function ap(msg){
   let count=0;
    for(let ch of msg){

        if(ch=="a" ||ch=="e" ||ch=="i" ||ch=="o" ||ch=="u")
        {
            
            count++;
            

        }
        
    }
    return count;
}
    //return count;
   let d=ap("aapp")
    console.log(d);
    
