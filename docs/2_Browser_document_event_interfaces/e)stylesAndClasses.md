## Styles and classes

```javascript

// use camelcase for adding css styles. eg: font-style -> fontStyle

element.style.fontStyle = 'red'

//but adding class names using attribute is to be avoided because each time overridding takes place instead of adding to the class list.
// element.getElementById('id').setAttribute('class','blue')

//instead use "classList" property

//methods:
elem.classList.add('classname')
// similarly
// add()
// remove()
// toggle() //for toggling between adding and removing class
// contains() //check if a class name exists in class list


// if we need to log the style applied to an element , using 'style.styleName' wont be an actual resolve it only logs styles that are added using styles property mutation. for eg: elem.style.fontStyle // empty if fontstyle was added using an external css file . 
// use getComputedStyle() method to get the actual css values that are applied to the document

const styles = getComputedStyle(elem)
styles.fontStyle //see the actual applied style




```