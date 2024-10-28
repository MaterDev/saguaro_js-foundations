let myBirthday

console.log("My birthday: ", myBirthday)

myBirthday = '4-26-1986'

console.log("My birthday: ", myBirthday)

/** 
 * Declare variable
 *      var - dont use (Global)
 *      let - can reassign a variable a different value
 *      const - cannot reassign a different value
 * */ 

/**
 * ! Different Data Types:
 *      Primative
 *          - Undefined
 *          - Null
 *          - Booleans - true/false, 1/0, any variable that has a value that is not zero/false
 *          - Number
 *          - Strings
 *      Reference Types
 *          - Functions
 *          - Object
 */

let myObject = {
    key: "value",
    pet: "dog"
}

let myArray = [1,2,3,4]

console.log(typeof true)
console.log(typeof "dog")
console.log(typeof myArray)
console.log(typeof myObject)
console.log(typeof 3.14)

// * Type coercion

console.log(5 - '10')
console.log(5 * '10')
console.log(5 + '10')
console.log(5 - "dog")
console.log(5/0)

// * PEMDAS (Order of Operations)
    // Code grouped in paretheses will run as a group

// ! Expressions
let day = "31"
let month = "5"
let year = "1990"

// let sistersBirthday = month + '-' + day + '-' + year;

// String template (interpolation)
let sistersBirthday = `Birthday is... ${month}-${day}-${year}`

console.log(sistersBirthday)

function sayHi() { // Defining the function with a signature
    console.log("hi")
}

sayHi() // Executing function

function tripleIt(incNumber) {
    return incNumber * 3
}

let tripledNumber = tripleIt(4)
console.log("tripledNumber: ", tripledNumber)

// ! Truthy & Falsy

if (NaN) {
    console.log("It's truthy")
} else {
    console.log("It's falsy")
}

let myName = "Key"

if (myName) {
    console.log(`Hello ${myName}`)
} else {
    console.log("What was your name again?")
}

let myAge = 10

if (myAge) {
    console.log(`Youre ${myAge} years old`)
} else {
    console.log("How old are you?")
}