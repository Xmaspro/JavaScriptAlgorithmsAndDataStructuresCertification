function diffArray(arr1, arr2) {
    const diffArr = [];
    const totalArr = arr1.concat(arr2);
    for (let i = 0; i < totalArr.length; i++) {
        if (arr1.indexOf(totalArr[i]) === -1 || arr2.indexOf(totalArr[i]) === -1) {
            diffArr.push(totalArr[i]);
        }
    }
    return diffArr;
  }

  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

