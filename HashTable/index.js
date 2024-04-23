/**
 * This code implements  a hash table, the total process has a time complexity of O(N)
 * A Hash Table is a data structure designed to be fast to work with.
 *
 * The reason Hash Tables are sometimes preferred instead of arrays or linked lists is because searching for, 
 * adding, and deleting data can be done really quickly, even for large amounts of data.
 *
 * In a Linked List, finding a person "Bob" takes time because we would have to go from one node to the next, 
 * checking each node, until the node with "Bob" is found.
 *
 * And finding "Bob" in an Array could be fast if we knew the index, but when we only know the name "Bob", 
 * we need to compare each element (like with Linked Lists), and that takes time.
 *
 * With a Hash Table however, finding "Bob" is done really fast because there is a way to 
 * go directly to where "Bob" is stored, using something called a hash function.
 */
let names = ["Jane", "John", "Mark", "Mary", "Sam", "Kobe", "Kobe", 5, 10, 'B'];
names = new Set(names);
names = [...names];
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
    const hashIndex = hashWord(data.toString().toUpperCase());
    data = data.toString().toLowerCase();
    // handle collisions
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
  const hashIndex = hashWord(value.toString().toUpperCase()); // guess the hash index based on value passed
  const item = hashTable[hashIndex]; // save the item from hashtable location
  value = value.toString().toLowerCase();
  
  if ( item.includes(value) || hashTable.includes(value)) {
    if (typeof(item) === "object" && item.includes(value)) {
      // console.log('Sub array', hashTable[hashIndex]) //uncomment this code to see how this works
      return `Found: ${item[item.indexOf(value)]}`; // return the value being looked up from the hashtable
    } 
    return `Found: ${value}`
  } else {
    return `Not Found: ${value}`;
  }
}

// console.log(names); // remove coment to print orginal names array
hashData(names);
console.log(hashTable);
console.log(lookUpData("10")); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData("5")); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData("Jane")); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData("Mary")); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData("sam")); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData("Paul")); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData("Josh")); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData(40)); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData(10)); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData(10)); //change the string in loopuDate to lookup other data from hashtable
console.log(lookUpData(43758934657943966453)); //change the param in loopuDate to lookup other data from hashtable