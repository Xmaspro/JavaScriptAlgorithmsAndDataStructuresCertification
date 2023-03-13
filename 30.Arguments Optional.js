// This function adds two numbers together
  function addTogether() {
      // Destructuring the first and second argument
      const [first, second] = arguments;

      // Checking if the first argument is a number
      if (typeof(first) !== "number")
        return undefined;

      // If there is only one argument, returns a new function
      if (arguments.length === 1)
        return (second) => addTogether(first, second);

      // Checking if the second argument is a number
      if (typeof(second) !== "number")
        return undefined;

      // Returns the sum of the two arguments
      return first + second;
    }


    console.log(addTogether(7,8));