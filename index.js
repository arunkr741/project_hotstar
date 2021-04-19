//------------menu bar functionality start------------------
var menu=document.getElementById('menuicon')
var div =document.createElement('section')
var div1 =document.createElement('section')
var div2 =document.createElement('section')
div.style.position='relative'
div1.style.position='relative'
div2.style.position='relative'
div.addEventListener("click",function(){
    window.location.href="./amit/Language/channel.html"
})
div1.addEventListener("click",function(){
    window.location.href="./amit/Language/language.html"
})
div2.addEventListener("click",function(){
    window.location.href="./amit/Language/genres.html"
})


menu.addEventListener("mouseleave",function(){
    div.innerHTML=""
    div1.innerHTML=""
    div2.innerHTML=""

})


menu.addEventListener("mouseover",show_menubar)
div.addEventListener("mouseover",show_menubar)
div1.addEventListener("mouseover",show_menubar)
div2.addEventListener("mouseover",show_menubar)
function show_menubar(){
    menu.style.display="block"
    div.style.color='#ffffffcc'
    div.style.marginTop='7px'
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
}

//------------menu bar functionality end------------------




// ---------------search functionality script start--------------------------

    document.getElementById("search_data").style.display="none"

async function getdata() {
    document.getElementById("search_data").style.display="none"
    var value = document.getElementById("input").value
    var data = await (await fetch(`http://www.omdbapi.com/?s=${value}&apikey=d3851ab0`)).json()


    var { Response } = data
    console.log(Response)
    if (Response == 'True') {
        console.log(data)
        document.getElementById("search_data").style.display="block"
        showdata(data)

    }

}
document.getElementById("input").addEventListener("keypress", function () {
    getdata()
})


function showdata(data) {
    var parent = document.getElementById("search_data")
    parent.innerHTML=null
    var { Search } = data
    for (let i = 0; i < 4; i++) {
        var div = document.createElement("div")
        div.innerHTML = `
         <div onclick='movi_data("${Search[i].Title}")'>
            <img id="search_img"
                src=${Search[i].Poster}>
        </div>
        <div onclick='movi_data("${Search[i].Title}")' id="article">
            <div>${Search[i].Title}</div>
            <div>${Search[i].Year}</div>
        </div>`
        
        parent.append(div)
    }
}

function movi_data(data){
    console.log(data)
    

    var url = new URL(`http://127.0.0.1:5500/amit/movie_description.html?apikey=d3851ab0&title=${data}`)
    var params = new URLSearchParams(url.search)
    
    console.log(params.toString())
 
    window.location.href=url
}


var input_div=document.getElementById("input_div")

function stretch_input(){
input_div.style.width="20%"
input_div.style.marginLeft="120px"
input_div.style.transition="0.5s"

}
input_div.addEventListener("click",stretch_input)

// input_div.addEventListener("mouseout",function(){
//     input_div.style.width="15%"
// input_div.style.marginLeft="200px"
// })



// ---------------search functionality script end--------------------------



// ----------------slide show functionality start --------------------


var images=["anupama.PNG","bigbull.PNG","cricket.PNG","yerishta.PNG"]
var j=0;
var slideshow=document.getElementById('slideshow')
var img=document.createElement('img')
img.style.width="100%"
img.style.height="500px"
slideshow.appendChild(img)
img.setAttribute('src',images[0])
setInterval(function(){
    if(j==4){
        j=0
    }
    img.setAttribute('src',images[j])
    j=j+1
},3000)





function prev(){
    if(j>0){
        j--
    }else{
        j=images.length-1
    }
    img.setAttribute('src',images[j])
}
function next(){
    if(j<images.length-1){
        j++
    }else{
        j=0
    }
    img.setAttribute('src',images[j])
}

// ----------------slide show functionality end --------------------

// ---------------watchlist- start-----------------

