// Найти макс. число из массива и вывести его в консоль.
const array =[-2,12,87654,5,98,-67,0];
console.log(array);

let max=array[0];
for (e of array) {
//     if(e>max) {
//         max=e;
// } но можно по-другому
max=max>e?max:e; // max=max пока он >е, иначе max присваиваем значение е
}
console.log("Maximum array element is "+max);
console.log("--------------------");

//Вывести в консоль таблицу умножения на пять.
const n=5;
console.log("Multiplication table by "+n+":");
let mult=5;
for (let i = 1; i < 11; i++) {
    mult = n*i;
    // console.log(n+" * "+i+" = "+mult); можно иначе, смотри 22 строку
    console.log(`${n}*${i}=${n*i}`);
}
console.log("--------------------");

//Вывести количество четных чисел в массиве.
let counter=0;
for (e of array) {
    if (e%2===0){
        counter++;
    }
}
console.log("Number of even array elements is "+counter);
console.log("--------------------");

//Перевернуть заданный массив и вывести его в консоль.
// const revArray=[];
// console.log(array);
// for (let i = array.length-1; i >=0; i--) {
//     revArray.push(array[i]);
// }
// console.log(revArray); +другой способ (правильный для данной задачи)
const arr=[1,2,3,4,5];
for (let i = 0; i <Math.floor(arr.length/2); i++) {//Math.floor- метод деления нацело
    let temp = arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr);

console.log("--------------------");
const message="word";
for(e of message){
    console.log(e);
}
let newMessage="";
for (let i = message.length-1; i >=0; i--) {
    newMessage +=message[i];// добавили в новую строку перевернутую строку
}
console.log(newMessage);


