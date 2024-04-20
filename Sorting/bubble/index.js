const numberArr = [3,2,3,9,6,7,5];

const bubble = (array) => {
  for (let i = 0; i < array.length; i+=1){
    const larrayrge = array[i]
    for (let j = i + 1; j < array.length; j+=1) {
      if (array[i] > array[j]){
        array[i] = array[j];
        array[j] = larrayrge
      }
    }
  }
  return array;
}

console.log(bubble(numberArr));