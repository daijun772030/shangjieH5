var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var proxy = require('http-proxy-middleware');
var history = require('connect-history-api-fallback');
// var multer = require('multer'); // 这个最好不要作为全局中间件，应该是某一个特定的路由下的中间件
// var cookieParser = require('cookie-parser'); // 全局cookie设置
var proxyTable = {
    target: 'http://www.pigcome.com:8082/',
    pathRewrite: {
        '^/api': ''
    },
    changeOrigin: true,
    xfwd: true
};

var currentProxy = proxy(proxyTable);
var app = express();
// 全局cookie中间件
// app.use(cookieParser(config.cookieSign));

app.use(history());

// 设置静态文件路径
app.use(serveStatic(path.resolve('dist'), { 'index': ['index.html', 'index.htm'] }));

//body解析中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/api/**', currentProxy);

app.listen(8085, '0.0.0.0', function() {
    console.log('启动成功！');
});