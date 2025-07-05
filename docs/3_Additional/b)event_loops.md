## event loops

```javascript

// js is single threaded. 
// tasks execute one at a time. things like settimeout, fetch etc are added as queues to be handled later
// async operations are made possible using event loops

micro: promise.then() , async/await etc
macro: settimeout, setInterval etc

// micro has more priority


// As mentioned earlier, JavaScript being a single-threaded language, async operations are made possible using the Event Loop + Web APIs. When an async operation is initiated, it is offloaded to browser/node.js APIs (which run in separate threads). Once completed, the task is added to the callback queue, and the Event Loop moves it back to the main thread for execution when the call stack is empty.

// Render updates occur:
// After the call stack is empty (all synchronous JS finishes).
// After microtasks (e.g., Promise callbacks) but before macrotasks (e.g., setTimeout, fetch).

// looping using request animation frame vs settimeout:
// calling callbacks can be done using both. but requestAnimation frame being more closer to the side of rendering. but if
//  we use setTimeout(callback,0) , the no of calls would be higher. this is because after the execution of a task in a queue browser doesnt neccessarily update the dom . (dom updates are handled by the browser . if there is no dom changes between tasks , browser doesnt necessarily have to make a rerender. but there is a frequency set in browsers to when it should update which is also dependent on the screen used )

// JavaScript task queues execute one task at a time. The animation callback queue (e.g., requestAnimationFrame) processes all its callbacks in a single batch per frame. Microtasks, however, execute all tasks in their queue plus any newly added microtasks before yielding control back to the main thread. Thus, the main thread only regains control after the microtask queue is fully emptied.
```