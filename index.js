var menu=document.getElementById('menuicon')
menu.addEventListener('click',function(){
    var div =document.createElement('section')
    div.innerHTML=""
    div.style.color='teal'
    div.innerHTML=`<p>languages</p><p>chanels</p><p>geners</p>`
    menu.append(div)
})
var input=document.getElementById('input')
input.addEventListener('keypress',function(){
    var value=input.value
    
})