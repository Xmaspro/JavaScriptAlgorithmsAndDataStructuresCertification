// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) == true) {
            res.push(arr[i]);
        }
        else {
            continue;
        }
    }
    return res;
  }

  console.log(bouncer([7, "ate", "", false, 9]));