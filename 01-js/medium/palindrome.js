/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the processed string
    const reversedStr = processedStr.split('').reverse().join('');
    
    // Check if the original string is equal to its reverse
    return processedStr === reversedStr;
}

module.exports = isPalindrome;
