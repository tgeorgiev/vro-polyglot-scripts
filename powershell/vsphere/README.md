# List vSphere machines using PowerCLI

Sample showing how you can integrate vRO with vSphere using PowerCLI

To fully prepare this function to be executed in vRO you need do the following:


1. As the script is contained in a signle file, you can choose to copy it or Zip it
   ```
   zip -r --exclude=*.zip -X vro-powershell-vsphere.zip .
   ```

2. In vRO's Action editor, either paste the contents that you copied or choose ZIP and upload it.

3. Add new action input called **password** of type **SecureString** and any other inputs that you may expect.

*Note:* Depending on the size of your inventory you may have to increase the Memory limits.
