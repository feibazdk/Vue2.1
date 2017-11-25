/* 

    1. promise 是一个构造函数，既然是构造函数，那么，我们就可以 new Promise() 得到一个 Promise 的实例

    2. 在 Promise 上，有两个函数，分别叫做 ：
    
        resolve(请求成功之后的回调函数)
        reject (请求失败之后的回调函数)

    3. 在 Promise 构造函数的 Perototype 属性上，有一个 .then() 方法，只要是 Promise 构造函数创建的实例，都可以访问到 .then() 方法

    4. Promise 表示一个异步操作，每当我们 new 一个 Promise 的实例，这个实例，就表示一个具体的异步操作

    5. 既然 Promise 创建的实例是一个异步操作，那么这个异步操作只有两个状态：

        5.1 状态1：异步执行成功了，需要在内部调用成功的回调函数 resolve 把结果返回给调用者
        5.2 状态2：异步执行失败了，需要在内部调用失败的回调函数 reject 把结果返回给调用者
        5.3 由于 Promise 的实例是一个异步操作，所以内部拿到操作的结果之后，是无法使用return把操作的结果返回给调用者；这时候，只能使用回调函数的形式，来把成功 或 失败的结果，返回给调用者

    6、在 new 出来的 Promise 实例上，调用 .then() 方法，【预先】 为这个 Promise 异步操作，指定成功(resolve) 回调函数

*/

// 注意： 这里 new 出来的 promise ，只是代表 【形式上】 的一个异步操作
// 所谓形式上的异步操作：就是说，我们只知道它是一个异步操作，但是做什么具体的异步事情，目前还不清楚

// var promise = new Promise()



// 这是一个具体的异步操作。 其中，使用 function 指定一个具体的异步操作
// var promise = new Promise(function(){
//     // 这个 function 内部写的就是具体的异步操作
// })

var fs = require('fs');

// 当 new 一个 Promise 实例的时候，会理解执行异步操作中的代码
// 也就是说，new 的时候，除了能够得到一个 promise 实例之外，还会立即调用我们为 promise 构造函数传递的那个function， 执行这个function 中的异步操作代码
/* var promise = new Promise(function (){
    fs.readFile('./files/3.txt', 'utf-8', (err, dataStr) => {
        if (err) {
            throw err
        }
        console.log(dataStr)
    })
}) */


// 第一步
function getFileBypath(fpath) {
    // 第三步
    var promise = new Promise(function (resolve, reject) {
        // 读取完开始执行 resolve, reject
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) {
                reject(err)
            }
            resolve(dataStr)
        })
    })

    // 第四步
    return promise
}

// 第二步
// 第五步 返回给 实例
var p = getFileBypath('./files/2.txt');
// 第六步
p.then(function (data) {
    console.log(data)
}, function(err){
    console.log(err.message)
})