
## events



### important events

```javascript

click
submit
input/change
keyup/keydown
mouseover/mouseout


// when an event is triggered , handler receives an event object

el.addEventListener('click',(e)=>{
    console.log(e.type) //click
})


//removing of event listener


function sayThanks(){
    console.log("thank you!")
}

//onclick:
// dont use paranthesis while assigning event properties to elements . 
// dont use "el.onclick = sayThanks()" . here the return from  sayThanks ie undefined will be stored as property

//but at the same time, in the markup we should include paranthesis because when the browser reads the onclick attribute  it creates an hanlder function with body from the content of attribute . ie 
// button.onclick = function(){
//     sayThanks()
// }

// dont add event handlers as attributes because attribute values are always string values and function will be stored as a string.therefore below code produces error
// document.body.setAttribute('onclick',function(){alert(1)})


// event listeners are heavy since it takes a lot of memory. after triggered  , it has to be removed from the memory.

//inorder for the event listener to be removed, it should be necessarily be called with the same function with which eventlistener was added


// avoid inline event handling maximum . use event listeners instead.avoid below :
// <button onclick="alert('clicked')">Click</button>\


// CAPTURE,BUBBLING,PROPAGATION:

// event trickles from parent to child elements - capture
// event trickles from child to parent elements - bubbling 

// can stop event from bubbling upwards using "event.stopPropogation()"
// can stop all listeners on the same element by using "event.stopImmediatePropogation()"

// capture -> target -> bubbling

// "change" event:
// for input element, change event is triggered when focus is losed by clicking outside or other way
// for select checkboxes or radio buttons, immediately after selection changes. 

// "input" event:
// triggered everytime the field's value is modified. 

//cut,paste event:
// accessed  using e.clipBoardData 


//RELATED TO DOM CONTENT

// 'DomContentLoaded' triggered when html content is fully parsed and loaded before images,styles, etc

// 'load' when everying inlcuding styles(css), images, fonts etc are loaded 

// 'unload' runs afer user leaves the page . 

// 'beforeunload' runs before user leaves the page. (preventDefault is required in modern browsers )


// preventDefault and alert  has no effect in unload. 

//#event delegation:
// since event bubbles up all the way up through parents, it can be listened by adding an event handler on parent instead of attaching on all 
// individual child elements. this is called event delegation . 

// e.target is the actual element clicked . u can get tagName, classList, dataset etc from it

//#default browser action 

//using event.preventDefault() or using "return false" inside a tag for on<event> events

//not all events are cancelable. eg: 
//              if(e.cancelable) e.preventDefault() 

```
