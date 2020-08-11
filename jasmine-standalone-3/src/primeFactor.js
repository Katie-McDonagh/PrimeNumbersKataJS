function primeFactorList(n){
  var listArray = []
  var devisor = 2
  while(n > 1){
    while(n % devisor === 0){
      listArray.push(devisor)
      n /= devisor
    }
    devisor++;
  }; 
  return listArray
};
