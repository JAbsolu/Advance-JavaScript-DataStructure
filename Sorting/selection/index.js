const nums = [ 7, 12, 9, 11, 3];
/**
 * The algorithm below is the more efficient version of selection sort
 * Instead of removing element and adding to the front of the array, it 
 * swaps the elements based on the lower value. saving us time, this operation
 * is constant and does not require any elements to be shifted.
 * 
 * The algorithm runs at O(n^2)
 */
const sort = (arr) => {
  const n = arr.length; // get the length of the array

  for (let i = 0; i < n; i++) {
    let min = arr[i]; // assume the minimum value is at i
    for (let j = i+1; j < n; j++){
      // check if element at j is smaller than val at min
      if (arr[j] < min) {
        min = arr[j]; // reassign the value to element at j
        arr[j] = arr[i] // swap element at j with element at i
        arr[i] = min; // store new min val at i
      }
    }
  }
  return arr; // return the sorted array
}

console.log("\nsorted array:", sort(nums) + "\n");

/**
 ** -------------------------------------------------------------------------- **
 ** -------------------------------------------------------------------------- **
 ** The method below is the less efficient way to implement selection sort     **
 ** This algorithm works by removing the lowest value out of the array         **
 ** and adds it to the front of the array.                                     **
 ** This algirthm is more time costing because, in order to add the lowest     **
 ** value to the begining of the array, every other elements must be shifted   **
 ** to the right.                                                              **
 ** -------------------------------------------------------------------------- **
 ** -------------------------------------------------------------------------- **
 **/

const arr = [64, 34, 25, 5, 22, 11, 90, 12];

const shiftingMethod = (myArray) => {
  let n = myArray.length; // get the length of the array
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // assume min value is at index i
    for (let j = i + 1; j < n; j++) {
      // check if element at j is lower than item at minIndex
      if (myArray[j] < myArray[minIndex]) {
        minIndex = j; // save the new index with the lower value at minIndex
      }
    }
    // save the first value of the splice method in newMin, thats what [0] does
    const newMin = myArray.splice(minIndex, 1)[0];
    // use splice method, to select element at index i, remove 0 item, and add value saved in newMin at index i
    myArray.splice(i,0,newMin);
  }
  // return the sorted array
  return myArray;
}

console.log("sorted array, slower algorithm:", shiftingMethod(arr) + '\n');
