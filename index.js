var menu=document.getElementById('menuicon')
    var div =document.createElement('section')
    div.innerHTML=""
    var div1 =document.createElement('section')
    div1.innerHTML=""
    var div2 =document.createElement('section')
    div2.innerHTML=""

menu.addEventListener('mouseover',function(){
    div.style.color='teal'
    div.style.display='flex'
    div1.style.display='flex'
    div2.style.display='flex'
    div.innerHTML=`<img src=""><p>languages</p>`
    div1.innerHTML=`<img src=""><p>languages</p>`
    div2.innerHTML=`<img src=""><p>languages</p>`
    menu.append(div,div1,div2)
})
menu.addEventListener('mousedown',function(){
    div.innerHTML=""
    div1.innerHTML=""
    div2.innerHTML=""
})
var input=document.getElementById('input')
input.addEventListener('keypress',function(){
    var value=input.value
    
})
var images=["anupama.PNG","bigbull.PNG","cricket.PNG","yerishta.PNG"]
var i=0;
var slideshow=document.getElementById('slideshow')
var img=document.createElement('img')
img.style.width="100%"
img.style.height="70vh"
slideshow.appendChild(img)
setInterval(function(){
    if(i==3){
        i=0
    }
    img.setAttribute('src',images[i])
    i=i+1
},4000)
