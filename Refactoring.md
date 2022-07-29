# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

<img width="1630" alt="image" src="https://user-images.githubusercontent.com/35441828/181826334-061ac7d9-ee23-44e4-96d7-3532a570dd40.png">

- Added some unit test with view scenario
- Its a bit hard to do refactoring to make it more clean and readable because exising code is already simple enough
- Delete the last checking `(candidate.length > MAX_PARTITION_KEY_LENGTH)` because after few testing, that condition never happen
