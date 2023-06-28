console.log("\n1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.\n")

let ages = [3, 9, 23, 64, 2, 8, 93]; // Created an array with the above values.

console.log ("Is ages an array? (T/F) " + Array.isArray(ages) + "\n") // Verified Array is Array.

console.log(`The following is the display an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.\n\n${ages}`)//Displays Array.



console.log("\n\n1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array. Vallue of the subtraction 93-3 is shown below.\n")

let newAge = ages[ages.length-1] - ages[0] // Created var newAge so that it can be added to the Array ages in step 1.b.
console.log(newAge) // Ensures the var newAge is = 93-3 = 90. Verified true.



console.log("\n\n1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).\n")

ages.push(newAge) // pushes newAge value to Array ages

// console.log(typeof ages.push) \\ curiosity 

console.log(`The following is the display an array called ages that has received the push from question 1a that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93, 90.
\n\nNotice that the new array includes the pushed value 90 at the end of the array. \n${ages}`)//Displays Array and used to verify if var new was pushed to array ages. Verified true.



console.log("\n\n1c. Use a loop to iterate through the array and calculate the average age.\n")

let sum = 0; // Created a variable to hold the summation of the numbers in the Array ages.

for (var number of ages) // Created for loop to interate through the array 

{
    sum += number; // Continued to add all of the numbers as it interated through the array.
}

let average = sum / ages.length // At this point the summation of the intergers within the array is complete. Therefore divide by the number of numbers within the array to determine average. 

let average4=average.toFixed(0)// question 1c was not 100% clear as to if this was required so I did both. Creates an average (rounded to the whole number) of the number of letters in each name in the names array

console.log(`The absolute average value of numbers in the array is equal to ${average}.`)// Displays the absoulte average on the console. Average was verified with a calculator.

console.log(`The average number of letters (rounded to a whole number) per name is equal to ${average4}.`)// displays average rounded off to a whole number



console.log("\n\n2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.\n")

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] // Created an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob.'

console.log ("Is names an array? (T/F) " + Array.isArray(names) + "\n") // Verified Array is Array.

console.log(`\n2a. Use a loop to iterate through the array and calculate the average number of letters per name.\n`)

let characterSum = 0 // presets a variable for use in the forEach loop

names.forEach(name =>// designed to cycle through all of the names in const names
    {
        {
            characterSum += name.length;// tales the sum of each name and adds it to the rolling sumation of characterSum
        }
    }
);
let average1=characterSum/names.length// creates an absolute average of the number of letters in each name in the names array

let average2=average1.toFixed(0)// question 2a was not 100% clear as to if this was required so I did both. Creates an average (rounded to the whole number) of the number of letters in each name in the names array

console.log(`The absolute average number of letters per name is equal to ${average1}`)// displays the absoulte average on the console

console.log(`The absolute average number of letters (rounded to a whole number) per name is equal to ${average2}`)// displays average rounded off to a whole number



console.log("\n3.How do you access the last element of any array? \n\nTo access the last element of an array by using [array.length -1]. This will call the last element because the first element position holder is 0 therefore in order to access the last one you must subtract one from the lenth of the array. \n")



console.log("\n4.How do you access the first element of any array?\n\nTo access the first element in an array must use the selctor of 0 within [] following the array name. If the array name was array it could be accessed with the following code in JavaScript array[0].\n")



console.log("\n5.Create a new array called nameLengths.")

let nameLengths=[] // Created a new array called nameLengths.

console.log ("Is nameLength an array? (T/F) " + Array.isArray(nameLengths) + "\n") // Verified Array is Array.

console.log("\n5. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.\n")

// const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] // Created an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob.'

let characterSum1 = 0 // Created new character sum so as not to interfere with the previous character sum.

names.forEach(name =>// Designed to cycle through all of the names in const names.
    {
        {
            nameLengths.push (characterSum1 += name.length);// Takes the sum of each name and adds it to the rolling sumation of characterSum1.
        }
    }
);

console.log(`The nameLengths array is displayed here after pushing the length of each name to the nameLengths array. \n\n${nameLengths}`)// Displays namelenth array after pushing th elenth of each name to the nameLenths array result to the console. 



console.log("\n6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.\n")

let sum1 = 0; // Created a variable to hold the summation of the numbers in the nameLength Array.

for (var number1 of nameLengths) // Created for loop to interate through the array 

{
    sum1 += number1; // Continued to add all of the numbers as it interated through the array.
    // console.log(sum1):Used to verify if code was producing intended actions.
}

console.log(`The summation of all elements within the nameLengths array is = ${sum1}`)// Displays sum1 on the console.



console.log("\n7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').\n")

function concatItself(word, n)// Creates a function with the parameters of word and n. 

{
    
        let wordNew = ""; // Creates a variable for the upcomming for loop.
    

    for (let i = 0; i <= n-1; i++) // Creates for loop to interate through statement until the adaquate result 

    {
        // console.log(i) // used to determine if the for loop was incrementing the appropriate number of times. 
        // // wordNew = word.concat(word)
       wordNew +=word
    }
    return wordNew // Retuns the concated word as result of the function concatItself
    
}

console.log(`Output of a function that takes two parameters word and n (Lloyd, 3) = ${concatItself("Lloyd", 3)}`) //Parses the arguements "Lloyd" and 3 into the function concatItself and dislays the returned result to the console. 




