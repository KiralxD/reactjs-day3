// callback

// setTimeout(() => {
    
// }, timeout);

// var arr = [1,2,5,7]

// arr.filter(function(){
    
// })
// arr.sort(function(){

// })

// bất đồng bộ

// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);
// console.log(3);

// promise

// var p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('đói vl');
//     }, 1000);
// })

// p
// .then(function(data){
//     console.log(data);
// })

// p
// .catch(function(err){
//     console.log('lỗi' , err);
// })


// ví dụ

// var fs = require('fs')

// var p = new Promise(function(resole, reject){
//     fs.readFile('./data.txt', function(err, data){
//         if(err){
//             reject('lỗi đọc file')
//         } else{
//             resole(data.toString())
//         }
//     })
// })

// p
// .then(function(data){
//     console.log('promise then', data);
// })
// .catch(function(err){
//     console.log('err', err)
// })