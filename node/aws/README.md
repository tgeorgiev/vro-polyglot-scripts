# List EC2 instances using the AWS SDK for Node.js

Sample showing how you can integrate vRO with AWS only with scripting using the SDK for Node.js

To fully prepare this function to be executed in vRO you need do the following:

1. Install AWS SDK

   The AWS SDK for Node.js (https://aws.amazon.com/sdk-for-node-js)

   ```shell
   npm install aws
   ```

2. Update the "awsconfig.json" file with your IAM User credentials. 

   **Recommended**: Create an IAM user only for the purpose of this action only with the permissions that are needed - **EC2:DescribeInstances**

   ```
   { 
     "accessKeyId": "",
     "secretAccessKey": "",
     "region": "" 
   }
   ```


3. Zip the contents of the function
   ```
   zip -r --exclude=*.zip -X vro-node-aws.zip .
   ```

4. Upload the zip in vRO's Action editor, keeping the defaults and execute the action