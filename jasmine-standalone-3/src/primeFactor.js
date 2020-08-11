function primeFactorList(n){
  var listArray = []
  if(n > 1){
    while(n % 2 === 0){
      listArray.push(2)
      n /= 2
    }
    while(n % 3 === 0){
      listArray.push(3)
      n /= 3
    }
  };
  if(n > 1)
  listArray.push(n)
  return listArray
};
