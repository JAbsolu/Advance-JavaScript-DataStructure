const nums : number[] = [3,2,3,9,6,7,5];

function bubbleSort(arr : number[]) : number[] {
  for (let i = 0; i < arr.length; i+=1){
    const larrrge : number = arr[i]
    for (let j = i + 1; j < arr.length; j+=1) {
      if (arr[i] > arr[j]){
        arr[i] = arr[j];
        arr[j] = larrrge
      }
    }
  }
  return arr;
}

console.log(bubbleSort(nums));