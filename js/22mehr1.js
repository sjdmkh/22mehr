// function writeMessage0 (message) {
// //     console.log('logging the message by declaration')
// //     console.log('message: %s', message)
// // }
// //
// const writeMessage1 = function (message){
//     console.log('logging the message by expression')
//     console.log('message: %s', message)
// // }
// //
// // function log (message){
// //     console.log('logging the message by expression')
// //     console.log('message: %s', message)
// // }
// // const writeMessage2 = log
// //
// // writeMessage0 ('hello')
// // writeMessage1 ('hello')
// // writeMessage2 ('hello')

// const numbers = [2, 2, 2, 4, 4, 5, 5, 5, 5, 7, 7, 8, 9, 9, 9, 9]
//
// const repeats = numbers.reduce((acc, item) => {
//     if (! (item in acc)) {
//         acc[item] = 0
//     }
//     acc[item]++
//     return acc
// }, {})
// console.log(repeats)

// let userInput = '';
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
//
// function getInput() {
//     readline.question(`Type your input: (enter 'exist' to finish): `, input => {
//         userInput = input;
//         console.log(`Your input: ${input}`)
//
//         if (userInput.toLowerCase() === 'exit') {
//             readline.close()
//         } else {
//             getInput()
//         }
//     })
// }
//
// // getInput()
//
// const printNumbers = (input) => {
//     if (!input && input !== 0) {
//         return ''
//     }
//     input = input.toString()
//     let arrInput = input.split('')
//
//     let result = ';';
//     arrInput.map(nm =>{
//         result += '${num}:'
//         for (let i = 0; i < num; i++){
//             result += num;
//         }
//         result += '\n'
//     })
// }
// 23456

//
// let x = [ 'a', 'b', 'c' ];
// let reversed = [ ...x ].reverse();
//
// console.log(reversed);
// console.log(x);

// function duplicated (str){
//     if ( let n == 0 || n == 1)
//         return n;
//     for (let i = 0; i < n-1; i++){
//         if (a[i] != a[i+1])
//             b[j++] = a[i];
//     }
//     for (int i=0; i<j; i++)
//     a[i] = b[i];
//
//     return j;
// }
//
// console.log(str)

// function duplicates(str){
//     for (let char of str){
//         console.log(str)
//     }
// }
// duplicates


















