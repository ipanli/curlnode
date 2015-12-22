var request = require('request');

var koa = require('koa');
var router = require('koa-router')();
var app = koa();

var nsq = require('nsqjs');


// var reader = new nsq.Reader('topic', 'test', {
//   lookupdHTTPAddresses: '120.24.210.90:4150'
// });



var reader = new nsq.Reader('topic', 'test', {
  lookupdHTTPAddresses: '120.24.210.90:4161'
});

reader.connect();

reader.on('message', function (msg) {
  console.log('Received message [%s]: %s', msg.id, msg.body.toString());
  msg.finish();
});


request.post({
		url:'http://120.24.210.90:4151/put?topic=test', 
		form: {topic:'test'}
		}, function(err,httpResponse,body){ 
			console.info(body);
})


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

