// Write a function, which takes a non-negative integer (seconds) as input and returns the time
//  in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(num) {
    let seconds = '00'
    let minute = '00'
    let hour = '00'
    const timeInHours = (num / 3600)
    const timeInMin = (timeInHours - timeInHours.toString().split('.')[0])*60
    const timeInSec =Math.round((timeInMin - timeInMin.toString().split('.')[0])*60)
    hour = ((timeInHours.toString()).split('.')[0]).length === 1? (0 + (timeInHours.toString()).split('.')[0]) : (timeInHours.toString()).split('.')[0]
    minute = (((timeInMin).toString()).split('.')[0]).length === 1? ((0 + (timeInMin).toString()).split('.')[0]) : (((timeInMin).toString()).split('.')[0])
    seconds = (((timeInSec).toString()).split('.')[0]).length === 1? ((0 + (timeInSec).toString()).split('.')[0]) : (((timeInSec).toString()).split('.')[0])
    return `${hour}:${minute}:${seconds}`
}
console.log(humanReadable(359999))

