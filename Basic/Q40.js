function contains1or3(arr) {

  if (arr.length !== 2) {
    return false;
  }

  return arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1;
}

console.log(contains1or3([1, 2]));    
console.log(contains1or3([3, 4]));    
console.log(contains1or3([5, 6]));    
console.log(contains1or3([1, 1]));    
