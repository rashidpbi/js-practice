console.log("welcome to forms")

const onSubmit = (e)=>{
    e.preventDefault()
}

document.querySelector('form').onsubmit = onSubmit

console.log("search:",search)

//lets see how change,                                 events work


let inputElement = document.getElementById('search')

let radioFirstElement  = document.getElementById('kochi')
//logged when focus is losed. 
inputElement.addEventListener('change',()=>{
    console.log("change event listener triggered when focus is losed. ")
    console.log("value when focus is losed (change event) :", search.value)
})

radioFirstElement.addEventListener('change',()=>{
    console.log("change event in radio button due to selection change")
})


inputElement.addEventListener('input',(e)=>{
        console.log("input event triggered everytime the field value changed : ", inputElement.value)
        // console.log("input event triggered everytime the field value changed : ", e.target.value)  //same effect
       
})

inputElement.addEventListener('paste',(e)=>{
    console.log('paste event: ',e.clipboardData.getData('text'))
    //  e.preventDefault() //block paste
})

