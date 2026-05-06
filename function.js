// function Divider(input1, input2){
//     var division = input1 / input2;
//     console.log("The division is = " + division);
//     return division;
// }
// const result = Divider(50,5);
// console.log(result);


// // different parameteres of a function
// function doubleTriple(num, Double) {
// if(Double === true){
//     const result = num * 2;
//     return result;
// }
// else{
//     const result = num * 3;
//     return result;
// }

// }

// console.log(doubleTriple(5, true))
// console.log(doubleTriple(5, false))



// function sumOfNumbers (numbers){
//     let sum = 0;
//   for(const number of numbers){
//     console.log(number);
//     sum = sum + number;
//   }
//     return sum;
// }


// const numbs = [1,2,3,4]
// const sum = sumOfNumbers(numbs);
// console.log('sum of numbers is : ', sum);




// Take four parameters. Multiply the four numbers and then return the result

// function multiply(num1,num2,num3,num4) {
//     multiply = num1 * num2* num3 * num4;
//     console.log('the answer is :' , multiply);
//     return multiply;
// }
// multiply(2,6,8,9)

// console.log(multiply);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


// function multDiv (number){
//     if(number % 2 === 0){
//         const result = number * 2;
//         return result;
//     }
//     else{
//         const result = number / 2;
//         return result;
//     }
 
// }

// console.log(multDiv(100));
// console.log(multDiv(103));


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


// function make_avg(){
//     let sum = 0;
//     for (let i = 0; i < count; i++) {
//        sum += numbers[i];
        
//     }
//     return sum / count;
// }

// const numbers = [10,20,30,40,50];
// const count = numbers.length;

// const result = make_avg(numbers, count)
// console.log('the average is : ' , result);



// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 1’s are there in that string



// function count_zero (){
//     let count = 0;
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] === '1'){
//             count++
//         }
//     }
//     return count;
// }

// const numbers = "11111100000111111111100111111111111111111111111"
// const totalOnes = count_zero(numbers)

// console.log('the total ones are : ', totalOnes);



// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return 

// function odd_even(num) {
//     if(num % 2 === 0){
//         return "Even";
//     }
//     else{
//         return "odd";
//     }

// }

// console.log(odd_even(12));
// console.log(odd_even(13));
