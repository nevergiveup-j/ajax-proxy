'use strict';

var http = require('http');

http.createServer(function(req, res){


    console.log('11');
    res.end('Hello');
}).listen(1129);



var Proxy = {
    init: function(){
        return 'init...'
    },
    upload: function() {
        return 'upload';
    }
}






module.exports = Proxy;