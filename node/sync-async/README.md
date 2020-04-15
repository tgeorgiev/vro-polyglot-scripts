# Sync-Async

As JavaScript is asynchronous by nature, these examples show how you can write your function and return an output using different flavours of sync and async handling

- [Purely synchronous](handler-sync.js) - This function does not make any asynchronous operations, so execution goes line by line, and at the last line we return a result

- [Asynchronous with callback](handler-async-callback.js) - This function makes use of the optional third argument - callback. You can do any sort of sync and async operations, and once you are done, you can notify by invoking the callback and providing a result, or any error (the first argument of the callback)

- [Asynchronous with await](handler-async-await.js) - This uses one of the newer features in ECMAScript async/await. Notice the **async** keyword after the function definition, this allows us within its body to call **await** and right after it return the result. The code looks as if it is synchronous, but it is not.