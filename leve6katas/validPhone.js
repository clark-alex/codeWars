// Write a function that accepts a string, and returns true if it is in the form of a phone number. 
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses) 

// Examples:

// validPhoneNumber("(123) 456-7890")  =>  returns true
// validPhoneNumber("(1111)555 2345")  => returns false
// validPhoneNumber("(098) 123 4567")  => returns false

function validPhoneNumber(phoneNumber){
    let splitStr = phoneNumber.split('')    
       if (splitStr[0] === '(' && splitStr[4] === ')' && splitStr[9] === '-' && !splitStr[14] )return true
    return false
}


console.log(validPhoneNumber("(123) 456-7890"))
// console.log(validPhoneNumber("(1111)555 2345"))
// console.log(validPhoneNumber("(098) 123 4567"))