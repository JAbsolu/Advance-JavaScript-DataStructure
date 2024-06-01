const numArr = [3,2,3,9,6,7,5];

const sort = (arr) => {
  // get the length of the array
  const n = arr.length;
  // start first loop
  for (let i = 0; i < n -1; i += 1) {
    // intiate a boolean to determine whether elements were swapped or not
    let swapped = false;
    // start second loop
    for (let j = 0; j < n; j += 1) {
      // check if element at j is greather than element at j + 1
      if (arr[j] > arr[j+1]) {
        // save element at j in a constant
        const temp = arr[j];
        // swapp item at el j with item at el j + 1
        arr[j] = arr[j+1]; 
        // assign el saved in temp to el at j + 1
        arr[j+1] = temp;
        // set swapped to true to continue iterating at i
        swapped = true;
      }
    }
    // test code  -- checks number of times first loop iterated
    console.log("loop:", i+1);
    //if we didn't swap, break the loop
    if (!swapped) break;
  }
  // return the sorterd array as a string
  return arr.toString();
}

console.log("Sorter array:", sort(numArr))