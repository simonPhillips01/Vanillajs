///////////////////////////////////////
// Lecture: Hoisting

//functions
calculateAge(1965);
function calculateAge(year) {
  console.log(2016 - year);
}

//retirement
retirement(); <!-- error -->
var retirement = function(year) {
  console.log(65 - (2016 - year));
}
retirement();

//variables
console.log(age); <!-- undefined -->
var age = 23; <!-- global -->
console.log(age);

function foo() {
  var age = 65;
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}


///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
