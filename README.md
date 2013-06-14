### a node.js module to connect aliyun oss

1.用例

var ossApi = require('./oss_client');
var option = {
    accessId: 'your access id'
   ,accessKey: 'your access key'
};

var oss = new ossApi.OssClient(option);

//create a bucket on oss
oss.createBucket('yourbucketname', 'private', function (err) {
    console.log(err);
});

//get bucket list and print the first bucket 
oss.listBucket(function (err, list) {
    console.log(list['Buckets']['Bucket'][0]); 
});

2.Node.js Api说明(详细oss api功能说明请见oss官方网站)

用户定义回调函数
err: 错误信息
result： api返回值（将oss返回的xml内容解析成为object类型）
callback(err, result)

列出所有bucket

listBucket(callback(err){})

创建bucket

bucket: bucket名
acl:bucket访问规则
createBucket(bucket, acl, callback(err){})

删除bucket

bucket: bucket名
deleteBucket(bucket, callback(err){})

获取bucket访问规则

bucket: bucket名
getBucketAcl(bucket, callback(err, result){})

设置bucket访问规则

bucket: bucket名
acl: bucket访问规则
setBucketAcl（bucket, acl, callback(err){})

创建object

bucket: bucket名
object: object名
srcFile: 上传的文件路径
userMetas: 可选，object类型，用户自定义header，如x-oss-meta-location
putObject(bucket, object, srcFile, /* userMetas, */ callback(err) {})

复制object

bucket: bucket名
dstObject: 目标object名
srcObject: 源object名
copyObject(bucket, dstObject, srcObject, callback(err) {})

删除object

bucket: bucket名
object: object名
deleteObject(bucket, object, callback(err) {})

获取object
bucket: bucket名
object: object名
dstFile: 保存object的文件路径
userHeaders: 可选，object类型，用户自定义header，如If-Unmodified-Since
getObject(bucket, object, dstFile, /* userHeaders , */ callback(err) {})

获取object头信息

bucket: bucket名
object: object名
headObject(bucket, object, callback(err, result) {})

获取object列表
bucket: bucket名
prefix: 可选，object 前缀
marker: 可选，列表起始object
delimiter: 可选，object分组字符，若'/'为则不列出路径深度大于等于二层的object。
maxKeys: 可选， 列出的object最大个数
listObject(bucket /*, prefix, marker, delimiter, maxKeys */, callback(err, result) {})

创建object group
bucket: bucket名
objectGroup: objectGroup名
objectArray: array 类型， 组成object group的object列表
createObjectGroup(bucket, objectGroup, objectArray, callback(err) {})

获取object group
bucket: bucket名
objectGroup: objectGroup名
dstFile: 保存object group 的文件路径
getObjectGroup(bucket, objectGroup, dstFile, callback(err) {})

获取object group index
bucket: bucket名
objectGroup: objectGroup名
getObjectGroupIndex(bucket, objectGroup, callback(err, result) {})

获取object group 头信息
bucket: bucket名
objectGroup: objectGroup名
headObjectGroup(bucket, objectGroup, callback(err, result) {})

删除object group
bucket: bucket名
objectGroup: objectGroup名
deleteObjectGroup(bucket, objectGroup, callback(err) {})

注：如果result信息结构嵌套过多，内层信息会只显示为object而不展开，可以用util.inspect(result, false, null)来展开显示。
