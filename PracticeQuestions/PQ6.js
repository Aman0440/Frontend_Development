function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (str === reversed) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));