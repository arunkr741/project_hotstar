async function get_data() {
    var channel_div = document.getElementById("genre_display");
    var url = "/amit/Language/generedata.json";
    var res = await (await fetch(url)).json();
  
    console.log(res);
  
    var start = 0;
    var end = 5;
    for (var i = start; i <end; i++) {
      var first_div = document.createElement("div");
      first_div.setAttribute("id", "first_div");
      var image_div = document.createElement("div");
      image_div.setAttribute("class", "image_div");
      image_div.innerHTML = `<img width="280px" style=" opacity: 0.7";  src="${res[i].image}" alt="">`;
      var para_div = document.createElement("div");
      para_div.setAttribute('class',"centered")
      para_div.innerHTML = `<h2>${res[i].title}</h2>`;
      //  console.log(para_div)
      image_div.appendChild(para_div);
      console.log(image_div);
      
      first_div.append(image_div);
      channel_div.append(first_div);
      start = end;
      end = end + 5;
    }
  }
  get_data();
  