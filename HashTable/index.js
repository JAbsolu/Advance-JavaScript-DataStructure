/**
 * This code implements  a hash table
 */
const names = ["Jane", "John", "Mark", "Mary", "Sam", "Kobe", "Kobe"];
const hashTable = new Array(names.length); // create array and set  length to length of names array

/**
 * @param {*} value takes in a string
 * @returns the sum of the characters mod length of the arr
 */
const hashWord = (value) => {
  let charSum = 0;
  for (let i = 0; i < value.length; i++){
    charSum += value.charCodeAt(i);
  }
  return charSum % hashTable.length;
}

/**
 * @param {*} arr takes an array
 * this function saves the data in the hash table
 */
const hashData = (arr) => {
  for (let data of arr) {
    const hashIndex = hashWord(data.toUpperCase());
    /**
     * handle collisions
    */
    if (hashTable[hashIndex] !== undefined) {
      const item = hashTable[hashIndex]; //get the value stored at the hash index
      if (typeof(item) === "object") {  // check if the type of item is an obj/array
        hashTable[hashIndex] = [data, ...item]; //store data at hashindex and spread rest of item array's content
      } else {
        // else item is a single value, create an array with the data and the previous item stored at hashindex
        hashTable[hashIndex] = [data, item];
      }
    } else {
      //else just store the data at the hashindex
      hashTable[hashIndex] = data;
    }
  }
}

/**
 * @param {*} value takes in a value
 * @returns returns the value from the hash table if it exists
 */
const lookUpData = (value) => {
  const hashIndex = hashWord(value.toUpperCase()); // guess the hash index based on value passed
  const item = hashTable[hashIndex]; // save the item from hashtable location
  
  //check if item is an array, if yes instead of returning true just return the value passed
  if (typeof(item) === "object") return !item.includes(value) || value 
  else return item; // else item is a single value, not an array, return item
}

hashData(names);
console.log(hashTable);
console.log(lookUpData("Kobe"));