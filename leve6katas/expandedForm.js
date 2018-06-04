function expandedForm(num) {
    let expanded = []
    let splitnum = num.toString().split('')
    for (let i = 0; i < splitnum.length; i++) {
        (+(splitnum[splitnum.length - (i+1)])) === 0 ? '' :
        expanded.push(`${ +(splitnum[splitnum.length - (i+1)]) * Math.pow(10,i)} + `) 
    }let reversedSplitStr = expanded.reverse().join('').split('')
    return reversedSplitStr.slice(0,reversedSplitStr.length -3).join('')
}
//Write the number given in expanded form
console.log(expandedForm(70304)) // should return 70000 + 300 + 4