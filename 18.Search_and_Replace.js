function myReplace(str, before, after) {
    const index = str.indexOf(before);//find the index of the word to be replaced
    after = after.toLowerCase();
    if (str[index] == str[index].toUpperCase()) {//check if the first letter of the word to be replaced is uppercase
        after = after[0].toUpperCase() + after.slice(1);//if so, make the first letter of the word to replace uppercase
    }
    str = str.replace(before, after);//replace the word to be replaced with the word to replace

    return str;
  }

  console.log(myReplace("I think we should look up there", "up", "Down"));