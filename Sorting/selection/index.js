/**
 * 
 * Selection sort algoritm
 * This algorithm uses a nested loop, the first loop starts at index 0 while the second always starts
 * at the index followed by index i. The first loop using index i is the index holding the asummed minimum value
 * index is compared to each value seen at index j to check if value at index j is smaller, when a smaller value 
 * is found, the value at index i is saved in a temporary variable, then the value at index j is swapped with the
 * value at index i, then the value saved in the temporary variable is switched to be the new value at index j.
 * 
 * The next step is to go back to the nested loop and increment j, when j reaches the end of the array, the first loop's index i 
 * gets incremented and repeat the same process,
 * 
 */

const selection_sort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                let temp = arr[min];
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr;
}

const randomList = []

for (let i = 0; i < 15; i++) {
    const randNum = Math.floor(Math.random() * (100 - 1) + 1);
    randomList.push(randNum)
}

const testCases = [randomList, ['d','g','c','w','j','a','v','b',100,7,1,4], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]];

for (let test of testCases) {
    console.log('-'.repeat(100))
    console.log('Orginal List:', test)
    console.log('\nSorted List:',selection_sort(test))
}