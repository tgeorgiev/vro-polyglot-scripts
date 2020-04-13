function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async operation completed');
      resolve();
    }, 50);
  });
}

exports.handler = async (context, inputs) => {
  await someAsyncOperation();
  console.log('Returning result...');
  return 'myResult';
}