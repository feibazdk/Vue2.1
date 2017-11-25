/* Promise 捕获异常的两种方法 */
const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {

            if (err) return reject(err)
            resolve(dataStr)

        })
    })
}
// 第一种 

// 当我们有这样的需求： 哪怕前面的 Promise 执行失败了，
// 但是不要影响后续 promise 的正常执行，此时，我们可以单独为 每个 promise，通过 .then 指定一下失败的回调；


// 如果前面的 Promise 执行失败，想让后续的Promise 操作被终止，可以为每个 promise 指定 失败的回调
/* getFileByPath('./files/11.txt')
    .then(function (data) {
        console.log(data)

        // 读取文件2
        return getFileByPath('./files/2.txt')
    }, function (err) {
        console.log('这是失败的结果：' + err.message)
        // return 一个 新的 Promise
        return getFileByPath('./files/2.txt')
    })
    .then(function (data) {
        console.log(data)

        return getFileByPath('./files/3.txt')
    })
    .then(function (data) {
        console.log(data)
    }) */



// 有时候，我们有这样的需求，和上面的需求刚好相反：
// 如果 后续的Promise 执行，依赖于 前面 Promise 执行的结果，如果前面的失败了，
// 则后面的就没有继续执行下去的意义了，此时我们想要实现，一旦有报错，则立即终止所有 Promise的执行；

getFileByPath('./files/1.txt')
    .then(function (data) {
        console.log(data)

        // 读取文件2
        return getFileByPath('./files/22.txt')
    })
    .then(function (data) {
        console.log(data)

        return getFileByPath('./files/3.txt')
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) { // catch 的作用： 如果前面有任何的 Promise 执行失败，则立即终止所有 promise 的执行，并 马上进入 catch 去处理 Promise中 抛出的异常；
        console.log('这是自己的处理方式：' + err.message)
    })