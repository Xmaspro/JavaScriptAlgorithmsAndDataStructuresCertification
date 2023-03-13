function steamrollArray(arr) {
    // I'm a steamroller, baby
    let newArr = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
        newArr = newArr.concat(steamrollArray(element));
      }else{
        newArr.push(element);
      }
    });
    return newArr;
  }

  steamrollArray([1, [2], [3, [[4]]]]);

  