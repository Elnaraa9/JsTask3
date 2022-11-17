let array = [2, 29, 345, 76, 4, 67,8];

// 1st Task

// let min = array[0];

// for (i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i];
//     }
// }
// console.log(min);

// 2nd Task

// let max = array[0];

// for (i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }
// }
// console.log(max);

// 3rd Task

// let min = array[0];

// for (i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i];
//     }
// }
// console.log(array.indexOf(min));

// 4th Task

// let max = array[0];

// for (i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }
// }
// console.log(array.indexOf(max));

// 5th Task

// let sum = 0;
// for (i = 1; i < array.length; i++) {
//     if (i % 2 != 0) {
//         sum += array[i];
//     }
// }
// console.log(sum);

// 6th Task

// function customReverse(originalArray) {

//     let leftIndex = 0;
//     let rightIndex = originalArray.length - 1;

//     while (leftIndex < rightIndex) {

//         let temp = originalArray[leftIndex];
//         originalArray[leftIndex] = originalArray[rightIndex];
//         originalArray[rightIndex] = temp;

//         leftIndex++;
//         rightIndex--;
//     }
// }
// customReverse(array);
// console.log(array);

//7th Task

// let count=0;

// for(i=0; i<array.length;i++){
//     if (array[i]%2!=0) {
//         count++;
//     }
// }
// console.log(count);

//8th Task

// let temp;
// let firstPart = 0;
// let secondPart = (array.length / 2).toFixed(0);

// while (secondPart<array.length) {
//     temp=array[firstPart];
//     array[firstPart]=array[secondPart];
//     array[secondPart]=temp;
//     firstPart++;
//     secondPart++;
// }
// console.log(array);

//9th Task

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let min=i;

//         for (let j =i+1; j < array.length; j++) {
//             if (array[j]<array[min]) {
//                 min=j;
//             }
           
//         }
//         if (min !== i) {
//             [array[i], array[min]] = [array[min], array[i]]
//         }
        
//     }
//     return array;
// }
// console.log(selectionSort(arr));

//10th task
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j]<array[j+1]) {
//                 let temp;
//                 temp=array[j];
//                 array[j]=array[j+1];
//                 array[j+1]=temp;
//             }
//         }
//     }
//     return array;
// }
// console.log(bubbleSort(arr));