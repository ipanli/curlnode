var request = require('request');

var koa = require('koa');
var router = require('koa-router')();
var app = koa();

var nsq = require('nsqjs');


// var reader = new nsq.Reader('topic', 'test', {
//   lookupdHTTPAddresses: '120.24.210.90:4150'
// });



request({
    method: 'post',
    preambleCRLF: true,
    postambleCRLF: true,
    uri: 'http://120.24.210.90:4151/put?topic=test',
    multipart: [
      {       
        body: 'I am nodejs request messages'
      }      
    ]
  },
  function (error, response, body) {
    if (error) {
      return console.error('upload failed:', error);
    }
    console.log('Upload successful!  Server responded with:', body);
})




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

