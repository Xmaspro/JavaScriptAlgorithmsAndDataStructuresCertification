function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    let reverse = str.split("").reverse().join("");
    return reverse === str;
  }

  console.log(palindrome("eye"));