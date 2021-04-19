
async function get_data1() {
  var channel_div = document.getElementById("language_display");
  var url = "/amit/Language/languagedata.json";
  var res = await (await fetch(url)).json();

//   Telugu 2
// language.js:13 yes Malayalam 3
// language.js:13 yes Tamil 4
// language.js:13 yes Kannada 7
// language.js:13 yes English 6
// language.js:13 yes Marathi

  setTimeout(function(){
    console.log(res);
    var arun = document.querySelectorAll("#image_div")
    for( let i=0;i<arun.length;i++){
      arun[i].addEventListener("click",function(){

        console.log("yes",res[i].title,i)
        if(res[i].title=="Hindi"){
          location.assign("/amit/Language/Language_data/hindi.html") 
        }
        else if(res[i].title=="Bengali"){
          location.assign("/amit/Language/Language_data/bengali.html")
        }
        else if(res[i].title=="Malayalam"){
          location.assign("/amit/Language/Language_data/malyalam.html")
        }
        else if(res[i].title=="Tamil"){
          location.assign("/amit/Language/Language_data/tamil.html")
        }
        else if(res[i].title=="Kannada"){
          location.assign("/amit/Language/Language_data/english.html")
        }
        else if(res[i].title=="English"){
          location.assign("/amit/Language/Language_data/kannad.html")
        }
        else if(res[i].title=="Marathi"){
          location.assign("/amit/Language/Language_data/marathi.html")
        }

      })
    }
    console.log(arun)
  },1000)
  
 
  var start = 0;
  var end = 5;
  for (var i = start; i < end; i++) {
    var first_div = document.createElement("div");
    first_div.setAttribute("id", "first_div");
    var image_div1 = document.createElement("div");
    image_div1.setAttribute("id", "image_div");
    image_div1.innerHTML = `<img width="280px" style=" opacity: 0.7;" src='${res[i].image}' alt="">`;
    var para_div = document.createElement("div");
    para_div.setAttribute('class',"centered")
    para_div.innerHTML = `<h1>${res[i].p} <br> ${res[i].title}</h1>`;
    //  console.log(para_div)
    // console.log(res[i])

    // image_div1.addEventListener("click",function(){
    //   console.log(res[1])
    //   console.log(res[i])
    //   for(let i=start;i<end;i++){
    //     console.log(res[i])
    //     if(res[i].title=="Hindi"){
    //       console.log("Yes")
    //         location.assign("/amit/Language/Language_data/hindi.html") 
    //      }
    //       if(res[i].title=="Bengali"){
    //        location.assign("/amit/Language/Language_data/bengali.html") 
    //        }
    //   }
  
    //   })
    

    image_div1.appendChild(para_div);
    
    
    first_div.append(image_div1);
    channel_div.append(first_div);
    start = end;
    end = end + 5;
  }
}
get_data1();

async function go_to() {
 
  var url = "/amit/Language/languagedata.json";
  var result = await (await fetch(url)).json();

  console.log(result);
 
 
  

   result.forEach(element => {
     console.log(element.title)
    if(element.title=="Hindi"){
     console.log("Yes")
       location.assign("/amit/Language/Language_data/hindi.html") 
    }
     if(element.title=="Bengali"){
      location.assign("/amit/Language/Language_data/bengali.html") 
      }
   
   });
     
  
}






