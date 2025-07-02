### Document

```javascript


// Understanding environments:
//  js runs in different environments like browser, node etc. browser uses actual dom whereas nodejs uses a virtual dom which is like a simulation of actual dom. things like "document" is specific to browsers which cannot be used by nodejs. 

// frameworks like react utlizes both browser and nodejs environments. it uses node for running app in server where as browser for actual rendering. for this purpose,they use different tools like bundlers,babel etc. 
 

//  code written in react are transpiled to browser specific code using babel. bundlers like webpack are used to bundle js code . 


// Document Object Model (Dom ) is a structural representation of document where elements, attributes and texts are organized as nodes in a tree like hierarchy


// Browser loads webpage in such a way that it turns HTML into tree structure of nodes

// Dom nodes are objects in javascript . they are the instances of classes (like Element,Text,Comment ) that represents part of the html document
// some properties

// element.parentNode , childNode, previousSibling, nextSibling, 

// Each node has .nodeType property which is  a number

| nodeType | Meaning      |
| -------- | ------------ |
| 1        | Element node |
| 3        | Text node    |
| 8        | Comment node |


// nodeName is available on all nodes.

// tagName is only for element nodes.

// tagName property is the uppercase name of an element's tag

// children referes to only element nodes whereas childNodes refers to  all including space and comments 



//querying

// getElementsByClassName and getElementsByTagName contains live collection that gets updated by dom changes
// querySelectorAll contains a static list of nodes at the time of the call



//list of methods
getElementById()
getElementsByClassName()
querySelector() //though usually used with classnames,id etc to accessnodes, can be used with tagnames also


// Attributes and properties:

// <input type="checkbox" checked>

const elem = document.querySelector('input')
elem.getAttribute("type") //checkbox
elem.checked //true
elem.setAttribute('class', 'form')

// others:

elem.hasAttribute(name)
elem.removeAttribute(name)
elem.attributes // a live NamedNodeMap of all attributes

<input data-id="test"  />

//dont add event handlers as attributes because attribute values are always string values and function will be stored as a string






// creating and adding elements:
// append() is used to insert one or more nodes as the last child of a  parent element. but unlike appendChild() it wont return anything . it just modifies the dom.there fore you need to store a reference to the element before appending it.


//Checking and Finding nearby elements:


// methods list

// with "document."
// querySelector()  selects the first element that matches the query.query can include tagname, classname, id etc. 
//querySelectorAll() selects all the elements that matches the query
//getElementById



// with "document.body"


// with "document.body.element"

//elem.clonedNode(true)  creates a deepclone of elem with all attributes and sub elements. 
// elem.cloneNode(false) creates just a copy of the element without all attributes or sub elements


// MODIFYING DOCUMENT

parent.append(child);         // Add as last child
parent.prepend(child);        // Add as first child
sibling.before(newElem);      // Insert before
sibling.after(newElem);       // Insert after
element.remove();             // Remove element


//you cannot add an existing element once again to create a new one. if you try to , the new one actually replaces the old one. 


// elem.closest(css)  looks for the nearset ancestor that matches the css selector




``` 