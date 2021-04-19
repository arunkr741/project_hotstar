async function get_data(){
    var suggestion_div = document.getElementById('suggestions_display')
    var url = "../amit/static/moviedata.json";
    var res =  await  (await fetch(url)).json()

    console.log(res)

    res.forEach(element => {
      
        // var div = document.createElement('div')
        // div.setAttribute('id','image_div')

        var div1 = document.createElement('div')
        div1.setAttribute('class',"text_class")
        // div1.innerHTML=`${element.title}`
        // console.log(div1)
       
        // div.innerHTML=` <img height=185 width=255 id="images" src="${element.image}" alt="">`
       var img =document.createElement('img')
       img.src=element.image
       img.setAttribute('id','images')
       
        suggestion_div.append(img,div1)

    });
}
get_data()

//----------------dynamic content script by arun--------------

var content;
async function show_content(){
    var url = new URL(window.location)
   
    var params = new URLSearchParams(url.search)

    var title = params.get("title")
    var apikey = params.get("apikey")
    console.log(title,apikey)
    content =  await(await fetch(`http://www.omdbapi.com/?t=${title}&apikey=d3851ab0`)).json()
   console.log(content)
   
    document.getElementById("title").innerHTML=`${content.Title}`
    document.getElementById("runtime").innerHTML=`${content.Runtime}`
    document.getElementById("year").innerHTML= `${content.Year}`
    document.getElementById("description").innerHTML= `${content.Plot}`
    document.getElementById("cat").innerHTML= `${content.Genre}`
    document.getElementById("movie_image").src=content.Poster
    document.querySelector("#trailer>div>img").src=content.Poster
}
show_content()

var count = 0
function add_to_watchlist(){
    var icon = document.querySelector("#small_icons>div>img")
   if(count%2==0){
    icon.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMxRjgwRTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNzQyIDE3Ljk4NGwtLjA1My0uMDAxYy0uNDQ0LS4wMTYtLjg2LS4yMjEtMS4xNDItLjU2NGwtNC40Ni01LjQyMmMtLjUxNC0uNjI2LS41MzItMS41NjUuMDQtMi4xMzguNjU3LS42NiAxLjcyLS41OTUgMi4yOTYuMTA1bDMuMjE0IDMuOTA3Yy4wOTguMTIuMjguMTI2LjM4Ny4wMTNsNy44OS04LjM1MWMuNTU2LS41ODggMS40ODYtLjcyNSAyLjEyNy0uMjMuNzM3LjU2OC44MDcgMS42MzIuMTg0IDIuMjkxTDEwLjg2NyAxNy41Yy0uMjkzLjMxLS43LjQ4NS0xLjEyNS40ODUiLz4KPC9zdmc+Cg=="
    let movie_content = JSON.parse(localStorage.getItem("movieData")) || []
    movie_content.push(content)
    localStorage.setItem("movieData",JSON.stringify(movie_content))
   }else{
    icon.src="https://www.hotstar.com/assets/1fd3813027f5538464413fb8b08d9dbb.svg"
    let movie_content = JSON.parse(localStorage.getItem("movieData"))
    movie_content = movie_content.filter(el=>el.Title!=content.Title)
    localStorage.setItem("movieData",JSON.stringify(movie_content))
    console.log(movie_content)
   
   }
   count++
    console.log(content)
}


function watch_movie(){
    window.location.href="../arun/movie_content.html"
}