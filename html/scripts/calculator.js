//alert ('Hey Bro');
//link you want to cancel with javascript put a pound in there

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("click", function() {
  console.log("hi");
});

//numOne.addEventListener("mouseenter", function() {
//  console.log("hi");
//  alert("hi");
//});

//numOne.addEventListener("mouseleave", function() {
//  console.log("hi");
//  alert("hi");
//});

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

//function add() {
//  var one = numOne.value;
//  var two = numTwo.value;
//  console.log(one, two);
//  addSum.innerHTML = one + two;
//};


function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  console.log(one, two);
  var sum = one+two;
  addSum.innerHTML = "your sum is: " +(one+two);
};
