const convertToCelsius = function(fahrenheit) {
  let celsius;
  celsius = (fahrenheit - 32) / 1.8;
  return Math.round(celsius * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 1.8 + 32;
  return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
