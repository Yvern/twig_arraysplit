const groupArrayElements = require('../groupArrayElements');

/*
* This test check that the function will return the original array if N is less
* than or equal to one.
*/
test('split an array by 1', function() {
  const initialArray = [1,2,3,4,5,6];

  const result = groupArrayElements(initialArray, 1);

  //ensure that the resulting array matches the expected array lengths
  expect(result.length).toBe(initialArray.length);
});

/*
* This test check that the function will return the original array if it is empty
*/
test('split an empty array', function() {
  const initialArray = [];

  const result = groupArrayElements(initialArray, 5);

  //ensure that the resulting array matches the expected array lengths
  expect(result.length).toBe(initialArray.length);
});

/*
* This test checks that the function will split an array with a number of
* elements that can be split equally in equal parts.
*/
test('splits array of 6 into 3 sub-arrays', function() {
  const initialArray = [1,2,3,4,5,6];
  const expectedArray = [[1,2],[3,4],[5,6]];

  const result = groupArrayElements(initialArray, expectedArray.length);

  //ensure that the resulting array matches the expected array lengths
  expect(result.length).toBe(expectedArray.length);
  expect(result[0].length).toBe(expectedArray[0].length);
  expect(result[1].length).toBe(expectedArray[1].length);
  expect(result[2].length).toBe(expectedArray[2].length);
});

/*
* This test checks that the function splits an array with a number of elements
* that cannot be split equally into equal parts with the last part of a
* different size.
*/
test('splits array of 5 into 3 sub-arrays', function() {
  const initialArray = [1,2,3,4,5];
  const expectedArray = [[1,2],[3,4],[5]];

  const result = groupArrayElements(initialArray, expectedArray.length);

  //ensure that the resulting array matches the expected array lengths
  expect(result.length).toBe(expectedArray.length);
  expect(result[0].length).toBe(expectedArray[0].length);
  expect(result[1].length).toBe(expectedArray[1].length);
  expect(result[2].length).toBe(expectedArray[2].length);
});

/*
* This test checks that the function splits an array with a number of elements
* that cannot be split equally into equal parts with the last part of a
* different size.
*/
test('splits array of 7 into 3 sub-arrays', function() {
  const initialArray = [1,2,3,4,5,6,7];
  const expectedArray = [[1,2,3],[4,5,6],[7]];

  const result = groupArrayElements(initialArray, expectedArray.length);

  //ensure that the resulting array matches the expected array lengths
  expect(result.length).toBe(expectedArray.length);
  expect(result[0].length).toBe(expectedArray[0].length);
  expect(result[1].length).toBe(expectedArray[1].length);
  expect(result[2].length).toBe(expectedArray[2].length);
});

test('splits array of 11 into 5 sub-arrays', function() {
  const initialArray = [1,2,3,4,5,6,7,8,9,10,11];
  const expectedArray = [[1,2],[3,4],[5,6],[7,8],[9,10,11]];

  const result = groupArrayElements(initialArray, expectedArray.length);

  //ensure that the resulting array matches the expected array lengths
  expect(result.length).toBe(expectedArray.length);
  expect(result[0].length).toBe(expectedArray[0].length);
  expect(result[1].length).toBe(expectedArray[1].length);
  expect(result[2].length).toBe(expectedArray[2].length);
  expect(result[3].length).toBe(expectedArray[3].length);
  expect(result[4].length).toBe(expectedArray[4].length);
});
