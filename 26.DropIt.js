function dropElements(arr, func) {
    // Drop them elements.
    var index = 0;
    var index = arr.findIndex(func);
    if (index == -1) {
        return [];
    }
    else {
        return arr.slice(index);
    }

    return arr;
  }

  console.log(dropElements([4, 2, 3], function(n) {return n < 3; }));


