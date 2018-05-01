// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
    ans = ''
    newStr = str.split(' ')
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].length >= 5) {
            ans +=  (newStr[i].replace(newStr[i], newStr[i].split('').reverse().join('')) + ' ')
        }
        else {
            ans += (newStr[i] + ' ')
        }
    }
    return ans
}
