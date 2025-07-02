
const onMouseHover = ()=> {
    console.log("mouse hovered")
}

let canvasElement = document.body.querySelector('canvas')
console.log(canvasElement)
canvasElement.setAttribute('width',500)
canvasElement.setAttribute('height',500)
let canvasContext = canvasElement.getContext("2d")
canvasContext.lineWidth = 5
canvasContext.strokeStyle = 'red'
canvasContext.strokeRect(100,100,100,100)
canvasElement.style.border = "2px solid "

canvasElement.onmouseover = onMouseHover


console.log(window.scrollY)

console.log("scrollHeight of canvas:",document.documentElement.scrollHeight)

let pointElement  = document.getElementById('point')

console.log("cordinates of point element:",pointElement.getClientRects())

console.log("clientHeight of point : ",pointElement.clientHeight)

console.log("offset heigh of point : ",pointElement.offsetHeight)

//finding the cordinates of mouse click wrt to the canvas

let canvasInfo = canvasElement.getBoundingClientRect()
console.log("inf: ",canvasInfo)
canvasElement.addEventListener('click',(e)=>{
    console.log("clicked at : ",e.clientX - canvasInfo.left,e.clientY - canvasInfo.top)

})

