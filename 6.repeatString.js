// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let res = "";
    if (num <= 0) {
        return res;
    } else {
        for (let i = 0; i < num; i++) {
            res = res.concat(str);
        }
    }
    return res;
}

console.log(repeatStringNumTimes("abc", 2));