var watchlist_data;

    function show_watchlist(){
        watchlist_data = JSON.parse(localStorage.getItem("movieData"))
        console.log(watchlist_data)
        console.log(watchlist_data)
        let watchlist = document.getElementById("watchlist")
        watchlist.innerHTML=null
        for(let i=0 ;i<watchlist_data.length;i++){
            let maindiv = document.createElement("div")
            maindiv.setAttribute("id","card")
            maindiv.innerHTML=`
                <img src=${watchlist_data[i].Poster}>
                <div id="Watch_title">
                    <p>${watchlist_data[i].Title}</p>
                    <p>2hr 33min, ${watchlist_data[i].Year}, Action</p>
                    <button  id="watch_btn">&#10004; Remove from Watchlist</button>
                </div>
                `
               
                watchlist.append(maindiv)
        }
        console.log("yes")
        
    }

    show_watchlist()

    
    





    let watch_btn = document.querySelectorAll("#watch_btn")
    for(let w=0;w<watch_btn.length;w++){
        watch_btn[w].addEventListener("click",function(){
           
            let movie_content = JSON.parse(localStorage.getItem("movieData"))
            movie_content = movie_content.filter(el => el.Title != watchlist_data[w].Title)
            localStorage.setItem("movieData", JSON.stringify(movie_content))
            show_watchlist()
            myfunction()
            
        })
    }
   
    
    
    function myfunction(){

        var nodelist = document.querySelectorAll("#card")
    
    for(let i=0;i<nodelist.length;i++){
        console.log(nodelist[i])
        // ----------watchlist remove btn--------------------
      

        function mouseover(){
            let title = document.querySelectorAll("#Watch_title")
            
            let img = document.querySelectorAll("#card>img")
            img[i].style.cssText=`
            transition: 0.5s;
            transform: scale(1.2);
            `
            title[i].style.cssText=`
            display: block;
            
            transition: 0.5s;
            transform: scale(1.2);
            position: relative
            
            ` 
        }
        nodelist[i].addEventListener("mouseover",mouseover)
        
        
      
        function mouseout(){
            let title = document.querySelectorAll("#Watch_title")
            let img = document.querySelectorAll("#card>img")
            img[i].style.cssText=`
            transition: none;
            transform: none;
            `
            title[i].style.cssText=`
           
            display: none;
            transform: none;
            transition: none;
            
            ` 
        }
        nodelist[i].addEventListener("mouseout",mouseout)
    }
}
myfunction()
    // console.log(nodelist[1].style.border="1px solid red")
    


// ---------------watchlist- end-----------------



// ----------------login functionality script start --------------------




var login=document.getElementById('login')
var loginform=document.createElement('section')
 loginform.setAttribute('id','loginform')
    loginform.innerHTML=''
