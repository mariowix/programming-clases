/*
A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers

https://www.geeksforgeeks.org/data-structures/linked-list/
*/

class LinkedListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// A -- Null
const head = new LinkedListNode("A", null);

// A
let headCopy = head;

// *
// A -- B
headCopy.next = new LinkedListNode("B", null);

//      *
// A -- B
headCopy = headCopy.next;

//      *
// A -- B -- C
headCopy.next = new LinkedListNode("C", null);

//           *
// A -- B -- C
headCopy = headCopy.next;


// *
// A -- B -- C
headCopy = head

console.log(headCopy.data)
headCopy = headCopy.next
console.log(headCopy.data)
headCopy = headCopy.next
console.log(headCopy.data)
