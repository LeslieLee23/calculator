var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

//add function
var add = function(number1, number2) {
  return number1 + number2;
}

//substract function
var sub = function(number1, number2){
  return number1 - number2;
}

//multiply function
var multiply = function(number1, number2){
  return number1 * number2;
}

//devide function
var divide = function(number1, number2){
  return number1 / number2;
}

var result1 = add(number1, number2);
alert(result1);
var result2 = sub(number1, number2);
alert(result2);
var result3 = multiply(number1, number2);
alert(result3);
var result4 = divide(number1, number2);
alert(result4);


//BMI calculation
var weight = parseFloat(prompt("What is your weight (in kg)?"));
var height = parseFloat(prompt("What is your height (in meter)?"));

var BMI = parseFloat(weight/(height*height));
alert(BMI)

var t_celsius = parseInt(prompt("Write temperature in C?"));
var t_fahrenheit = 32 + t_celsius*9/5;
alert(t_fahrenheit)
