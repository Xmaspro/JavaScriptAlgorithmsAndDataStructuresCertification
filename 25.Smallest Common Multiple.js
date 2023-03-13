function smallestCommons(arr) {
    // 1. Get the max and min of the array
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let arr2 = [];
    // 2. Create an array of all the numbers between the max and min
    for (let i = min; i <= max; i++) {
        arr2.push(i);
    }
    let lcm = 1;
    let GCD = 1;
    // 3. Iterate through the new array
    for (let j = 0; j < arr2.length; j++) {
        let a = lcm;
        let b = arr2[j];
        // 4. Find the GCD of the current number and the LCM
        while (b) {
            let t = b;
            b = a % b;
            a = t;
        }
        GCD = a;
        // 5. Find the LCM of the current number and the LCM
        lcm = (lcm * arr2[j]) / GCD;
    }
    return lcm;
  }

  console.log(smallestCommons([1,5]));