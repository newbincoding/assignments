/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // const currentDate = new Date();
    // beforeTime = currentDate.getTime()
    // for (let i = 0; i <= n; i++){
    //     let sum = sum + i
    // }
    // console.log(sum)
    // afterTime = currentDate.getTime()
    // console.log("Time taken to run this code = ", (afterTime-beforeTime))


    const beforeTime = new Date().getTime();
    let sum = 0
    for (let i = 0; i <= n; i++){
        sum = sum + i
    }
    const afterTime = new Date().getTime();
    console.log("Time taken to run this code = ", ((afterTime-beforeTime)/1000))
}

calculateTime(100)