//  JavaScript 2
// Type Conversion, Comparision, Logical Operators

// Type Conversion - (changes data types)

// let num = 2;

// let str = String(num) // num is string now

// Change methods:

//  	Number() // to number
//  	String() // to string
//  	Number.parseInt() // to integer only (10.5 -> 10)
//  	Number.parseFloat() // to float
//  	parseInt() // we can write it without Number
//  	parseFloat() // we can write it without Number

//  We can see data's types with - typeof - operator:
//  	console.log(typeof varName) // shows data type

//  Boolean type:
//  	True = 1 (!0, !null, !undefined)
//  	False = 0

//     false == null // false (w)
//     undefined == null // true (w)
//     false == undefined // false (w)

// Basic operators, Math:
//     + Addition
//     - Subtraction
//     * Multiplication
//     / Division
//     % Reminder
//     ** Exponentation
//     () Braces
//     == === Equality
//     +=, -=, *=, /= Obrivations
//     ++ Increment
//     -- Decrement

//     Note = is assign operator not Equality
//         a = 10 // assignment
//         10 == 10 // comparision
//         10 === 10 // comparision

// Comparisions:

//     <, >, ==, ===, <=, >=, !

//         > - greater
//         < - smaller
//         == - value equality comparision
//         === - value + type equality comparision
//         >= - greater or equal
//         <= smaller or equal

//     console.log(10 == 10) // true (comparisions always return boolean)

// Logical Operators: || &&

//     || - OR

//         if one check true terurns true otherwise returns false

//         console.log(false || true) // true
//         console.log(true || false) // true
//         console.log(true || true) // true
//         console.log(false || false) // false

//     && - AND
//         if one check false returns false otherwise returns true

//         console.log(true || true) // true
//         console.log(false || true) // false
//         console.log(true || false) // false
//         console.log(false || false) // false