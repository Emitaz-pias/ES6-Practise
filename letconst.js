const nums = [12,35];
nums.shift(1);
console.log(nums);//the valu of const can be changed in some case...but it not the right way..

let sum = 0;
for (var i =0;i<10; i++){
    sum = sum + i;
}
console.log(i)//if we use let then the value of i will not be printed...beacuse let is lickproof