login.addEventListener('click',function(){
    var news=document.getElementById('news')
    loginform.style.width='36vw'
    loginform.style.height='70vh'
    // loginform.style.border='1px solid red'
    loginform.style.position='relative'
    loginform.style.marginTop='75px'
    loginform.style.background='#141b29'
    loginform.innerHTML=`<button style='float: right; font-size: 20px; color: #ffffffcc; background: none;
    outline: none; border: none;' onclick=" display()">&#10006;</button><br> <h2 id="h2" style="margin-left: 35px; margin-top: 100px; color: #ffffffcc;">Login to continue</h2>
    <button id="btn" style="margin-left:35px; margin-top: 30px; width: 80%; height: 50px; background: none; border: 1px solid 
    #1f80e0; outline: none; font-size: 17px;color: #1f80e0;">Have a Facebook/Email Account?</button>
    <h3 id="h3" style="margin-top: 50px;">
    or</h3> <div id="box" style="width: 80%; height: 40px; border-bottom: 2px solid #1f80e0; margin-left: 35px; margin-top: 30px; display: flex;">
    <div style="width: 7%;">
    <h3 id="inputbox">+91</h3></div>
    <div id= "bordr" style="width: 0.5px; height:20px; background: #1f80e0; margin-left: 10px; margin-top: 10px"></div>
    <input id="phone" style=" width: 60%;border:none;outline:none;font-size: 17px; margin-left: 10px;background: rgb(20,27,41); color: white;" type="text" placeholder= "Enter your mobile number"/></div>`
    news.append(loginform)
    loginform.style.display="block"
    var phone=document.getElementById('phone')
    var p=document.createElement('p')
    p.setAttribute('id','otp2')
    p.innerHTML=""
    var btn1=document.createElement('button')
    btn1.setAttribute("id","btn1")
    var policy=document.createElement('div')
    policy.setAttribute('id','policy')
    phone.addEventListener('keypress',function(){
        p.style.marginLeft='35px'
        document.getElementById('h2').textContent=`Continue Using Phone`
        document.getElementById('btn').style.display='none'
        document.getElementById('h3').style.display='none'
        btn1.style.width='80%'
        btn1.style.height='50px'
        btn1.style.marginLeft='35px'
        btn1.style.background='#1f80e0'
        btn1.style.border='none'
        btn1.style.outline='none'
        btn1.style.color='#ffffff'
        btn1.style.fontSize='12px'
        btn1.innerHTML=`<h4>CONTINUE&#62</h4>`
        policy.style.display='flex'
        policy.style.marginLeft='35px'
        policy.innerHTML=`<p style=" color: #919191 ">By proceeding you agree to the</p> <a style="
        margin-top: 15px; text-decoration: none; color: #1f80e0" href='#'>Term of use</a> <p style=" color: #919191 ">and</p><a style="
        margin-top: 15px; text-decoration: none; color: #1f80e0" href='#'>Privacy policy</a>`
       p.innerHTML=`<p style=" color: red;" >please enter your phone number</p>`
       loginform.appendChild(p)
       loginform.appendChild(btn1)
       loginform.appendChild(policy)
       var run=document.getElementById('btn1')
       var flag=true;
       var inputbox=document.getElementById('inputbox')
    run.addEventListener('click',function(){
         validate()
    })
    })
})

function display(){
    loginform.style.display="none"
}
var otpbox=document.createElement('input')
var btn2=document.createElement('button')
btn2.setAttribute('id','btn2')
function validate(){
    if(phone.value.length==10){
        localStorage.setItem('phone',JSON.stringify(phone.value))
        let data=JSON.parse(localStorage.getItem('phone'))
        document.getElementById('h2').textContent=`Enter the 4-digit code sent to ${data} `
        var otp = Math.floor(1000 + Math.random() * 9000);
        localStorage.setItem('otp',JSON.stringify(otp))
        var otp1=JSON.parse(localStorage.getItem('otp'))
        phone.style.display='none'
        document.getElementById('otp2').textContent=`Your OTP is ${otp1}`
        otp2.style.color='green'
        inputbox.style.display="none"
        // document.getElementById('phone').display="none"
        document.getElementById('phone').placeholder="Enter OTP"
        document.getElementById('bordr').style.display="none"
        otpbox.style.width="20%"
        otpbox.style.height="30px"
        otpbox.placeholder="Enter OTP"
        otpbox.setAttribute('id','otpvalue')
        document.getElementById('btn1').style.display="none"
        document.getElementById('policy').style.display="none"
        document.getElementById('box').appendChild(otpbox)
        btn2.style.width='80%'
        btn2.style.height='50px'
        btn2.style.marginLeft='35px'
        btn2.style.background='#1f80e0'
        btn2.style.border='none'
        btn2.style.outline='none'
        btn2.style.color='#ffffff'
        btn2.style.fontSize='12px'
        btn2.innerHTML=`<h4>CONTINUE&#62</h4>`
        document.getElementById('loginform').appendChild(btn2)
        document.getElementById('btn2').addEventListener('click',function(){
            var otpvalue=document.getElementById('otpvalue').value
             validateOtp(otpvalue)
        })
    }else{
        document.getElementById('otp2').innerHTML="please enter valid  phone no"
        document.getElementById('otp2').style.color="red"
    }
}
function validateOtp(otpvalue){
    var otpdata=JSON.parse(localStorage.getItem('otp'))
    console.log(otpdata==otpvalue)
    if(otpdata==otpvalue){
        document.getElementById('loginform').style.display="none"
        document.querySelector('h6').textContent="SUBHASH"
    }else{
        
        document.getElementById('otp2').textContent=`Your OTP is not valid`
    }
}



