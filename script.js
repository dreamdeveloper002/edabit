
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