/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // let lowercase = str.toLowerCase();
  // let checkString = lowercase.split('');
  // let vowelsCount = -1;
  // const vowels = ["a", "e", "i", "o", "u"];
  // for (let i = 0; i <= str.length; i++ ){
  //     for (let j = 0; j <= vowels.length; j++){
  //         if (checkString[i] == vowels[j]){
  //             vowelsCount = vowelsCount + 1
  //         }
  //     }
  // }
  // return vowelsCount

  /*
  let char: This part declares a new variable char that will represent each element of the iterable object (in this case, the characters of the string str). The let keyword declares a block-scoped variable, which means char will only be accessible within the loop block.
  
  of: This is a keyword used in for...of loops to specify the source of iteration. It indicates that we want to iterate over the elements of the iterable object str.
  
  str: This is the iterable object over which we are iterating. In this case, it's a string. The loop will iterate over each character of the string str.
  */
  let vowelCount = 0;
  const vowels = 'aeiouAEIOU';
  for (let char of str) {
      if (vowels.includes(char)) {
          vowelCount++;
      }
  }
  return vowelCount;
}

module.exports = countVowels;