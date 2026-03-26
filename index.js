/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  // TODO: Implement this function.
  return a + b;
}

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  // TODO: Implement this function.
  let reversed= "";
  for (i=str.length-1; i>=0; i--){
    reversed+=str[i];
  }
  return reversed;
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
  // TODO: Implement this function.
  if (numbers.length===0){
    return null;
  }
  let num=numbers[0];
  for(i=0;i<numbers.length;i++){
    if (num<numbers[i]){
      num=numbers[i]}
  }
  return num;
}

/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * The check should be case-insensitive.
 */
function isPalindrome(str) {
  const tolower = str.toLowerCase();
  let reverse = "";
  for (let i = tolower.length - 1; i >= 0; i--) {
    reverse += tolower[i];
  }
  return tolower === reverse;
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the original array.
 */
function filterEvenNumbers(numbers) {
  // TODO: Implement this function.
    return numbers.filter(num => num % 2 === 0);
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};