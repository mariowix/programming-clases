/*
A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.

https://www.geeksforgeeks.org/queue-data-structure/
*/

class Queue {
    constructor() {
        this.queue_data = []
    }

    queue(data) {
        this.queue_data.push(data)
    }

    dequeue() {
        this.queue_data.shift()
    }

    seek() {
        return this.queue_data[0]
    }
}

const queue = new Queue()

queue.queue(1)
console.log(queue.seek())

queue.dequeue()

queue.queue(2)
console.log(queue.seek())