function isPalindrome(word) {
  var reversed = word.split("").reverse().join("");
  var lowerCaseReversed = reversed.toLowerCase()
  if(lowerCaseReversed === word) {
    return true
  }else {
    return false
  }

}

isPalindrome("RED")

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
this code should take in a string, out put a boolean
the output should be to a word can the be read the same backwards
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
