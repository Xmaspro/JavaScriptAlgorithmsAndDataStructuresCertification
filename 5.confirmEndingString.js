function confirmEnding(str, target) {
    if (str.substring(str.len - target.length) == target) {
        return true;
    } else {
    }
    return false;
}

console.log(confirmEnding("Bastia", "a"));
