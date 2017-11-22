// Node 向外暴露成员的模式
// module.exports = {}

// ES6 定义了如何导入和导出模块
// 导入模块： import 模块名称 from '模块标识符'  import '路径'
// 导出模块：export default 和 export

var info = {
    name: '一杆梅子酒',
    age: 18
}

export default info;

// 注意： export default 向外暴露的成员，可以使用任意的变量来接收
// 注意： 在一个模块中，export default 只允许向外暴露1次
// 注意： 在一个模块中，可以同时使用 export default 和 export 向外暴露成员

export var one = 'long'

// 注意： 使用 export 向外暴露的成员，只能使用 { } 的形式来接收，这种形式，叫做 【按需导出】
// 注意： export 可以向外暴露多个成员，同时，如果某些成员，我们在 import 的时候，不需要，则可以不在 {}  中定义
// 注意： 使用 export 导出的成员，必须严格按照 导出时候的名称，来使用  {}  按需接收；
// 注意： 使用 export 导出的成员，如果就想换个名称来接收，可以使用 as 来起别名；

export var two = '雪中悍刀行'
