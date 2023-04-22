

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).




function countSheeps(arrayOfSheep) {
  
    let num = 0
    for (const sheep of arrayOfSheep) {
      if(sheep == true){
         num+=1
      }
    }
   console.log(num);
        
    }
    
    countSheeps([true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true])