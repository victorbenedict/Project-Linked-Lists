const cl = console.log
class LinkedList { // LinkedList class, which will represent the full list.
  constructor() {
    this.headNode = null
  }
  append(value) { // adds a new node containing value to the end of the list
    const newEndNode = new Node(value)
    if (this.headNode === null) {
      this.headNode = newEndNode
      return
    }

    let currentNode = this.headNode
    let i = 0
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }
    currentNode.nextNode = newEndNode

  }
  prepend(value) { // adds a new node containing value to the start of the list
    const previousHeadNode = this.headNode
    const newStartNode = new Node(value, previousHeadNode)
    this.headNode = newStartNode
  }

  size() { // returns the total number of nodes in the list
    let currentNode = this.headNode;
    let counter = 0; 
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      ++counter;
    }
  
    return counter;
  }

  head() { // returns the first node in the list
    return this.headNode
  }

  tail() { // returns the last node in the list
    let currentNode = this.headNode
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  at(index) { // returns the node at the given index
    let currentNode = this.headNode
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  pop() { // pop removes the last element from the list
    if (this.headNode === null) {
      return null
    }
    let previousNode
    let currentNode = this.headNode
    while (currentNode.nextNode !== null) {
      previousNode = currentNode
      currentNode = currentNode.nextNode
    }
    previousNode.nextNode = null
    return currentNode
  }

  contains(value) { // returns true if the passed in value is in the list and otherwise returns false.
    let currentNode = this.headNode
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.nextNode
    }
    return false
  }

  find(value) { // returns the index of the node containing value, or null if not found.
    let counter = 0
    let currentNode = this.headNode
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return counter
      }
      currentNode = currentNode.nextNode
      counter++
    }
    return null
  }

  toString() { // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    if (this.headNode === null) {
      return 'null'
    }
    let arrNode = []
    let currentNode = this.headNode
    while (currentNode !== null) {
      arrNode.push(`(${currentNode.value})`)
      currentNode = currentNode.nextNode
    }
    arrNode.push('null')
    return arrNode.join('->')
  }
}
  
class Node { // Node class, containing a value property and a link to the nextNode, set both as null by default.
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

// Tests
const list = new LinkedList();

// Test 1: append
list.append(1);
console.log(list.toString()); // (1) -> null

// Test 2: prepend
list.prepend(2);
console.log(list.toString()); // (2) -> (1) -> null

// Test 3: size
console.log(list.size()); // Expected: 2

// Test 4: head
console.log(list.head().value); // Expected: 2

// Test 5: tail
console.log(list.tail().value); // Expected: 1

// Test 6: at
console.log(list.at(1).value); // Expected: 1

// Test 7: pop
list.pop();
console.log(list.toString()); // (2) -> null

// Test 8: contains
console.log(list.contains(2)); // Expected: true
console.log(list.contains(1)); // Expected: false

// Test 9: find
console.log(list.find(2)); // Expected: 0
console.log(list.find(1)); // Expected: null

// Test 10: toString
console.log(list.toString()); // (2) -> null

// // // Extra Credit Test 1: insertAt
// // list.insertAt(3, 0);
// // console.log(list.toString()); // (3) -> (2) -> null

// // // Extra Credit Test 2: removeAt
// // list.removeAt(1);
// // console.log(list.toString()); // (3) -> null