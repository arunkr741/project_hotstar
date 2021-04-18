async function get_data() {
    var channel_div = document.getElementById("channel_display");
    var url = "/amit/Language/channelfinaldata.json";
    var res = await (await fetch(url)).json();
  
    console.log(res);
  
     var start =0;
     var end =5;
    for(var i=start;i<end;i++){
        
        console.log(res[i])
        var first_div = document.createElement('div')
         first_div.setAttribute('id',"first_div")
        var image_div = document.createElement('div')
        image_div.setAttribute('class',"image_div")
            
       image_div.innerHTML=`<img width="280px" src="${res[i].image}" alt="">`
      first_div.append(image_div)
     channel_div.append(first_div)
     start=end;
     end=end+5
    }
    
   
  }
  get_data();