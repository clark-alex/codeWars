// Implement the function unique_in_order which takes as argument a sequence and returns 
// a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(input) {
    splitArr = []
    typeof input === 'string' ? splitArr = input.split('') : splitArr = input
    for (let i = 0; i < splitArr.length; i++) {
            if (splitArr[i] === splitArr[i +1]){
                splitArr.splice(i,1)
                i--
            } 
    }
    return splitArr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder([1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 6, 1,1,]))

