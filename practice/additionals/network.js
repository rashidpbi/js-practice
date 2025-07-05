//steps to follow
// #making requests using xmlhttp
// *simple request to log



let xhr = new XMLHttpRequest()

xhr.open('GET','https://fakeapi.net/users')
xhr.send()

xhr.onload = function(){
    if(xhr.status == 200){
        console.log(xhr.response)
    }else{
        console.error('request failed :',xhr.status)
    }
}