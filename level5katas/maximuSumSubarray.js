// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

let maxSequence  = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// -- should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
//  If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


//-2 1
function maxSum(arr) {
    let maxSum = 0
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr.length; j++) {
            let subarray=[0]
            if(i-j !== 0){
                subarray = arr.slice(i,i-j)
            }
            else{
                subarray = arr.slice(i)
            }

            console.log(subarray.reduce((cur,acc)=>cur+acc))
            let newSum = subarray.reduce((cur,acc)=>cur+acc)

            if (newSum > maxSum) maxSum = newSum
        }
    }
    return maxSum
}
console.log(maxSum(maxSequence))