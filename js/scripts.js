$(document).ready(function() {
  var numbers = [];
  for (index = 1; index <= 100; index +=1) {
    numbers.push(index);
  } // dont touch
  // numbers.splice(0, 1);
  var primeNumber = 2;
  for (currentNumber = primeNumber + 1; currentNumber < 100; currentNumber += primeNumber) {
    numbers.splice(currentNumber, 1, "a");
  }
  var primeNumber = 3;
  for (currentNumber = primeNumber + 2; currentNumber < 100; currentNumber += primeNumber) {
    numbers.splice(currentNumber, 1, "a");
  }
  var primeNumber = 5;
  for (currentNumber = primeNumber + 4; currentNumber < 100; currentNumber += primeNumber) {
    numbers.splice(currentNumber, 1, "a");
  }
  var primeNumber = 7;
  for (currentNumber = primeNumber + 6; currentNumber < 100; currentNumber += primeNumber) {
    numbers.splice(currentNumber, 1, "a");
  }
  var primeNumber = 11;
  for (currentNumber = primeNumber + 10; currentNumber < 100; currentNumber += primeNumber) {
    numbers.splice(currentNumber, 1, "a");
  }
  var primeNumber = 13;
  for (currentNumber = primeNumber + 12; currentNumber < 100; currentNumber += primeNumber) {
    numbers.splice(currentNumber, 1, "a");
  }
console.log(numbers);

  for (index = 0; index < numbers.length; index += 1) {
      if (numbers[index] != "a") {
        $(".output").append("<li>" + numbers[index] + "</li>");
      }
  }





}); //dont touch

//Front End code
