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
        div1.innerHTML=`${element.title}`
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


async function show_content(){
    var url = new URL(window.location)
   
    var params = new URLSearchParams(url.search)

    var title = params.get("title")
    var apikey = params.get("apikey")
    console.log(title,apikey)
   var content =  await(await fetch(`http://www.omdbapi.com/?t=${title}&apikey=d3851ab0`)).json()
   console.log(content)
   
    document.getElementById("title").innerHTML=`${content.Title}`
    document.getElementById("runtime").innerHTML=`${content.Runtime}`
    document.getElementById("year").innerHTML= `${content.Year}`
    document.getElementById("description").innerHTML= `${content.Plot}`
    document.getElementById("cat").innerHTML= `${content.Genre}`
    document.getElementById("movie_image").src=content.Poster
}
show_content()