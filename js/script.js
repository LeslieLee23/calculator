var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

//add function
add = function(number1, number2) {
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
