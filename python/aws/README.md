# List EC2 instances using the AWS SDK for Python

Sample showing how you can integrate vRO with AWS only with scripting using the SDK for Python

To fully prepare this function to be executed in vRO you need do the following:

1. Install boto3
boto3 is the AWS SDK for Python (https://aws.amazon.com/sdk-for-python/)

   ```shell
   mkdir lib
   pip install boto3 -t lib/
   ```

2. Update the "awsconfig" file with your IAM User credentials. 

   **Recommended**: Create an IAM user only for the purpose of this action only with the permissions that are needed - **EC2:DescribeInstances**

   ```
   [default]
   aws_access_key_id=
   aws_secret_access_key=
   region=
   ```


3. Zip the contents of the function
   ```
   zip -r --exclude=*.zip -X vro-python-aws.zip .
   ```

4. Upload the zip in vRO's Action editor, keeping the defaults and execute the action