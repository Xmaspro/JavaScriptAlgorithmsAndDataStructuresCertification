function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str[0]);
    let end = alphabet.indexOf(str[str.length - 1]);
    let missing = "";
    for (let i = start; i <= end; i++) {
        if (!str.includes(alphabet[i])) {
            missing += alphabet[i];
        }
    }
    if (missing == "") {
        return undefined;
    }
    return missing;
  }
  console.log(fearNotLetter("abce"));