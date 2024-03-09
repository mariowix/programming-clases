/*
An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).

https://www.geeksforgeeks.org/array-data-structure/
*/

const letters = [
    "A", // 0
    "B", // 1
    "C", // 2
    "D", // 3
]

console.log("La cantidad de elementos en el array es: ", letters.length)
console.log("El primer elemento en el array es: ", letters[0])
console.log("El ultimo elemento en el array es: ", letters[letters.length - 1])

console.log("El array completo es: ", letters)

letters.push("E")

console.log("El array completo despues de agregar E es: ", letters)

letters.pop()

console.log("El array completo despues de eleminar al final es: ", letters)

letters.unshift("0")

console.log("El array completo despues de agregar al principio es: ", letters)

letters.shift()

console.log("El array completo despues de eleminar al principio es: ", letters)

