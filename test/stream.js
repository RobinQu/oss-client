/*global __filename */

var fs = require("fs");
var ossApi = require('../index');
// var domain = require("domain");
var option = {
  accessKeyId: 'N3bSlYPfijYmolFX',
  accessKeySecret: 'JS2RfbNhdpsKkEclGX8GktZOSfXIyc'
};
var bucket = 'elasticimage-dev';
var object = 'http%3A%2F%2Fwww.baidu.com%2Fimg%2Fbdlogo.gif';

var oss = new ossApi.OssClient(option);
// var d = domain.create();
var input = fs.createReadStream(__filename);

oss.putObject({
  bucket: bucket,
  object: object,
  srcFile: input,
  contentLength: fs.statSync(__filename).size
}, function(e, response) {
  console.log(e, response);
});