console.log("\n\n8.	Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.\n")

const fullname = (firstName, lastName) => `${firstName} ${lastName}\n` // Creates a function which is labeled as the variable fullname with paramerters and arguements of firstname and lastname.
console.log(fullname('Jimmy', 'Newtron')) //Parses the two strings Jimmy and Newtron into the function fullname and dislays the returned result to the console.



console.log("9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.\n") 

let arrayOfNumbers=[15, 25, 35, 85] // Declares an array of the four numbers: 15, 25, 35, 85.

function isSumOfArrayGreaterThan100(arrayOfNumbers) //Declares a function isSumOfArrayGreaterThan100 with a parameter array0fNumbers.
{
    let sum3 = 0; // Created a variable to hold the summation of the numbers in the Array ages.

for (var number of arrayOfNumbers) // Created for loop to interate through the array 

{
    sum3 += number; // Continued to add all of the numbers as it interated through the array.
}
if (sum3 > 100) // Evaluates a logic statement and determines if it is true or false.

{
    return true // Returns true if logic statment is true.
}

else

{
    return false // Returns false if logic statment is not true.
}

}
console.log(`(T/F) Is the summation of ${arrayOfNumbers} greater than 100? ${isSumOfArrayGreaterThan100(arrayOfNumbers)}\n`) //Parses the variables arrayOfNumbers into the function isSumOfArrayGreaterThan100 and dislays the returned result to the console. 



console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.\n")

let arrayOfNumbers1=[15, 25, 35, 85] // Creates an array with four number.

function averageOfArrayOfNumbers(arrayOfNumbers1) // Declares a function averageOfArrayOfNumbers with a parameter of arrayOfNumbers1.
{
    let sum4 = 0; // Created a variable to hold the summation of the numbers in the Array.

for (var number of arrayOfNumbers1) // Created for loop to interate through the array 

{
    sum4 += number; // Continued to add all of the numbers as it interated through the array.
    var averageOfArray1 = sum4 / arrayOfNumbers1.length // Creates a variable that calculates the average of all of the elements in an array.
}

return averageOfArray1 // returns averageOfArray1

}

console.log(`Average of all numbers in array averageOfArrayofNumbers = ${averageOfArrayOfNumbers(arrayOfNumbers1)}`) //Parses the variables arrayOfNumbers1 into the function averageArrayOfNumbers and dislays the returned result to the console. 



console.log("\n11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.\n")

let arrayOfNumbers2=[15, 45, 35, 100] // Creates an array with four numbers.

function whichAverageArrayOfNumbersIsGreater(arrayOfNumbers1, arrayOfNumbers2) // Declares a function with parameters of arrayOfNumbers1 and, arrayOfNumbers2.

{

    let aveArrayOfNumbers1 = averageOfArrayOfNumbers(arrayOfNumbers1) // Sets a variable equal to the result of a function
    let aveArrayOfNumbers2 = averageOfArrayOfNumbers(arrayOfNumbers2) // Sets a variable equal to the result of a function


    if (aveArrayOfNumbers1 > aveArrayOfNumbers2) // Evaluates a logic statement and determines if it is true or false.
    {
        return '(T/F) Is the average of Array 1 greater than Array 2? ' + true + '\n' // Returns the result of the function if the previous if statement is determined to be true.
    }   
    else
    {
        return '(T/F) Is the average of Array 1 greater than Array 2? ' + false + '\n' // Returns the result of the function if the previous if statement is determined not to be true.
    }

   
}

console.log(whichAverageArrayOfNumbersIsGreater(arrayOfNumbers1, arrayOfNumbers2) + '\n') // Parses the variables arrayOfNumbers1 and arrayOfNumbers2 into the function whichAverageArrayOfNumbersI and dislays the returned result to the console.



console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.\n")

let isHotOutside = true // Sets variable isHotOutside = true
let moneyInPocket = 9.00 // Sets varuabke moneyInPocket = 9.00

function willBuyDrink (isHotOutside, moneyInPocket) // Declares a function with parameters of isHotOutside, and moneyInPocket.

{
    if (isHotOutside && moneyInPocket > 10.50) // Evaluates a logic statement and determines if it is true or false.

    {
        return 'You can buy a ice cream shake.'  // Returns the result of the function if the previous if statement is determined to be true.
    }
    
    else

{
    return `You don't have enough money or its too cold for an ice cream shake.` // Returns the result of the function if the previous if statement fails to be true.

}
}
console.log(willBuyDrink(isHotOutside, moneyInPocket) + '\n') // Parses the variables isHotOutside, and moneyInPocket into the function willBuyDrink and dislays the returned result to the console.

console.log("13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.\n\n")

console.log("Problem: What is 350000 x 920000.  The function executes the multiplication. The reason for the problem is because it is required for this assignment and it helped to attemp to trobuleshoot errors in the previous question. Suprisingly enough I made the same mistake three times and was easy to see in this simple code.\n\n")

let a = 350000 // Declares a variable for the upcomming function.
let b = 920000 // Declares a variable for the upcomming function.

function multiplyTwoNumbers(a,b)
{
    return a * b // Returns the multiplication of a and b
}

console.log(`The result of the multiplation of ${a} and ${b} is equal to: ${multiplyTwoNumbers(a,b)} `) // Displays the result of the function in the console after parseing in both a and b and dislays the returned result to the console.



