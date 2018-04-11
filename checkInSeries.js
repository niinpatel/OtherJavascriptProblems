function checkInSeries(number){
  
  for (let i = 2; i < number; i += 2){
    let fourPower = (1 << i);
    if(fourPower === number){
      return true;
    }
    else if(fourPower > number){
      return false;
    }
  }
  
}

checkInSeries(1024);	