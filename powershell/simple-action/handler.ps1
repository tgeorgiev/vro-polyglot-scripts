function Handler($context, $inputs) {
    $inputsString = $inputs | ConvertTo-Json -Compress
    # Print out the whole inputs map
    Write-Host "Inputs were $inputsString"

    # Access and print specific inputs
    Write-Host "Inputs were $inputs.myUrl and $inputs.myNum"
   
    # Uncomment one of the bellow $output=... to test

    # Boolean output, make sure the action return type is boolean
    # $output=$true 

    # String output, make sure the action return type is string
    # $output="String Output"

    # Numeric output, make sure the action return type is number
    # $output=1234 

    # Hashtable output, make sure the action return type is Properties of CompositeType
    # $output=@{status = 'done'}
   
    return $output
  }