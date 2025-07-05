## Additionals

```javascript
// its always prefered to keep script in the lowest part of the body because js often includes accessing elements from dom that are part of html. if js executes without full loading of dom , it can cause issues hence. 
// but this alone wont be enough because in cases where there are large lines of html code, it can cause a signifcant delay in the execution of js thus in the functionality of webpage. so we have two options inorder to handle this. 

//they are  async and defer attributes which are used along with script tags. 

// both async and defer allow paralled download of script tag but there are few differences in their behaviour
// async : downloads js parallely, when js downloaded completed , downloading of html is paused, js  is executed and after that html download completes
// defer: download js parallely, when js download completed , doesnt pause html downlaod. instead html download continues . after its completion , js is executed. 

// another difference is in the order of execution of script files :
// async: order is not maintained. first downloaded file executed first . 
// defer: order is maintained. first placed script tag executed first always. 

```