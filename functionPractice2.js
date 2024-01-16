function ap(msg){
   let count=0;
    for(let ch of msg){

        if(ch=="a" ||ch=="e" ||ch=="i" ||ch=="o" ||ch=="u")
        {
            
            count++;
        }
    }

    //console.log(ap("sahil"));
    console.log(count);
    
}