console.log("\n1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.\n")

let ages = [3, 9, 23, 64, 2, 8, 93]; // Created an array with the above values.
console.log ("Is nameLength an array? (T/F) " + Array.isArray(ages) + "\n\n") // Verified Array is Array.
console.log(ages)//Displays Array.

console.log("\n1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array. Vallue of the subtraction 93-3 is shown below.\n")
let newAge = ages[ages.length-1] - ages[0] // Created var newAge so that it can be added to the Array ages in step 1.b.
console.log(newAge) // Ensures the var newAge is = 93-3 = 90. Verified true.

console.log("\n1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). The new age of 90 is show below with the rest of the array.\n")
ages.push(newAge) // pushes newAge value to Array ages
// console.log(typeof ages.push) \\ curiosity 
console.log(ages) // used to verify if var new was pushed to array ages. Verified true.

console.log("\n1c.	Use a loop to iterate through the array and calculate the average age.\n")

let sum = 0; // Created a variable to hold the summation of the numbers in the Array ages.

for (var number of ages) // Created for loop to interate through the array 

{
    sum += number; // Continued to add all of the numbers as it interated through the array.
}

average = sum / ages.length // At this point the summation of the intergers within the array is complete. Therefore divide by the number of numbers within the array to determine average. 

console.log(average); // Average determined to be 36.5 and verified with calcuator.

console.log("\n\n2.	Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.\n\n")

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] // Created an a rray called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob.'
// console.log (Array.isArray(names)) // // Verified Array is Array

// let characterSum = 0

// names.forEach(name =>
//     {
//         let characterSum = 0
//         for (let i=0; i < [names.length-1]; i++)
//         {
//             characterSum = i;
//         }
//     }
// );

// console.log(characterSum)

console.log("\n3. How do you access the last element of any array? \n\n To access the last element of an array by using [array.length -1]. This will call the last element because the first element position holder is 0 therefore in order to access the last one you must subtract one from the lenth of the array. \n")

console.log("\n4.	How do you access the first element of any array? \n\n To access the first element in an array must use the selctor of 0 within [] following the array name. If the array name was array it could be accessed with the following code in JavaScript array[0].\n")

console.log("\n5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.\n")

let nameLengths=[] // Create a new array called nameLengths.

console.log ("Is nameLength an array? (T/F) " + Array.isArray(nameLengths) + "\n") // Verified Array is Array.

console.log("\n6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.\n\n")

console.log("\n7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').\n")



// function concatItself (word, n)

// {
//     for (let i = 1; i = n-1; i++)
//     {
//         wordNew = word.concat(word)
//         return wordNew = wordNew.concat(word)
        
//     }
    
// }

// console.log(concatItself("Lloyd", 5))

let myArrowFunction = (a, b) => a * b;
console.log(myArrowFunction(4, 5));

// let word='Lloyd'


// wordNew = word.concat(word) // Result LloydLloyd

// wordNew = wordNew.concat(word) // Result LloydLloydLloyd

// wordNew = wordNew.concat(word) // Result Lloydx4

// wordNew = wordNew.concat(word) // Result Lloydx5

// wordNew = wordNew.concat(word) // Result Lloydx6



// console.log(wordNew)



console.log("8.	Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.\n\n")

console.log("9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.\n\n")

console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.\n\n")

console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.\n\n")

console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.\n\n")

console.log("13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.\n\n")

