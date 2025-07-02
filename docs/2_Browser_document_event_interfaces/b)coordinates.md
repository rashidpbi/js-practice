### coordinates

```javascript

//common methods for element and window
//scroll()  to scroll to a particular coordinate
//scrollTo() (same as above)
//scrollBy() allows scrolling by a relative amount 

//window methods:

//window.innerWidth and window.innerHeight gives the size of the viewport 

//window.scrollX and window.scrollY gives the distance scrolled of the window

//window.scrollTo    to scroll to the specified point 


// elem.getBoundingClientRect()  returns an object specifying cordinates relative to the viewport . it changes when scroll since its  respective to the window  and not document

// offsetWidth and offsetHeight returns the size of an element including the padding and border


// clientWidth and clientHeight returns the size of an element excluding  the border and scrollbar


// scrollTop / scrollLeft
// they returns the part that are scrolled out. they are also changable.    

// scrollWidth and scrollHeight returns the total scrollable area of the element 

//scrollHeight gives the full height of the element including the scrolled out part


//getBoundingRect() gives the size and cordinates wrt viewport

// clientX,Y : poistion of mouse  relative to viewport
// pageX,Y   : relative to full page

//document methods:

// document.getElementFrom(x,y) returns the topmost element in the cordinate
```

