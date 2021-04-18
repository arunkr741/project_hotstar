async function display_movie() {
  var suggestion_div = document.getElementById("suggestions_display");
  var url = "../amit/static/moviedata.json";
  var res = await (await fetch(url)).json();

  console.log(res);

  res.forEach((element) => {
    // var div = document.createElement('div')
    // div.setAttribute('id','image_div')

    var div1 = document.createElement("div");

    // div.innerHTML=` <img height=185 width=255 id="images" src="${element.image}" alt="">`
    var img = document.createElement("img");
    img.src = element.image;
    img.setAttribute("id", "images");

    suggestion_div.append(img);
  });
}
display_movie();
