//Hometask 1
function compareArrays(arr1, arr2) { 
  const isEqual = (elem, index) => elem === arr2[index]; 

  return (arr1.length === arr2.length) && arr1.every(isEqual); 
}

//Hometask 2
function advancedFilter(arr) {
  const filterArray = elem => elem > 0 && !(elem % 3);

  const multipleArray = elem => elem * 10;

  return arr.filter(filterArray).map(multipleArray);
}
