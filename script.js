
// Create a function that takes two numbers as arguments (num, length) and 
// returns an array of multiples of num up to length.


function arrayOfMultiples (num, length) {
    var result = []
    for (let i = 1; i <= length; i++) {
      
        result.push(num*i)
        
    }
    return result
}


arrayOfMultiples(5, 6);


// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

function animals(chickens, cows, pigs) {
	let totalLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
	return totalLegs;
}

animals(10,5,2);

// Write a function that converts an object into an array, where each element represents a key-value pair.

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

function toArray(obj){

    return Object.entries(obj)
}

toArray({ a: 1, b: 2 })




// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. 
// Otherwise, return "there is no 7 in the array".

const sevenBoom =(arr) =>{
	return arr.toString().includes(7) ? "Boom!":"there is no 7 in the array"
}

sevenBoom([1, 2, 3, 4, 5, 6, 7])



// Given two numbers, return true if the sum of both 
// numbers is less than 100. Otherwise return false.



function lessThan100(a, b) {
	const sum = a+b;
	if(sum >= 100){
		return false
	} else {
		return true
	}
}


console.log(lessThan100(22, 15));


//Write a function that returns the length of a string. Make your function recursive.

function length(str) {
	return str.length;
	length(str)
}

length('apple');


function getLength(arr) {
	let count = 0;
	arr.forEach(item => {
		   //console.log('1', item)
		if (Array.isArray(item)) {
			//console.log('item', count)
			//console.log('length', getLength(item))
			count += getLength(item);
			console.log('count1', count)
			//console.log('length', getLength(item))
		} else {
			count++;
			//console.log('count2', count)
		}
	});
	return count;
}


console.log('result', getLength([1, [2, 3]]));


//Write a function that converts an object into an array, where each element represents a key-value pair.

function toArray(obj) {
	return Object.entries(obj);
}



console.log(toArray({ a: 1, b: 2 }));


// Create a function that returns true if a string is empty and false otherwise.


function isEmpty(s) {
	
	if(s === ''){
		return true
	}else{
		return false
	}

}

console.log(isEmpty("")); 


//Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false

function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay) {
		 return true
	} else {
		return false
	}
}

console.log(profitableGamble(0.2, 50, 9));


//Create a function that concatenates n input arrays, where n is variable.
function concat(...args) {
	return [].concat(...args);
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));


//Create a function that takes an integer and return true if it's divisible by 100, otherwise return false
function divisible(num) {
	return (num % 100) === 0 ? true : false;
}

divisible(1)


//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise
function divisibleByFive(n) {
	return n%5 === 0 ? true : false;
}

divisibleByFive(5)


//Write a function that converts an object into an array of keys and values

function objectToArray(obj) {
	return Object.entries(obj);
}

objectToArray({
  D: 1,
  B: 2,
  C: 3
})

//Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise

function dividesEvenly(a, b) {
	return (a % b === 0)? true : false;
}

dividesEvenly(98, 7)


//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes;

function getVoteCount(votes) {
	const { upvotes, downvotes } = votes
	return  upvotes - downvotes
}


getVoteCount({ upvotes: 13, downvotes: 0 })

//Write a function to reverse an array.

function reverse(arr) {
	return arr.reverse();
}

reverse([1, 2, 3, 4])


//Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

function dashed(str) {
	let vow = 'aeiouAEIOU'
	let s=''
	for(let i=0;i<str.length;i++){
		if(vow.includes(str[i]))s+='-' + str[i] + '-'
		else s+=str[i]
	}
	return s
}


//const dashed = str =>	str.replace(/([aeiou])/gi, '-$1-')

dashed("Carpe Diem")


//Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
function areaShape(base,height,shape) {
	return (shape === 'triangle' ? 0.5 : 1) * base * height;
}

areaShape(2, 3, "triangle")


//Create a function that takes an array of numbers or letters and returns a string

function arrayToString(arr) {
	return arr.join('')
}

arrayToString([1, 2, 3, 4, 5, 6])


//Create a function that takes two dates and returns the number of days between the first and second date.

function getDays(date1, date2) {
	return new Date(date2 - date1).getDate() - 1
}

getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
);

//Create a function that takes an equation (e.g. "1+1"), and returns the answer.
function equation(s) {
	return eval(s);
}

equation("7*4-2")

//Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
  return arr[arr.length - 1]
}

getLastItem([1, 2, 3])


//Given a total due and an array representing the amount of change in your pocket, 
//determine whether or not you are able to pay for the item. 
//Change will always be represented in the following order: quarters, dimes, nickels, pennies.

//To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, 
//since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.




