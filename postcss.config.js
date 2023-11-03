module.exports = {
    'plugins': {
        // to edit target browsers: use "browserslist" field in package.json
        'autoprefixer': {},
        'postcss-pxtorem': {
            rootValue: 20, // rem 相对于 px 转换的基准值
            propList: ['*'], // 需要转换的 CSS 属性，* 表示全部
            unitPrecision: 5, // 转换后的小数位数
            // exclude: (e) => { // 只对src/views/largeScreen文件进行px转rem，其他文件不转换
            //     if(/src(\\|\/)views(\\|\/)largeScreen/.test(e)) {
            //         return false
            //     } else {
            //         return true
            //     }
            // }
        }
    }
}
