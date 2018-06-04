// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !

function pigIt(str){
    let splitStr = str.split(' ')
    let newStr = []
    for(let i = 0 ; i<splitStr.length ; i++){
        if(!splitStr[i].search(/^[a-zA-Z]*$/)){
            let firstLetter = splitStr[i].charAt(0);
            let pigStr = splitStr[i].slice(1);
            pigStr = pigStr + firstLetter + 'ay'
           newStr.push(pigStr)
        }
        else(newStr.push(splitStr[i]))
    }
    return newStr.join(' ')
  }
