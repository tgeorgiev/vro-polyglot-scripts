# 3rd party PowerShell Gallery modules

Sample showing how you can download a module from PSGallery and use it in your custom scripts

To fully prepare this function to be executed in vRO you need do the following:

1. Install Assert module
Assert is an assertion module for PowerShell (https://www.powershellgallery.com/packages/Assert/0.9.5)

   ```shell
   mkdir Modules
   pwsh -c "Save-Module -Name Assert -Path ./Modules/ -Repository PSGallery"
   ```

2. Zip the contents of the function
   ```
   zip -r --exclude=*.zip -X vro-powershell-3rdparty.zip .
   ```

3. Upload the zip in vRO's Action editor, keeping the defaults and execute the action

4. If you execute without providing a password input, the expected assertion error will be shown