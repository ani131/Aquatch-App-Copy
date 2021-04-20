var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "REMOVED FOR SECUITY REASONS", "secretAccessKey": "REMOVED FOR SECUITY REASONS"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {

    var params = {
        TableName: "Aquatech_test",
        Key: {
            "device_id": "ani@gmail.com"
        }
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("Aquatech DELETE -- ERROR" + JSON.stringify(err, null, 2));
        } else {
            console.log("DELETE -- SUCCESS");
        }
    });
}

remove();

