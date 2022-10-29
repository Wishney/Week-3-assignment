//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.//
var ages = [3, 9, 23, 64, 2, 8, 28, 93];



//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//•	Do not use numbers to reference the last element, find it programmatically, 
//•	ages[7] – ages[0] is not allowed!
console.log(ages.length);
console.log(ages[ages.length - 1])


//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//c.	Use a loop to iterate through the array and calculate the average age. 
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(42)
console.log(ages);
for(var average of ages){

}

 console.log(sum / ages.length)

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let letters = 0;
for(let i=0; i<names.length; i++){
    letters+= names[i].length;
}
console.log(letters);
console.log(letters/names.length);
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let space = "";
for(let i=0; i<names.length; i++){
    space+= names[i] + " ";
}
console.log (space)
console.log(names.join(" "))
//.	How do you access the last element of any array?

arry[arry.length - 1];

//4.	How do you access the first element of any array?
array[0]
i= 0

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
var nameLengths = []
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array


//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
var singleVal = 0;
for (let j = 0; j <nameLengths.length; j++) {
    var singleVal = singleVal += nameLengths[j]
}
console.log(singleVal);
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function repeatWord(word, num){
    let finalWord = '';
    for(let i = 0; i < num; i++){
        console.log(finalWord);
        finalWord = finalWord + word;
    }
    console.log(finalWord);
}

repeatWord("Hello", 3);

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.
function fullName(firstName,lastName) {
    return (firstName + " " + lastName);
    
 }
console.log(fullName("Whit", "Owen")); 
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let arrayNum = [5, 10, 15, 20]
function totalNum(arrayNum) {
    let sum = 0;
    for (let index = 0; index < arrayNum.length; index++){
        sum += arrayNum[index];
    }
    if (sum > 100) {
        return true
    }
    if (sum <= 100) {
        return false
    }
}
console.log(totalNum(arrayNum))
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
find average (array1)
find average (array2)
//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function average(array1, array2){

}
//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    console.log (isHotOutside && moneyInPocket > 10.50);
}
willBuyDrink(true, 20);
//13.	Create a function of your own that solves a problem. 
//•	In comments, write what the function does and why you created it.
let billArr = [125, 88, 79, 145]; // total of bill



let sum2 = 0;

for (let index = 0; index < billArr.length; index++) {
    console.log(billArr[index])
    console.log(billArr[index] * .20) //add 20 percent to each number in array

    sum2 = sum2 + billArr[index]
}
console.log(sum2) // shows grand total of all bills together
console.log(sum2 / billArr.length) //shows tip amount for grand total

//This function will allow you to calculate the appropriate 20 percent tip at a restaurant. It is useful for a group. It will show what each individual person should tip if paying seperatly, and will add the grand total if one person is paying the bill for the group.