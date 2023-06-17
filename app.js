console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
console.log("Odd numbers, from 1-100");

for(let i = 1; i < 100; i++)
{
    if(i % 2 == 1){
        console.log(i);
    }
}

// // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
console.log("The dreaded FIZZBUZZ");
for(let i = 1; i < 101; i++){
    if((i % 3 == 0) && (i % 5 == 0))
    {
        console.log(`${i} iiiiissss......FIZZBUZZ!!!!!`);
    }
    else if(i % 3 == 0)
    {
        console.log(`${i} iiissssssss........FIZZ!!!!!!`);
    }
    else if(i % 5 == 0)
    {
        console.log(`${i} iiiiiiissssss..........BUZZ!!!!!!!!`);
    }
}
console.log("____________________________________________________________________________");

//Exercise #3

console.log("EXERCISE NUMBER 3!!!!!!");
console.log("And now....for my next trick, I will print out odd numbers from 1-100 using the WHILE loop!");
let num = 1; 
while (num < 100){
    if (num % 2 == 1){
        console.log(num);
    }
    num++;
}

console.log("____________________________________________________________________________");
console.log("And, for your (and my) entertainment, I will perform the same feat with the DO WHILE LOOP!!! (Audience gasps....:))");

let i = 1; 

do {
    if (i % 2 == 1)
    {
        console.log(i);
    }
    i++;
}
while (i < 100);

console.log("____________________________________________________________________________");
console.log("Just when you weren't expecting it.....you will be treated to the infamous FIZZBUZZ! Hold on to your hats,");
console.log("while this wiley while loop accomplishes what only a few can imagine!");

let x = 1; 
while (x <= 100) {
    if ((x % 3 == 0) && (x % 5 == 0)){
        console.log(`The number ${x} is the most spectacular FIZZBUZZ!!!!!!`);
    }
    else if (x % 3 == 0){
        console.log(`Just when you were least expecting it.....the number ${x} says ffffiiiiiizzzzZZZZZZZZ!!!!!`); 
    }
    else if (x % 5 == 0){
        console.log(`But wait....it can't be! Yes! The great number ${x} explodes with a BUUUUUUUZZZZ!!!!!`);
    }
    x++
}
console.log("____________________________________________________________________________");

console.log("And for the final task of exercise number 3.....I know that you will not believe this....but now I will accomplish.......");
console.log("the dastardly...the unbelievable FIZZBUZZ, with only the help of a DO WHILE loop!!!!");
console.log("Sorry....I think that I am getting loopy. :)");
console.log("");
let number = 1; 
do {
    if ((number % 3 == 0) && (number % 5 == 0)){
                console.log(`The number ${number} is the most spectacular FIZZBUZZ!!!!!!`);
            }
            if ( number % 3 == 0){
                console.log(`Just when you were least expecting it.....the number ${number} says ffffiiiiiizzzzZZZZZZZZ!!!!!`); 
            }
            if (number % 5 == 0){
                console.log(`But wait....it can't be! Yes! The great number ${number} explodes with a BUUUUUUUZZZZ!!!!!`);
            } 
            number++;
} while (number < 101);

console.log("____________________________________________________________________________");
console.log("");
console.log("");

//Exercise #4

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

console.log(`value is: ${value}`);
console.log(`n is: ${n}`);

let count;
for(count = 0; count <= n; count++){
    console.log(count);
    if(count == value){
        console.log(`Found value. The value is: ${value} `);
        break;
    } 
    }
    if(value != count){
        console.log(`Did not find the value, ${value}`);
    }
    console.log("____________________________________________________________________________");
console.log("");
console.log("");

//Exercise #5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

console.log(`This is just so that I know: fizzDivisor is: ${fizzDivisor}. buzzDivisor is: ${buzzDivisor}. start is : ${start}. end is : ${end}`);
for(let i = start; i <= end; i++){
        if((i % fizzDivisor == 0) && (i % buzzDivisor == 0))
        {
            console.log(`${i} FizzBuzz`);
        }
        else if(i % fizzDivisor == 0)
        {
            console.log(`${i} Fizz`);
        }
        else if(i % buzzDivisor == 0)
        {
            console.log(`${i} Buzz`);
        }
    }