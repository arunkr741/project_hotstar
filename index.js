var menu=document.getElementById('menuicon')
    var div =document.createElement('section')
    div.innerHTML=""
    div.style.position='relative'
    var div1 =document.createElement('section')
    div1.innerHTML=""
    div1.style.position='relative'
    var div2 =document.createElement('section')
    div2.innerHTML=""
    div2.style.position='relative'

menu.addEventListener('mouseover',function(){
    div.style.color='#ffffffcc'
    div.style.marginTop='15px'
    div.style.background='#192133'
    div.style.width='150px'
    div.style.display='flex'
    div1.style.display='flex'
    div1.style.color='#ffffffcc'
    div1.style.background='#192133'
    div1.style.width='150px'
    div2.style.display='flex'
    div2.style.color='#ffffffcc'
    div2.style.background='#192133'
    div2.style.width='150px'
    div.innerHTML=`<img src="channel.png" style="width: 20px; height: 20px; margin-left: 15px; margin-top: 10px;">
    <h4 style="margin-left: 20px; line-height: 1px">Channels</h4>`
    div1.innerHTML=`<img src="language.png" style="width: 20px; height: 20px; margin-left: 15px; margin-top: 10px;">
    <h4 style="margin-left: 20px; line-height: 1px">Languages</h4>`
    div2.innerHTML=`<img src="genres.png" style="width: 20px; height: 20px; margin-left: 15px; margin-top: 10px;">
    <h4 style="margin-left: 20px; line-height: 1px">Geners</h4>`
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
img.setAttribute('src',images[0])
setInterval(function(){
    if(i==3){
        i=0
    }
    img.setAttribute('src',images[i])
    i=i+1
},4000)
function prev(){
    if(i>0){
        i--
    }else{
        i=images.length-1
    }
    img.setAttribute('src',images[i])
}
function next(){
    if(i<images.length-1){
        i++
    }else{
        i=0
    }
    img.setAttribute('src',images[i])
}
var login=document.getElementById('login')
var loginform=document.createElement('section')
    loginform.innerHTML=''
login.addEventListener('click',function(){
    var news=document.getElementById('news')
    loginform.style.width='36vw'
    loginform.style.height='80vh'
    // loginform.style.border='1px solid red'
    loginform.style.position='relative'
    loginform.style.marginTop='45px'
    loginform.style.background='#141b29'
    loginform.innerHTML=`<button style='float: right; font-size: 20px; color: #ffffffcc; background: none;
    outline: none; border: none;'>&#10006;</button><br> <h2 style="margin-left: 35px; margin-top: 100px; color: #ffffffcc;">Login to continue</h2>
    <button style="margin-left:35px; margin-top: 30px; width: 80%; height: 50px; background: none; border: 2px solid 
    blue; outline: none; font-size: 20px;color: blue;">Have a Facebook/Email Account</button`
    news.append(loginform)
})