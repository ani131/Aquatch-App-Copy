      
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "REMOVED FOR SECUITY REASONS", "secretAccessKey": "REMOVED FOR SECUITY REASONS"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "device_id": "ani@gmail.com", "created_on": new Date().toString()
    };
    var params = {
        TableName: "Aquatech_test",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("Aquatech WRITE -- ERROR" + JSON.stringify(err, null, 2));                      
        } else {
            console.log("WRITE -- SUCCESS" );                      
        }
    });
}

save();
        