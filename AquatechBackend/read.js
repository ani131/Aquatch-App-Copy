var AWS = require("aws-sdk");
let awsConfig = {
  "region": "us-east-2",
  "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
  "accessKeyId": "REMOVED FOR SECUITY REASONS", "secretAccessKey": "REMOVED FOR SECUITY REASONS"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "Aquatech_test",
        Key: {
            "device_id": "example@gmail.com"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("Aquatech READ -- ERROR" + JSON.stringify(err, null, 2));
        }
        else {
            console.log("READ -- SUCCESS" + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();

        