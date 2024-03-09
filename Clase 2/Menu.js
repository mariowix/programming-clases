// Funcion que te saluda
function sayHi(name, age, favoriteColor = "Blanco") {
    console.log("Hola! ", name)
    console.log("Tienes ", age, " de edad")
    console.log("Mi color favorito tambien es ", favoriteColor)
}

// Funcion que devuelve el cuadrado de un numero
function square(number) {
    return number * number;
}

var persona = {}

persona.age = 13;

if (persona.age >= 18) {
    console.log("Eres mayor de edad")
} else if (persona.age >= 15) {
    console.log("Eres un adolescente")
} else if (persona.age >= 12) {
    console.log("Eres un puberto")
} else if (persona.age >= 10) {
    console.log("Eres un chamaco")
} else {
    console.log("Eres un baby")
}

// switch
// for

while (persona.age < 18) {
    console.log("Aumentando un año")
    persona.age = persona.age + 1 
}


console.log(persona)