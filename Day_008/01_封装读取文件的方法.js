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

getFileByPath(path.join(__dirname, './files/2.txt'), (dataStr) => {
    console.log(dataStr);
})