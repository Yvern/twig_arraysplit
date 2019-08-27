const groupArrayElements = require('./groupArrayElements');

/**
* Entry point to the application. Runs the groupArrayElements() function on
* given array to split into given number of sub-arrays.
*/
function main() {
  const array = [1,2,3,4,5];
  const N = 3;
  console.log("Running groupArrayElements()");
  const groupedElements = groupArrayElements(array, N);
  console.log("Result: ", groupedElements);
}

//Run the main
main();
