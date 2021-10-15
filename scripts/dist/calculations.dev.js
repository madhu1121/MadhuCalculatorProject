"use strict";

var addition = function addition(total, num) {
  return total + num;
};

var substraction = function substraction(total, num) {
  return total - num;
};

var multiplication = function multiplication(total, num) {
  return total * num;
};

var division = function division(total, num) {
  return total / num;
};

var clearInput = function clearInput() {
  var element = document.getElementById('inputField');
  element.innerHTML = null;
};