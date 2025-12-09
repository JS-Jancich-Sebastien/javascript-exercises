const convertToCelsius = function(farenheit) {

  let celcius = (farenheit-32) * (5/9);
  return roundToTwoDecimals(celcius);
};

const convertToFahrenheit = function(celcius) {
  let farenheit = (celcius * (9/5)) + 32;
  return roundToTwoDecimals(farenheit);
};

function roundToTwoDecimals(number)
{
  return Math.round(number*10)/10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
