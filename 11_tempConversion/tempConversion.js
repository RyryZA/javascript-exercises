const convertToCelsius = function(f) {
let newValue = 0;

    newValue = ((f - 32)*5/9);
    let rounded = newValue.toFixed(1);
    let num = Number(rounded);

  return num;
  
};

const convertToFahrenheit = function(c) {
  let newValue = 0;

    newValue = (c * 9/5 + 32);
    let rounded = newValue.toFixed(1);
    let num = Number(rounded);

  return num;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
