
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

var menu = document.getElementById('menuicon')
menu.addEventListener('click', function () {
    var div = document.createElement('section')
    div.innerHTML = ""
    div.style.color = 'teal'
    div.innerHTML = `<p>languages</p><p>chanels</p><p>geners</p>`
    menu.append(div)

})

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
         <div>
            <img id="search_img"
                src=${Search[i].Poster}>
        </div>
        <div id="article">
            <div>${Search[i].Title}</div>
            <div>${Search[i].Year}</div>
        </div>`
        parent.append(div)
    }
    

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

}

