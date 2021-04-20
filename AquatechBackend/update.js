var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "REMOVED FOR SECUITY REASONS", "secretAccessKey": "REMOVED FOR SECUITY REASONS"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {

    
    var params = {
        TableName: "Aquatech_test",
        Key: { "device_id": "example@gmail.com" },
        UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
        ExpressionAttributeValues: {
            ":byUser": "updateUser",
            ":boolValue": true
        },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("Aquatech UPDATE -- ERROR" + JSON.stringify(err, null, 2));
        } else {
            console.log("UPDATE -- SUCCESS "+JSON.stringify(data) );
        }
    });
}

modify();