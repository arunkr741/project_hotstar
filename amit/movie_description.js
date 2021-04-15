async function get_data(){
    var suggestion_div = document.getElementById('suggestions_display')
    var url = "../static/moviedata.json";
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