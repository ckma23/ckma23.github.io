var name = "Steve"

if (name = "Curtis") {
  alert('You\'re Awesome');
} else if (name = "Steve") {
  alert('Booo');
} else if (name = "Jose"){
  alert('you\'re probably not as cool as Curtis')
} else {
  alert('Suck')
}

var name = prompt();
var age = prompt();

function go(name, age){
   alert(name);
   alert(age);
}

function add(first, second) {
  return first+second;
}

var sum = add(1,2);
alert(sum)


function go (name, age){
  if (age < 20) {
    return name+'!';
  } else {
    return name;
  }
}

alert( go ('Curtis', 15));

myList.forEach(function(value, index) {
  console.log(value, index);
})

myList.forEach(function(value, index) {
  alert('I have '+value+' in my shopping bag');
});

var times = 0;

while (times < 10) {
  console.log('tried it', times);
  times = times +1;

}
while (times < 10) {
  console.log('tried it', times);
  times = times ++;

}

while (times < 10) {
  console.log('tried it', times);
  times = times --;

}

do {
  console.log('tried it', times);
  times++;
} while (times < 10;)


for (var i=0;, i<10; i++) {
  console.log('i is', i);
}

function go () {
  alert('hi');
}
