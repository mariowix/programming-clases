/* Stack = Pila */

/* Stack is a linear data structure that follows a particular order in which the operations are performed. 
The order may be LIFO(Last In First Out) or FILO(First In Last Out). 
LIFO implies that the element that is inserted last, comes out first 
and FILO implies that the element that is inserted first, comes out last. 
https://www.geeksforgeeks.org/stack-data-structure/
*/

class Stack {
    constructor() {
        this.stack_data = []
    }

    push(data) {
        this.stack_data.unshift(data)
    }

    pop() {
        this.stack_data.shift()
    }

    seek() {
        // 0 - 1 - 2 - 3 - 4
        // A
        // B   A
        // C   B   A 
        return this.stack_data[0]
    }

    empty() {
        return this.stack_data.length === 0;
    }
}

module.exports = Stack
