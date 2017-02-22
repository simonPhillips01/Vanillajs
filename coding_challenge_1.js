var John_Height = 120;
var John_Age = 37;
var Tom_Height = 150;
var Tom_Age = 42;
var scoreJohn = John_Height + 5 * John_Age;
var scoreTom =  Tom_Height + 5 * Tom_Age;

console.log("John Scores " + scoreJohn);
console.log("Tom scores " + scoreTom);

if (scoreJohn > scoreTom) {
	console.log("John wins with " + scoreJohn);
} else if (scoreTom > scoreJohn) {
	console.log("Tom wins with " + scoreTom);	
} else if (scoreJohn === scoreTom) {
	console.log("It is a draw.");
}

var Pete_Height = 170;
var Pete_Age = 22;
var scorePete = Pete_Height + 5 * Pete_Age;

if (scoreJohn > scoreTom && scoreJohn > scorePete) {
	console.log("John wins.")
} else if (scoreTom > scoreJohn && scoreTom > scorePete) {
	console.log("Tom wins.")
} else if (scorePete > scoreJohn && scorePete > scoreTom) {
	console.log("Pete wins.")
} else {
	console.log("It\s a draw");
}

function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageTom = calculateAge(1969);
var agePete = calculateAge(1948);

function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');	
	} else {
		console.log(name + " has already retired.");
	}
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Tom', 1969);
yearsUntilRetirement('Pete', 1948);

//function statement 
function someFun(par) {}

//function expression
var someFun = function(par) {}

var names = ['John', 'Jane', 'Mark'];
var years = new Array (1990, 1969, 1948);
names[1] = "Ben";
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

if (john.indexOf('designer') === -1) {
	console.log('John is NOT a designer');
}

//v1.0
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function () {
		return 2016 - this.yearOfBirth;
	}
};

console.log(john.family[0]);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

//v2.0
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function () {
		this.age = 2016 - this.yearOfBirth;
	}
};

john.calculateAge();

for (var i = 0; i < 10; i++) {
	console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < 5; i++) {
	console.log(names[i]);
}

for (var i = 1; i<= 5; i++) {
	console.log(i);
}

//Challenge 2
var persons_years = [1986, 1990, 1995, 2000];
var ages = [];

for (var i = 0; i < persons_years.length; i++) {
	ages[i] = 2016 - persons_years[i];
}

for (i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is of full age.");
	} else {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is NOT of full age.");
	}
}

function printFullAge(persons_years) {
	var age = 2017 - persons_years;
	return age;
	for (var i = 0; i < 3; i++) {
		if (age < 18) {
			console.log("You are too young at " + age);
		} else {
			console.log("You are old enough at " + age);

		}
	}
}

function printFullAge(years) {
	var ages = [];
	var fullAges = [];

	for (var i = 0; i < years.length; i++) {
		ages[i] = 2016 - years[i];
	}

	for (i = 0; i < ages.length; i++) {
		if (ages[i] >= 18) {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is of full age.");
		fullAges.push(true);
	} else {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is NOT of full age.");
		fullAges.push(false);
		}
	}
	return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];	
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
