class HashSet {
  constructor (size=10) {
    this.size = size;
    this.set = new Array(size);
  };

  getCharSum(val) {
    const size = this.size;
    let charSum = 0;
    val = val.toString();
    for (let i = 0; i < val.length; i+= 1) {
      charSum += val.charCodeAt(i);
    }
    return charSum % size;
  }

  add(val) {
    const setArray = this.set;
    const hashIndex = this.getCharSum(val);
    if (setArray[hashIndex] === "object" && !setArray[hashIndex].includes(val)) {
      setArray[hashIndex].push(val);
    }
  }

  print() {
    const setArray = this.set;
    console.log(setArray)
  }  
}

const mySet = new HashSet();

mySet.add(5);
mySet.add(5);
mySet.add(6);
mySet.getCharSum('John');

mySet.print();