// async function get_data() {
//     var channel_div = document.getElementById("hindi_display");
//     var url = "/amit/Language/Language_data/hindi.json";
//     var res1 = await (await fetch(url)).json();
  
//     console.log(res1);
  
//     var start = 0;
//     var end = 5;
//     for (var i = start; i <end; i++) {
//       var first_div = document.createElement("div");
//       first_div.setAttribute("id", "first_div");
//       var image_div = document.createElement("div");
//       image_div.setAttribute("class", "image_div");
//       image_div.innerHTML = `<img width="270px"; style="opacity:0.6" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7456/267456-h" alt="">`;
//       var para_div = document.createElement("div");
//       para_div.setAttribute('class',"centered")
//       para_div.innerHTML = `<p class="title">${res1[i].title}</p><p class="title">${res1[i].description}</p>`;
//       image_div.append(para_div)
     
      
//       first_div.append(image_div);
//       channel_div.append(first_div);
//       start = end;
//       end = end + 5;
//     }
//   }
//   get_data();
  

