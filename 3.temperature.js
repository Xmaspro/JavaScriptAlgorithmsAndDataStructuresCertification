// Only change code below this line
class Thermostat {
    constructor(F_temp){
      this.F_temp = F_temp;
    }
    get temperature() {
      return (5 / 9) * (this.F_temp - 32);
    }
    set temperature(celsius) {
      this.F_temp = (celsius * 9.0) / 5 + 32;
    }
  }
  // Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  console.log(temp);]

