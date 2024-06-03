const nums = [64, 34, 25, 12, 22, 11, 90, 5];
//             i    unsorted = [64]
//                            j

const sort = (arr) => {
  for (let i = 1; i < arr.length; i++){
    let insertIndex = i;
    let currentVal = arr.splice(i,1)[0];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentVal) {
        insertIndex = j;
      }
    }
    arr.splice(insertIndex,0, currentVal);
  }
  return arr;
}

console.log("sorted array:", sort(nums));