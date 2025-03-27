// // import fs from 'fs';

// import { glob, globSync } from "fs";
// import { clearScreenDown } from "readline";

// const { writeFileSync,writeFile,readFile,readFileSync } = require('fs');

// console.log('Hello, world! 1');
// writeFileSync('file.txt', 'Hello, world!', 'utf-8');

// // const d = writeFile('file.txt', 'Hello, world! aysnc', 'utf-8', (err) => {
// //     if (err) {
// //         console.error('Error writing file:', err);
// //         return;
// //     }
// //     console.log('File has been written successfully');
// // });
// // try {

// //   const a =  readFileSync('file.txt', 'utf8', (err, data) => {
// //         if (err) {
// //             console.error('Error reading file:', err);
// //             return;
// //         }
// //         console.log('File content:', data);
// //     });

// //     console.log(a)
    
// // } catch (error) {
    
// //     console.log(error)
// // }


// // const b = readFile('file.txt', 'utf8', (err, data) => {
// //     if (err) {

// //         console.error('Error reading file:', err);
// //         return;
// //     }
// //     console.log("async data")
// //     console.log('File content:', data);
// // });

// // console.log('Hello, world! 2');

// // console.log(b)





// // process.nextTick(() => {
// //         console.log('nextTick');

// //         Promise.resolve().then(() => {
// //             console.log('Promise inside nextTick');
// //         });

// //        process.nextTick(() => {
// //             console.log('nextTick inside nextTick');
// //         });
// //     });
    
// //   Promise.resolve().then(() => {
// //       console.log('Promise');

// //       process.nextTick(() => {
// //           console.log('nextTick inside Promise');
// //       });

// //       Promise.resolve().then(() => {
// //           console.log('Promise inside Promise');
// //       });
// //   })



// const a = globalThis;
// const b = global;
// const c = this;

// console.log(a)
// console.log(b)
// console.log(c)

/// try the event look microtask queyr switching 


// index.js
// setTimeout(() => console.log("this is setTimeout 2"), 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
    //   console.log("this is process.nextTick 2");
    //   process.nextTick(() =>
        //     console.log("this is the inner next tick inside next tick")
    //   );
    // });
    // Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
    
    // Promise.resolve().then(() => {
        //   console.log("this is Promise.resolve 2");
        //   process.nextTick(() =>
            //     console.log("this is the inner next tick inside Promise then block")
        //   );
        // });


        Promise.resolve().then(()=>{
            process.nextTick(() => console.log("this is process.nextTick 1"));
            Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
            queueMicrotask(() => console.log("this is queueMicrotask 1"));
    
    
            process.nextTick(() => console.log("this is process.nextTick 2"));
            queueMicrotask(() => console.log("this is queueMicrotask 2"));
            Promise.resolve().then(() => console.log("this is Promise.resolve 2"));
    
            queueMicrotask(() => console.log("this is queueMicrotask 3"));
            process.nextTick(() => console.log("this is process.nextTick 3"));
            Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
    

        }

        )
    

    
   

        // queueMicrotask(() => console.log("this is queueMicrotask 1"));
        // process.nextTick(() => console.log("this is process.nextTick 3"));
        // setTimeout(() => console.log("this is setTimeout 1"), 0);
        // Promise.resolve().then(() => console.log("this is Promise.resolve 3"));








// try{
//     const a = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const b = await a.json()
//     console.log(b)
// }catch(error){
//     console.log(error.message);
// }



// Promise.resolve().then(() => console.log("promise fist"));
// process.nextTick(() =>{
//     console.log("himanshu")
//     Promise.resolve().then(() => console.log("promise"));
//     process.nextTick(() => console.log("tick"));
//     Promise.resolve().then(() => console.log("promise 2"));
    
//     process.nextTick(() => console.log("tick 1"));
//     });

//     process.nextTick(() => console.log("tick 2"));
//     Promise.resolve().then(() => console.log("promise 3"));

// process.nextTick(() => console.log("tick 3"));
// Promise.resolve().then(() => console.log("promise 4"));
// Promise.resolve().then(() => console.log("promise 5"));
// process.nextTick(() => console.log("tick 4"));



git 
//common js next tick first exicute

// es module ma promise will run firs




// Promise.resolve().then(() => {

//     process.nextTick(() => console.log("tick 1"));

//     setTimeout(() => {
//         Promise.resolve().then(() => {
//             process.nextTick(() => console.log("tick 2"));
//             Promise.resolve().then(() => {
//                 console.log("promise 2");
//             })
//            });    
//     }, 1000);
    



//     console.log("promise 1");
// });


// process.nextTick(() => console.log("tick 1"));

//     Promise.resolve().then(() => {
//         console.log("promise 1");
//     });


// process.nextTick(()=>{
//     process.nextTick(()=>console.log("tick"));
//     Promise.resolve().then(()=>console.log("promise"));
//     Promise.resolve().then(()=>{
//         process.nextTick(()=>console.log("tick 1"));
//         Promise.resolve().then(()=>console.log("promise 1"));
//     });
// })


// in common js there is no promise or asyc to covor the code , 
// but in case of module js it cover whole code with the promise or async 

// so in common js when we run the code nextTick will get more priority than promise ( here i am talking about top level code )
// but when we use es module promise will get more priority becasue the pointer  rest on the mircro task queue of promise 
// so if there is another promise inside the promise then it will run promise again before the top level nextTick , reason is pointer is still on the promise untile it dont get time to switch 
// so until all promise which can be instantly resolvable(exicutable) don't get resolved, pointer will not switch to the nextTick


Promise.resolve().then(()=>{
    process.nextTick(() => console.log("this is process.nextTick 1"));
    Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
    queueMicrotask(() => console.log("this is queueMicrotask 1"));
    process.nextTick(() => console.log("this is process.nextTick 2"));
    queueMicrotask(() => console.log("this is queueMicrotask 2"));
    Promise.resolve().then(() => console.log("this is Promise.resolve 2"));
    queueMicrotask(() => console.log("this is queueMicrotask 3"));
    process.nextTick(() => console.log("this is process.nextTick 3"));
    Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
})

// for queue microtask and promise the queue is same 