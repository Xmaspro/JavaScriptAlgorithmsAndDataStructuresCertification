function getIndexToIns(arr, num) {
    let pos = 0;
    for (let i =0; i< arr.length; i++) {
        if (arr[i] < num) {
            pos += 1;
        }
    }
    return pos;
  }

  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));