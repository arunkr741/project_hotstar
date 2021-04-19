async function get_data5() {
    var channel_div = document.getElementById("kannad_display");
    var url = "/amit/Language/Language_data/kannad.json";
    var res = await (await fetch(url)).json();
  
    console.log(res);
  
    var start = 0;
    var end = 5;
    for (var i = start; i <end; i++) {
      var first_div = document.createElement("div");
      first_div.setAttribute("id", "first_div");
      var image_div = document.createElement("div");
      image_div.setAttribute("class", "image_div");
      image_div.innerHTML = `<img width="270px"; style="opacity:0.6" src="${res[i].h}" alt="">`;
      var para_div = document.createElement("div");
      para_div.setAttribute('class',"centered")
      para_div.innerHTML = `<p class="title">${res[i].title}</p><p class="title">${res[i].description}</p>`;
      image_div.append(para_div)
       console.log(para_div)
     
      console.log(image_div);
      
      first_div.append(image_div);
      channel_div.append(first_div);
      start = end;
      end = end + 5;
    }
  }
  get_data5();
  