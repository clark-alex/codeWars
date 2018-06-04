// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a 
// given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. 
// There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you.
//  The rest of the given series is the same as the original AP. Find the missing term.

// You have to write the function findMissing(list), list will always be at least 3 numbers. 
// The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// ```

// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!


function findMissing(array) {
    let progressionArr = [];
    let progVal = 0
    for (let i = 0; i < array.length; i++) {

        progressionArr.push(array[i + 1] - array[i])
    }
    if (array.length <= 3) {
        if (progressionArr[0] < progressionArr[1]) {
            progVal = progressionArr[0]
        }
        else {
            progVal = progressionArr[1]
        }
    }
    else {


    }
    for (let i = 0; i < progressionArr.length; i++) {
        for (let j = i + 1; j < progressionArr.length; j++) {
            console.log(progressionArr[i])
            console.log(progressionArr[j])
            if (progressionArr[i] === progressionArr[i + 1]) {
                progVal = progressionArr[i]
                console.log(progressionArr[i])
                break
            }
        }
    }
    console.log(progVal)
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] !== progVal && i !== 0 && i !== array.length - 1) {
            return array[i] + progVal
        }
        else { 
            return array[0] + progVal 
        }
    }
}
// console.log(findMissing([1, 3, 4]))
// findMissing([1, 3, 4])
// findMissing([1, 3, 7, 9, 11])
// console.log(findMissing([1, 3, 7, 9, 11]))