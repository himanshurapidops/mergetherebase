const fs = require('fs');

// setTimeout(() => {
//     console.log('setTimeout 1');
//     setTimeout(() => {
//         console.log('setTimeout inside setTimeout 1');
//     },1)
//     setImmediate(() => console.log('setImmediate inside setTimeout'));
//     setTimeout(() => {
//         console.log('setTimeout inside setTimeout 2 ');
//     },1)
//     process.nextTick(() => console.log('nextTick inside setTimeout'));
//     Promise.resolve().then(() => console.log('promise inside setTimeout'));
//     fs.readFile(__filename, () => {
//         console.log('readFile inside setTimeout');
//         setImmediate(() => console.log('setImmediate inside readFile inside setTimeout'));
//         process.nextTick(() => console.log('nextTick inside readFile inside setTimeout'));
//     });
    
// }, 0);

// fs.readFile(__filename, () => {
//     console.log('readFile');
//     setImmediate(() => console.log('setImmediate inside readFile'));
//     setTimeout(() => {
//         console.log('setTimeout 2');
//     }, 0);
//     process.nextTick(() => console.log('nextTick inside readFile'));
// });

// Promise.resolve().then(() => {
//     console.log('Promise 1');
//     process.nextTick(() => console.log('nextTick inside Promise 1'));
//     console.log("this is the inner next tick inside Promise then block")
// }).then(() => {
//     console.log('Promise 2');
//     process.nextTick(() => console.log('nextTick inside Promise 2'));
// });

// process.nextTick(() => {
//     console.log('nextTick 1');
// });

// console.log('Sync Code');


fs.readFile(__filename, () => {
    console.log('readFile');
    setImmediate(() => console.log('setImmediate inside readFile'));
    setTimeout(() => {
        console.log('setTimeout 2');
    },50);
});

setTimeout(() => {

    console.log('setTimeout 1');
    
    setTimeout(() => {
        console.log('setTimeout inside setTimeout 1');
    },1)
    setImmediate(() => console.log('setImmediate inside setTimeout'));
    setTimeout(() => {
        console.log('setTimeout inside setTimeout 2 ');
    },1)
    
}, 9);

            