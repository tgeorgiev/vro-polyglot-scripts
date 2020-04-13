import json

def handler(context, inputs):
    jsonOut=json.dumps(inputs, separators=(',', ':'))
    # Print out the whole inputs map
    print("Inputs were {0}".format(jsonOut))

    # Access and print specific inputs
    print("Inputs were {0} and {1}".format(inputs["myUrl"], inputs["myNum"]))

    # Uncomment one of the bellow output=... to test

    # Boolean output, make sure the action return type is boolean
    # output=True 

    # String output, make sure the action return type is string
    # output="String Output"

    # Numeric output, make sure the action return type is number
    # output=1234 

    # Map output, make sure the action return type is Properties of CompositeType
    # output = {"status": "done"}
   
    return output