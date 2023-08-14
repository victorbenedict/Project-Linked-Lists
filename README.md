# Project-Linked-Lists

A [Linked list](https://dev.to/vaidehijoshi/whats-a-linked-list-anyway) written in Javascript. 
This a part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists) curriculum for understanding the most basic and fundamental data structures.

## The Requirements and Implementations

### You will need two classes or factories:

1. LinkedList class / factory, which will represent the full list. [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L2)
2. Node class / factory, containing a value property and a link to the nextNode, set both as null by default. [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L111)


### Build the following functions in your linked list class:

1. append(value) adds a new node containing value to the end of the list  [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L6)
2. prepend(value) adds a new node containing value to the start of the list [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L21)
3. size returns the total number of nodes in the list [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L27)
4. head() returns the first node in the list [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L38)
5. tail() returns the last node in the list [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L42)
6. at(index) returns the node at the given index [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L50)
7. pop removes the last element from the list [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L58)
8. contains(value) returns true if the passed in value is in the list and otherwise returns false. [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L72)
9. find(value) returns the index of the node containing value, or null if not found. [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L83)
10. toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null [Solution](https://github.com/victorbenedict/Project-Linked-Lists/blob/main/linkedlist.js#L96)
Extra credit
11. insertAt(value, index) that inserts a new node with the provided value at the given index. (Work in progress)
12. removeAt(index) that removes the node at the given index. (Work in progress)
Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.


