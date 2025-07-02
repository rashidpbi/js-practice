console.log("welcome")

let headingElement = document.createElement('h4')
headingElement.innerHTML = "Click me if you are struggling in life !"

document.body.append(headingElement)



let firstQueriedH4element = document.querySelector('h4')
console.log("firstQueriedH4element: ",firstQueriedH4element)




// let redClassElements = document.getElementsByClassName('red')

let firstRedClassElemeent = document.querySelector('.red')
console.log(firstRedClassElemeent)

let AllRedClassElements = document.querySelectorAll('.red')
console.log(AllRedClassElements)


console.log(headingElement.getBoundingClientRect())


let finalDivElement = document.createElement('div')

let elementForWaitMessage = document.createElement('p')
let waitMessageText = document.createTextNode('Take a deep breath and wait for the millenial advice !')
elementForWaitMessage.append(waitMessageText)
elementForWaitMessage.style.color = 'green'
let finalMessageText = document.createTextNode('"Just Exist Bro !"')


let finalHeadingElement = document.createElement('h2')
finalHeadingElement.append(finalMessageText)
finalHeadingElement.style.color = 'red'

let lineBreak = document.createElement('br')
let clonedLineBreak = lineBreak.cloneNode(false)





const simpleEventHandler = (e)=>{
    // console.log("hi")
    console.log("event object:",e)
    console.log('e.target (element that was clicked):',e.target)
    document.body.append(finalDivElement)
    
    let appearedWaitMessage = finalDivElement.appendChild(elementForWaitMessage)
    
    setTimeout(()=>{
            appearedWaitMessage.hidden = true
            finalDivElement.append(lineBreak)
            finalDivElement.append(clonedLineBreak)
            finalDivElement.append(finalHeadingElement)
            e.target.removeEventListener('click',simpleEventHandler)
            console.log('event listener removed')
    },3000)

}
console.log("heading element:",headingElement)
headingElement.addEventListener('click',simpleEventHandler)
// headingElement.onclick = simpleEventHandler


//onclick:
// dont use paranthesis while assigning event properties to elements . 
// dont use "el.onclick = sayThanks()" . here the return from  sayThanks ie undefined will be stored as property


let elementToShowonclick = document.createElement('div')
elementToShowonclick.innerHTML = "<p>i am a paragraph element. an onclick event handler added to me (change color) will be overwritten just by adding another onclick handle (italic). just click on me and you will see only 'italic' applied on me . this is solved by addEvenListener which can listen to multiple events on applying  multiple event handlers </p>"
document.body.append(elementToShowonclick)
const onClickToRedforElementToShowonclick = ()=>{
    console.log("to red")
    elementToShowonclick.style.color = 'red'
}    
const onClickToITalicforElementToShowonclick=()=>{
    console.log(' to italic')
    elementToShowonclick.style.fontStyle="italic"
}    
elementToShowonclick.onclick = onClickToRedforElementToShowonclick
elementToShowonclick.onclick= onClickToITalicforElementToShowonclick

// addEventListener:
//but at the same time, in the markup we should include paranthesis because when the browser reads the onclick attribute  it creates an hanlder function with body from the content of attribute . ie 
// button.onclick = function(){
//     sayThanks()
// }

let elementToShowAddEventListener = document.createElement('div')
elementToShowAddEventListener.innerHTML="<p >I can handle different event handlers at the same time because addEventListener is used . click me to apply both red and italic<p>"
document.body.append(elementToShowAddEventListener)



const onClickToRedforElementToShowAddEventListener = (e)=>{
    console.log("to red")
    elementToShowAddEventListener.style.color = 'red'
    e.target.removeEventListener('click',onClickToRedforElementToShowAddEventListener)
}    
const onClickToITalicforElementToShowAddEventListener=(e)=>{
    console.log(' to italic')
    elementToShowAddEventListener.style.fontStyle = "italic"
    e.target.removeEventListener('click',onClickToITalicforElementToShowAddEventListener)
}    

elementToShowAddEventListener.addEventListener('click',onClickToRedforElementToShowAddEventListener)
elementToShowAddEventListener.addEventListener('click',onClickToITalicforElementToShowAddEventListener)

//inorder for the event listener to be removed, it should be necessarily be called with the same function with which eventlistener was added



//above behaviour could also be achieved using 

// elementToShowAddEventListener.addEventListener('click',onClickToITalicforElementToShowAddEventListener,{once:true})



document.body.prepend(headingElement)

//testing:

console.log("tail",finalDivElement)




//but adding class names using attribute is to be avoided because each time overridding takes place instead of adding to the class list.
document.getElementById('publicity').setAttribute('class','blue')

//instead use "classList" property

let treasureElement  = document.getElementById('treasure')
let toggleTreasureElement = document.getElementById('toggleTreasure')

const toggleTreasureFn = (e)=>{
    treasureElement.classList.toggle('hidden')
}
toggleTreasureElement.addEventListener('click',toggleTreasureFn)
console.log("treasure hidden ?: ",treasureElement.classList.contains('hidden'))
console.log(treasureElement.classList)


let moneyDiv = document.getElementById('money')
// moneyDiv.style.fontStyle = 'bold'
// moneyDiv.style.fontStyle = 'italic'

console.log("money color:",moneyDiv.style.color) //empty

let moneyDivStyles  = getComputedStyle(moneyDiv)
console.log("money color:", moneyDivStyles.color)

console.log(moneyDiv.offsetWidth)




document.addEventListener('DOMContentLoaded',()=>{
    console.log("full html content loaded. Dom ready")
})

window.addEventListener('unload',(e)=>{
    e.preventDefault() //required for modern sites
    alert('you just left the previous page')
    console.log('user left the page')
})
window.addEventListener('beforeunload',(e)=>{
    
})

// methods list

// with "document."
// createElement()
// querySelector() 




// with "document.body"
// append()


// with "element."
// getBoundingClientRect()


//UNDERSTANDING EVENT PROPAGATION:

