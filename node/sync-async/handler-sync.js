function someSyncOperation() {
  console.log('Sync operation completed');
  return;
}

exports.handler = (context, inputs) => {
  someSyncOperation();
  console.log('Returning result...');
  return 'myResult'; 
}