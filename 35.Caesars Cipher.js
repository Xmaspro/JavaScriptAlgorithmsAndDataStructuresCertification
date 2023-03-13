function rot13(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[A-Z]/)) {
        char = String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
      }
      newStr += char;
    }
    console.log(newStr);
    return newStr;
  }


  rot13("SERR PBQR PNZC");