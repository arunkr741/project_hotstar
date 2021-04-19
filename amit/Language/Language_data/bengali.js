// async function get_data3() {
//     var channel_div1 = document.getElementById("bengali_display");
//     var url1 = "/amit/Language/Language_data/bengali.json";
//     var res1 = await (await fetch(url1)).json();
  
//     console.log(res1);
  
//     var start = 0;
//     var end = 5;
//     for (var i = start; i <end; i++) {
//       var first_div1 = document.createElement("div");
//       first_div1.setAttribute("id", "first_div");
//       var image_div1 = document.createElement("div");
//       image_div1.setAttribute("class", "image_div");
//       image_div1.innerHTML = `<img width="270px"; style="opacity:0.6" src="${res1[i].h}" alt="">`;
//       var para_div1 = document.createElement("div");
//       para_div1.setAttribute('class',"centered")
//       para_div1.innerHTML = `<p class="title">${res1[i].title}</p><p class="title">${res1[i].description}</p>`;
//       image_div1.append(para_div1)
     
      
//       first_div1.append(image_div1);
//       channel_div1.append(first_div1);
//       start = end;
//       end = end + 5;
//     }
//   }
//   get_data3();
  

