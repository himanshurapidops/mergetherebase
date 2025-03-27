// const fs = require('fs');
// console.log('Start');
// setTimeout(() => {
//     console.log('setTimeout 1');}, 0);
// setImmediate(() => {
//     console.log('setImmediate 1');});
// Promise.resolve().then(() => {
//     console.log('Promise 1');
//     setTimeout(() => {
//         console.log('setTimeout inside Promise');
//     }, 0);
// });
// process.nextTick(() => {
//     console.log('nextTick 1');
// });
// fs.readFile(__filename, () => {
//     console.log('readFile callback');
//     setTimeout(() => {
//         console.log('setTimeout inside readFile');}, 0);
//     setImmediate(() => {
//         console.log('setImmediate inside readFile');});
//     process.nextTick(() => {
//         console.log('nextTick inside readFile'); });
//     Promise.resolve().then(() => {
//         console.log('Promise inside readFile');
//     });
// });
// console.log('End');
// setTimeout(() => {
//     console.log('setTimeout 2');}, 0);
// process.nextTick(() => {
//     console.log('nextTick 2')});
// Promise.resolve().then(() => {
//     console.log('Promise 2');});
// setImmediate(() => {

//     console.log('setImmediate 2');});





const fs = require('fs');

// fs.readFile(__filename, () => {
//     console.log('readFile callback');
    
//     setTimeout(() => console.log('setTimeout inside readFile'), 0);
    
//     setImmediate(() => console.log('setImmediate inside readFile'));
    
//     process.nextTick(() => console.log('nextTick inside readFile'));
    
//     Promise.resolve().then(() => console.log('Promise inside readFile'));
// }); ``

// setTimeout(() => {
//     console.log('setTimeout 1');
//     Promise.resolve().then(() => {
//         console.log('Promise inside setTimeout');
//     });
//     process.nextTick(() => {
//         console.log('nextTick inside setTimeout');
//     });
// }, 0);

// setImmediate(() => {
//     console.log('setImmediate 1');
// });



// process.nextTick(() => {
//     console.log('nextTick 1');
// });

// Promise.resolve().then(() => {
//     console.log('Promise 1');
//     process.nextTick(() => console.log('nextTick inside Promise 1'));
// }).then(() => {
//     console.log('Promise 2');
// });

// console.log('Sync Code');

setTimeout(() => {
    console.log('setTimeout 1');
    setTimeout(() => {
        console.log('setTimeout inside setTimeout 1');
    },0)
    setImmediate(() => {

        for (let i = 0; i < 10000000000; i++) {
        }
    });
    setTimeout(() => {
        console.log('setTimeout inside setTimeout 2 ');
    },0)
    process.nextTick(() => console.log('nextTick inside setTimeout'));
    Promise.resolve().then(() => console.log('promise inside setTimeout'));
}, 2000);

Promise.resolve().then(() => {
    console.log('Promise 1');
})
