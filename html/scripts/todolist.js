var checklist = document.getElementById("checklist"); //this grabs elements tagged with "checklist"
var items = checklist.querySelectorAll("li"); //this queries checklist for " "
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i <items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur",updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit"; //this is actually the element being passed
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length); //how many letters when i extract the value from input
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  //console.log(event); // which is the key a is the 97 key
  //console.log(event.which); // this finds what key from the keyboard
  //javascript key code
  if (event.which === 13) {
    updateItem.call(this);
  }
}

//console.log("we blurred", this.value); // value is extracted from this
