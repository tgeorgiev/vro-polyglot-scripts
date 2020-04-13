function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async operation completed');
      resolve();
    }, 50);
  });
}

exports.handler = async (context, inputs, callback) => {
  someAsyncOperation().then(() => {
    console.log('Returning result...');
    callback(undefined, 'myResult');
  });
}