/**
* This function will split a given array in the given N number of sub arrays.
* It will split it into equally sized parts where only the last part may be
* a different size if the array cannot be split equally by N.
* @param array {array} - The array to split
* @param N {number} - The number of sub-arrays to split into
*/
function groupArrayElements(array, N) {
  //if the number of sub-arrays to split into is 0 or 1, return original
  if (N <= 1) {
    return array;
  }

  let resultingArray = [];
  let i = 0;

  if (array.length % N === 0) {
    //if the array can be equally divided by N, split into equal sized sub-arrays
    size = array.length / N; //this will return a natural number, no decimals
    while (i < array.length) {
      //create a sub-array of size 'size' and add it to the resultingArray
      let subArray = array.slice(i, i += size);
      resultingArray.push(subArray);
    }
  } else {
    //if the array cannot be equally divided, first process the N-1 equally
    //sized parts
    //round down the size to ensure evenly sized sub-arrays
    size = Math.floor(array.length / (N - 1));
    //if the length can be evenly split by the original N - 1, reduce size
    //so the last array-part isn't empty
    if (array.length % size === 0) {
      size--;
    }
    //for all array elements that fit within N - 1 sub-arrays of size 'size',
    //create evenly sized sub arrays
    while (i < ( (N - 1) * size) ) {
      let subArray = array.slice(i, i += size);
      resultingArray.push(subArray);
    }
    //process the uneven sub-array afterwards
    let subArray = array.slice( (N - 1) * size);
    resultingArray.push(subArray);
  }

  //return the empty array if something went wrong
  return resultingArray;
}

module.exports = groupArrayElements;