function changeEnough(change, amountDue) {
	let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
	return sum >= amountDue;
}


changeEnough([2, 100, 0, 0], 14.11);


//Create a function that evaluates an equation.


function eq(evaluate) {
	return eval(evaluate);
}


eq("6/(9-7)");


//A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: 
//sub-array of length 3, with the first and last digits being the same and the middle digit being different.


const countBoomerangs = arr => {
	let collection = 0;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] === arr[i+2]) && (arr[i] != arr[i+1])) {
			collection++;
		}
	}
	return collection;
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1])


//create a function that takes an array and returns the sum of all numbers in the array.

function numbersSum(arr) {
	let sum = 0;
	for( let i = 0; i < arr.length; i++ ) {
		if(typeof(arr[i]) !== "number") {
			continue;
		}
		sum += arr[i];
	}
	return sum;
}


numbersSum([1, 2, "13", "4", "645"])

//The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

const remainder = (x, y) => x % y

remainder(3, 4) 


//Create a function that sorts the array according to the "content of the elements"


function sortIt(arr) {
	return arr.sort((a, b) => a - b);
}

sortIt([4, 1, 3]);


//Create a function that takes the age and return the age in days.

const calcAge = age => age * 365;

calcAge(65);


//Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. 
//If the given string does not contain "a", "b", or "c", return null.

function removeABC(str) {
	const res = str.replace(/[abc]/g, '');
	return str === res ? null : res;
}


removeABC("This might be a bit hard");



//Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. 
//If there are no strings containing numbers, return an empty array.


function numInStr(arr) {
	return arr.filter(x=>/\d/.test(x));
}

numInStr(["1a", "a", "2b", "b"])


//Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays
function commonElements(arr1, arr2) {
	var output = [];
	for(var i = 0; i < arr1.length; i++){
		 if(arr2.indexOf(arr1[i]) > -1 && output.indexOf(arr1[i]) === -1) output.push(arr1[i]);
	}
	return output;
}


commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])


//Create a function that takes a variable number of arguments, each argument representing the number of items in a group, 
//and returns the number of permutations (combinations) of items that you could get by taking one item from each group.


function combinations(items) {
	return [...arguments].reduce((acc,item) => item===0 ? acc : acc*item)
}

combinations(3, 7, 4);

//Write a function that returns the minimum number of swaps to convert the first binary string into the second.


function minSwaps(s1, s2) {
	let count = 0;
	for(let i = 0; i < s1.length; i++){
		if(s1[i] !== s2[i]){
			count++;
		}
	}
	return count/2;
};

minSwaps("1100", "1001");


//Create a function which returns the number of true values there are in an array.


function countTrue(arr) {
	return arr.filter(x=>x==true).length
}


countTrue([true, false, false, true, false])

//Write a function redundant that takes in a string str and returns a function that returns str.


function redundant(str) {
	return () => str;
};

const f2 = redundant("pear")
f2();


//Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

function parseArray(arr) {
	return arr.map(String);
};

parseArray([1, 2, "a", "b"]);


//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function maxNum(n1,n2) {
	if (n2>n1){
	  return n2;
	}
  else{
	return n1;
  }
};

maxNum(1000, 400);


//Write a function that does the following for the given values: add, subtract, divide and multiply


function operation(a, b, op) {
	let c = parseInt(a)
	let d = parseInt(b)
	let e = op=="add"?c+d
	:op=="subtract"?c-d
	:op=="multiply"?c*d
	:c/d
	
	return e==Infinity?"undefined":e

}

operation("1",  "2",  "add" );


//Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

function addName (obj, name, value) {
	return {...obj, [name]: value}
};


addName({}, "Brutus", 300)


//Create a function that concatenates n input arrays, where n is variable.

function concat(...args) {
	return [].concat(...args)
}

concat([1, 2, 3], [4, 5], [6, 7]);

//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

const arrayOfMultiples = (num, length) => {
	return Array.from({length: length}, (_, i) => num * (i + 1));
}

arrayOfMultiples(7, 5);


// Create a function that takes two numbers as arguments (num, length) and 
// returns an array of multiples of num up to length.


function arrayOfMultiples (num, length) {
	var result = []
	for (let i = 1; i <= length; i++) {
		
			result.push(num*i)
			
	}
	return result
}


arrayOfMultiples(5, 6);



//create a function that takes an array and returns the sum of all numbers in the array.

function numbersSum(arr) {
	let sum = 0;
	for( let i = 0; i < arr.length; i++ ) {
		if(typeof(arr[i]) !== "number") {
			continue;
		}
		sum += arr[i];
	}
	return sum;
}