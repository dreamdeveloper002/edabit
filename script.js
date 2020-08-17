
// Create a function that takes two numbers as arguments (num, length) and 
// returns an array of multiples of num up to length.


function arrayOfMultiples (num, length) {
    var result = []
    for (let i = 1; i <= length; i++) {
        console.log(length, 'length')
        console.log(i, 'i')
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