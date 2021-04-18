
async function get_data1() {
  var channel_div = document.getElementById("language_display");
  var url = "/amit/Language/languagedata.json";
  var res = await (await fetch(url)).json();

  console.log(res);

  var start = 0;
  var end = 5;
  for (var i = start; i < end; i++) {
    var first_div = document.createElement("div");
    first_div.setAttribute("id", "first_div");
    var image_div1 = document.createElement("div");
    image_div1.setAttribute("id", "image_div");
    image_div1.innerHTML = `<img width="280px" style=" opacity: 0.7;" src="${res[i].image}" alt="">`;
    var para_div = document.createElement("div");
    para_div.setAttribute('class',"centered")
    para_div.innerHTML = `<h1> ${res[i].title}</h1>`;
    //  console.log(para_div)
    // image_div1.appendChild(para_div);
   
    
    first_div.append(image_div1);
    channel_div.append(first_div);
    
    first_div.addEventListener('click',function(){
      channel_div.innerText=res.title
      console.log('30',res.title)
    })
    start = end;
    end = end + 5;
  }
}
get_data1();

async function go_to(ab) {
 var req_title=ab.title
 console.log(req_title)
  var url = "/amit/Language/languagedata.json";
  var result = await (await fetch(url)).json();

  console.log(result);
 
 
  

  //  result.forEach(element => {
  //    console.log(element.title)
  //   if(element.title==req_title){
     
  //    location.assign(`/amit/Language/Language_data/${req_title}.html`) 
  //   }
  //  });
     
  
}




