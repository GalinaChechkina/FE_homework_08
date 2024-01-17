// Найти макс. число из массива и вывести его в консоль.
let array =[-2,12,87654,5,98,-67,0];
console.log(array);

let max=array[0];
for (let i = 0; i < array.length; i++) {
    if(array[i]>max) {
        max=array[i];
    }
}
console.log("Maximum array element is "+max);
console.log("--------------------");

//Вывести в консоль таблицу умножения на пять.
const n=5;
console.log("Multiplication table by "+n+":");
let mult=5;
for (let i = 1; i < 11; i++) {
    mult = n*i;
    console.log(n+" * "+i+" = "+mult);
}
console.log("--------------------");

//Вывести количество четных чисел в массиве.
let counter=0;
for (let i = 0; i < array.length; i++) {
    if (array[i]%2===0){
        counter++;
    }
}
console.log("Number of even array elements is "+counter);
console.log("--------------------");

//Перевернуть заданный массив и вывести его в консоль.
const revArray=[];
console.log(array);
for (let i = array.length-1; i >=0; i--) {
    revArray.push(array[i]);
}
console.log(revArray);
