const path = require('path');
const webpack = require('webpack');
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    // 大家已经学会了举一反4， 大家觉得，在配置文件中，需要手动指定 入口 和 出口
    entry: path.join(__dirname, './src/main.js'),  // 入口，表示，要使用 webpack 打包哪个文件
    // 输出文件相关的配置
    output: {
        path: path.join(__dirname, './dist'),  // 指定 打包好的文件，输出到哪个目录中去
        filename: 'build.js'  // 这是指定 输出的文件的名称
    },
    // 配置webpack的第二种方式
    devServer: {
        open: true,  // 自动打开浏览器
        port: 5555,  // 设置启动时候的运行端口
        contentBase: 'src',  // 指定托管的根目录
        hot: true  // 启用热更新
    },
    // 配置插件的节点
    plugins: [
        //new 一个热更新的 模块对象
        new webpack.HotModuleReplacementPlugin(),
        // 创建一个在内存中生成 HTML页面的插件
        new htmlWebpackPlugin({
            // 指定模板页面，将来根据指定的页面路径，去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面名称
            filename: 'index.html'
        })
    ],
    // 配置第三方加载器 loader
    module: {
        // 所有的第三方模块的匹配规则
        rules: [
            {
                // 配置处理 .css 文件的第三方 loader 模块
                test: /\.css$/,
                use: ['style-loader', 'css-loader']  
            },
            {
                // 配置处理 .less 文件的第三方 loader 模块
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']  
            },
            {
                // 配置处理 .scss 文件的第三方 loader 模块
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']  
            }
        ]
    }
}



/*     
    当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
        1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
        2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
        3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
        4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；
 */