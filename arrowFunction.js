// function doubbleIt(num) {
//     return num*2;     
// }
// const result =doubbleIt(3);
// console.log(result);

// const add = function(num1 ,num2) {
//     const addition = (num1 +num2)*3;
//     return addition
// }
// const sum =add(2,4);
//  console.log(sum);
//arrow functions..
//arrow function without paramitter..
const showFive = () => 5 
const result =showFive();
console.log(result)
// arrow function with paramitter..() is not compulsury when only 1 paramitter passes...
const doubbleIt = num => num*2;
const result2 = doubbleIt(500);
console.log(result2);
//to write a multi line function...{}  is compulsury...to give multiple Paramitter () is compulsury..return should write compulsury..
const bigfun = (num1,num2) =>{
    const sum =num1 + num2;
    const mins =num1 - Nnum2;
    const total = sum * mins;
    return total;
}
const result3 =bigfun(9,6);
console.log(result3)
