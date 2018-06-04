// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
    splitStr = []
    camelStr = ''
    if (!str) return ''
    if (str.split('-').length !== 1) { splitStr = str.split('-') }
    else { splitStr = str.split('_') }
    camelArr += splitStr[0]
    for (let i = 1; i < splitStr.length; i++) {
        camelArr += splitStr[i][0].toUpperCase() + splitStr[i].slice(1)
    }
    return camelStr
}
