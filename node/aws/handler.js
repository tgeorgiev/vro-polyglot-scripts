var AWS = require('aws-sdk');
AWS.config.loadFromPath('./awsconfig.json');

exports.handler = (context, inputs, callback) => {
  var ec2 = new AWS.EC2();
  ec2.describeInstances(function(err, data) {
    if (err) {
        console.error(err, err.stack);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }

    callback(null, '');  
  });
};