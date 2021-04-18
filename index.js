//------------menu bar functionality start------------------
var menu=document.getElementById('menuicon')
var div =document.createElement('section')
var div1 =document.createElement('section')
var div2 =document.createElement('section')
div.style.position='relative'
div1.style.position='relative'
div2.style.position='relative'

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
    for (i = 0; i < 4; i++) {
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

