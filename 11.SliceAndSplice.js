function frankenSplice(arr1, arr2, n) {
    let res = [];

    // res = arr2.slice(0, n);
    // res = res.concat(arr1);
    // res = res.concat(arr2.slice(n, arr2.length));

    return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n,arr2.length));
  }

  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));