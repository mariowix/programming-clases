/*
Given a string with open and closed brackets like this: "(()))((()()()))"

Determine if it is valid.

A valid string is always equally open and closed, these are examples of valid string:

"()"
"(())"
"(())"
"()()"
"((((()))))"
"((())(())((())))"
"()()"

These are examples of invalid strings

")"
"("
")("
"())"
"()("
"(()"
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


class Solver {
    solve(s) {
        // Aqui inicia tu codigo
        const queue = new Queue()

        for (let i = 0; i < s.length; i++) {
            if (s[i] == "(")
                queue.queue(1)
            else if (queue.seek()) {
                queue.dequeue()
            } else {
                return false
            }
        }

        if (queue.seek()) return false

        return true
        // Aqui termina tu codigo
    }
}

const solver = new Solver()

// Casos con strings validos
console.log("()", solver.solve("()") == true)
console.log("(())", solver.solve("(())") == true)
console.log("()()", solver.solve("()()") == true)
console.log("(()())", solver.solve("(()())") == true)
console.log("((()()())()())", solver.solve("((()()())()())") == true)

// Casos con string invalidos
console.log("())", solver.solve("())") == false)
console.log("()(", solver.solve("()(") == false)
console.log("()()))", solver.solve("()()))") == false)
console.log("(((((((", solver.solve("(((((((") == false)
console.log("))))))", solver.solve("))))))") == false)