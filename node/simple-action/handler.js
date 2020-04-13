exports.handler = (context, inputs, callback) => {
  // Print out the whole inputs map
  console.log('Inputs were ' + JSON.stringify(inputs));

  // Access and print specific inputs
  console.log(`Inputs were ${inputs.myUrl} and ${inputs.myNum}`);
  
  // Uncomment one of the bellow output=... to test

  // Boolean output, make sure the action return type is boolean
  // output = true;

  // String output, make sure the action return type is string
  // output = 'String Output';

  // Numeric output, make sure the action return type is number
  // output = 1234;

  // Hashtable output, make sure the action return type is Properties of CompositeType
  // output = { status: 'done' };
  
  return output;
}