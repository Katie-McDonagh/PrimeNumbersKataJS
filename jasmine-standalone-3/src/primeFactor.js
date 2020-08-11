function primeFactorList(n){
  var listArray = []
  if(n > 1){
    if(n % 2 === 0){
      listArray.push(2)
      n /= 2
    }
    if(n > 1)
    listArray.push(n)
  };
  return listArray
};
