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
    
}