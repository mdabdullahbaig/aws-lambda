
# AWS LAMBDA POC

This is the small POC project using Node.js and AWS Lambda


## Install

To install all packages in this project run

```bash
  npm install
```


## Documentation

Request Query Parameter

{
    "fullName": "Rahul Kumar",
    "age": 26
}

Response

{   
   
    "statusCode": 200,
    "headers": { 
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Credentials":true,
        "Access-Control-Allow-Methods":"GET",
        "Access-Control-Allow-Headers":"Content-Type, Authorization"
    },
    "body": "{\"data\":{\"full_name\":\"Rahul Kumar\",\"age\":26,\"id\":\"983be7f6-5ac7-4770-a23f-1bdd95068e60\",\"creator_name\":\"Abdul\"},\"message\":\"success\"}"

}



