var request = require('request');

var koa = require('koa');
var router = require('koa-router')();
var app = koa();

var nsqueue = require('nsqueue');

var nsq = require('nsq.js');


var reader = nsq.reader({
  nsqd: ['http://120.24.210.90:4151'],
  maxInFlight: 1,
  maxAttempts: 5,
  topic: 'events',
  channel: 'ingestion'
});

reader.on('error', function(err){
  console.log(err.stack);
});

reader.on('message', function(msg){
  var body = msg.body.toString();
  console.log('%s attempts=%s', body, msg.attempts);
  msg.requeue(2000);
});

reader.on('discard', function(msg){
  var body = msg.body.toString();
  console.log('giving up on %s', body);
  msg.finish();
});

// publish

var writer = nsq.writer(':4150');

writer.on('ready', function() {
  writer.publish('events', 'foo');
  writer.publish('events', 'bar');
  writer.publish('events', 'baz');
});

app.use(function *(){
	
  request.put({
 		url:'http://120.24.210.90:4151/put?topic=test', 
 		form: {topic:'ssss'}
 		}, function(err,httpResponse,body){ 
 			console.info(body);
  })
  this.body = 'aps';
});

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
//   this.body = 'Hello World';
// });
 
app.listen(3030);

console.log("3030")

