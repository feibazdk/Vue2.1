const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {

            if (err) return reject(err)
            resolve(dataStr)

        })
    })
}

// 先读取文件1，在读取2，最后读取3
// 注意： 通过 .then 指定 回调函数的时候，成功的 回调函数，必须传，但是，失败的回调，可以省略不传
// 这是一个 错误的示范，千万不要这么用；
/* getFileByPath('./files/1.txt')
    .then(function (data) {
        console.log(data)

        getFileByPath('./files/2.txt')
        .then(function (data) {
            console.log(data)

            getFileByPath('./files/3.txt')
            .then(function (data) {
                console.log(data)
            })
        })
  }) */


// 读取文件1
// 在上一个 .then 中，返回一个新的 promise 实例，可以继续用下一个 .then 来处理
getFileByPath('./files/1.txt')
    .then(function (data) {
        console.log(data)
        // 读取文件2
        return getFileByPath('./files/2.txt')
    })
    .then(function (data) {
        console.log(data)

        return getFileByPath('./files/3.txt')
    })
    .then(function (data) {
        console.log(data)
    })