const fs = require('fs');
const path = require('path');

// 这是普通读取文件的方式
/* fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', (err, dataStr) => {
    if (err) {
        throw err
    }

    console.log(dataStr);
}) */


/* 初衷：给定文件路径，返回读取到的内容 */
function getFileByPath(fpath, callback) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) {
            throw err
        }

        callback(dataStr)
    })
}

// getFileByPath(path.join(__dirname, './files/2.txt'), (dataStr) => {
//     console.log(dataStr);
// })


// 需求： 先读取文件1，再读取文件2，最后再读取文件3
// 回调地狱
// 使用 ES6 中的 Promise，来解决 回调地狱的问题；
// 问： Promise 的本质是要干什么的：就是单纯的为了解决回调地狱问题；并不能帮我们减少代码量；
getFileByPath(path.join(__dirname, './files/1.txt'), function (data) {
    console.log(data)

    getFileByPath(path.join(__dirname, './files/2.txt'), function (data) {
        console.log(data)

        getFileByPath(path.join(__dirname, './files/3.txt'), function (data) {
            console.log(data)
        })
    })
})