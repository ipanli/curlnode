
var http = require('http');
var request = require('request');

var koa = require('koa');
var router = require('koa-router')();
var app = koa();

var fs = require('fs');
var path = require('path');

var nsq = require('nsqjs');


// var reader = new nsq.Reader('topic', 'test', {
//   lookupdHTTPAddresses: '120.24.210.90:4150'
// });


var spawn = require('child_process').spawn;





// request({
//     method: 'post',
//     preambleCRLF: true,
//     postambleCRLF: true,
//     uri: 'http://120.24.210.90:4151/put?topic=test',
//     multipart: [
//       {       
//         body: 'I am nodejs request messages'
//       }      
//     ]
//   },
//   function (error, response, body) {
//     if (error) {
//       return console.error('upload failed:', error);
//     }
//     console.log('Upload successful!  Server responded with:', body);
// })

fs.mkdir(__dirname + '/fsDir', function (err) {

          if(err)

              throw err;

          console.log('创建目录成功')

});

 var options={
    hostname:'120.24.210.90',
    port:4151,
    method:'POST',
    path:'/put?topic=test'
};

var creq=http.request(options,function(response){
	console.log('Upload successful!  Server responded with:',  __dirname);
});
creq.write('I am nodejs request messages');
creq.end();



// var postData = querystring.stringify({
//   'msg' : 'Hello World!'
// });

// var options = {
//   hostname: '120.24.210.90',
//   port: 4151,
//   path: '/put?topic=test',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': postData.length
//   }
// };

// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
//   res.on('end', function() {
//     console.log('No more data in response.')
//   })
// });

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// // write data to request body
// req.write(postData);
// req.end();


// var reader = new nsq.Reader('topic', 'test', {
//   lookupdHTTPAddresses: '120.24.210.90:4161'
// });

// reader.connect();

// reader.on('message', function (msg) {
//   console.log('Received message [%s]: %s', msg.id, msg.body.toString());
//   msg.finish();
// });



// app.use(function *(next){
// 	request.post({
// 		url:'http://120.24.210.90:4151/put?topic=test', 
// 		form: {key:'value'}
// 		}, function(err,httpResponse,body){ 
// 			console.info(body);
// 	})
// });
 
// response 
 
// app.use(function *(){
//   this.body = '/';
// });
 
// app.listen(3030);

// console.log("3030")




//创建多层文件夹 异步
function mkdirs(dirpath, mode, callback) {
    callback = callback ||
    function() {};

    fs.exists(dirpath,
    function(exitsmain) {
        if (!exitsmain) {
            //目录不存在
            var pathtmp;
            var pathlist = dirpath.split(path.sep);
            var pathlistlength = pathlist.length;
            var pathlistlengthseed = 0;

            mkdir_auto_next(mode, pathlist, pathlist.length,
            function(callresult) {
                if (callresult) {
                    callback(true);
                }
                else {
                    callback(false);
                }
            });

        }
        else {
            callback(true);
        }

    });
}