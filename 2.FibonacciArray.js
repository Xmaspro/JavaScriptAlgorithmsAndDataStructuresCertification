var array = [1,1];
var n = 20;
var i;

for (i = 2; i < n; i++) {
    var nextValue = array[i-2] + array[i - 1];
    if (nextValue > Number.MAX_VALUE) {
        console.log("Overflow error.");
        break;
    }
    array.push(nextValue);

console.log(array);
}