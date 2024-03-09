/*
Given a string with open and closed parenthesis like this: "(()))((()()()))"

Determine if it is valid.

A valid string is always equally open and closed, these are examples of valid string:

"()"
"(())"
"((((()))))"
"((())(())((()))"
"()()"

These are examples of invalid strings

")"
"("
")("
"())"
"()("
"(()"
*/

var ClassStack = require("./Stack")

class Solver {
    solve(s) {
        // Aqui inicia tu codigo
        var openParentesis = 0

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                openParentesis++;
            }
             else if (s[i] === ")") {
                if (openParentesis == 0) {
                    return false
                } else {
                    openParentesis--;
                }
            }
        }

        return openParentesis == 0
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