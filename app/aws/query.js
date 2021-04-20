import React from "react"; 
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

function dynamoDBQuery() {

  let queryValue;
  console.log("Querying Aquatech table");
  
  const params = {
      TableName : "Test-1",
      //ProjectionExpression: "idk, value",
      KeyConditionExpression: "#id = :id",

      AttributeDefinitions: [
        {
          AttributeName: "idk",
          AttributeType: "S"
        },
        {
          AttributeName: "value",
          AttributeType: "S"
        }
      ],
  };
  console.log(params);
  (async () => {
    try {
      const region1 = "us-east-2";
      const docClient = new DynamoDBClient({
        region: region1,
        credentials: fromCognitoIdentityPool({
          client: new CognitoIdentityClient({region: region1}),
          identityPoolId: "us-east-2:62409a70-c8fe-406e-b97b-6a5ec14ec9e3" // IDENTITY_POOL_ID
        })
         });
   
    } catch (err) {
      console.error(err);
    }

queryValue = 11
 
})();
return queryValue;
}

export default dynamoDBQuery;