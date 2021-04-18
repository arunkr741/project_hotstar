let key = "b4ca5947";
let slideIndexes = 1;
let title = ["batman","avengers","spider","wolverine","mad","x-men"]

let data = fetch(`http://www.omdbapi.com/?apikey=${key}&s=${title[Math.floor(Math.random()*title.length)]}`)
    .then((res) => res.json())
    .then(data => display_hotData(data));

   

function display_hotData(data) {
    let searching = data.Search;
    searching.forEach(indivData => {
        let { Title, Poster, imdbID, Year } = indivData
        console.log(Title);

        let results_hot = document.querySelector(".container");

        let movie_div = document.createElement("div");
        movie_div.setAttribute("class", "movieDiv")
        
        

        let posterimg = document.createElement("img");
       
        posterimg.setAttribute("src", Poster)
        posterimg.setAttribute("class", "posterimgage")


        let teamText = document.createElement("div")
        teamText.setAttribute("class", "imageDescrip")


        let imageDescrip = document.createElement("p");
        imageDescrip.setAttribute("class", "imageDescrip")
        imageDescrip.innerText = `${Title}`
        imageDescrip.style.fontSize = "12px"
        imageDescrip.style.color = "white"

        imageDescrip.style.fontWeight = "bold"

        // imageDescrip.innerText = `${Title} ${imdbID}`

        // here some problem
        let imageDescriHead = document.createElement("p");
        // imageDescriHead.setAttribute("class", "imageDescrip")
        imageDescriHead.innerText = `${Year}`
        // end here some problem



        let watchbtn = document.createElement("button");
        watchbtn.setAttribute("class", "imageDesc");
        watchbtn.innerHTML = `\n &#43; watchlist`;
        watchbtn.style.fontSize = "12px";
        watchbtn.style.boxSizing = "borderbox"
        watchbtn.style.borderBottom = "1px solid transparent"
        watchbtn.style.borderTopLeftRadius = "5px";
        watchbtn.style.borderTopRightRadius = "5px";
        watchbtn.style.borderBottomLeftRadius = "5px";
        watchbtn.style.outline = "rgb(31, 128, 224) none 0px"
        watchbtn.style.width = "100%"
        watchbtn.style.cursor = "pointer";
        watchbtn.style.backgroundColor = "rgb(12,17,27)";
        watchbtn.style.color = "white";
        watchbtn.style.fontSize = "bold";

      
        let count = 0
        watchbtn.addEventListener("click", function () {
            console.log("yes")
            console.log(indivData)
        
            
                // let icon = document.querySelector("#small_icons>div>img")
                if (count % 2 == 0) {
                    // icon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMxRjgwRTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNzQyIDE3Ljk4NGwtLjA1My0uMDAxYy0uNDQ0LS4wMTYtLjg2LS4yMjEtMS4xNDItLjU2NGwtNC40Ni01LjQyMmMtLjUxNC0uNjI2LS41MzItMS41NjUuMDQtMi4xMzguNjU3LS42NiAxLjcyLS41OTUgMi4yOTYuMTA1bDMuMjE0IDMuOTA3Yy4wOTguMTIuMjguMTI2LjM4Ny4wMTNsNy44OS04LjM1MWMuNTU2LS41ODggMS40ODYtLjcyNSAyLjEyNy0uMjMuNzM3LjU2OC44MDcgMS42MzIuMTg0IDIuMjkxTDEwLjg2NyAxNy41Yy0uMjkzLjMxLS43LjQ4NS0xLjEyNS40ODUiLz4KPC9zdmc+Cg=="
                    let movie_content = JSON.parse(localStorage.getItem("movieData")) || []
                    movie_content.push(indivData)
                    localStorage.setItem("movieData", JSON.stringify(movie_content))
                    watchbtn.innerHTML = `\n &#10004; watchlist`;
                    show_watchlist()
                    myfunction()
                } else {
                    // icon.src = "https://www.hotstar.com/assets/1fd3813027f5538464413fb8b08d9dbb.svg"
                    let movie_content = JSON.parse(localStorage.getItem("movieData"))
                    movie_content = movie_content.filter(el => el.Title != indivData.Title)
                    localStorage.setItem("movieData", JSON.stringify(movie_content))
                    console.log(movie_content)
                    watchbtn.innerHTML = `\n &#43; watchlist`;
                    show_watchlist()
                    myfunction()
                }
                count++
                // console.log(indivData)
            
        })



        imageDescrip.append(imageDescriHead, watchbtn)
        teamText.append(imageDescrip);


        movie_div.append(posterimg, teamText);
        results_hot.append(movie_div)

    });
}






// 2

// 2

let data2 = fetch(`http://www.omdbapi.com/?apikey=${key}&s=${title[Math.floor(Math.random()*title.length)]}`)
    .then((res) => res.json())
    .then(data => display_hotData2(data));


function display_hotData2(data) {
    let searching = data.Search;
    searching.forEach(indivData => {
        let { Title, Poster, Year } = indivData
        console.log(Title);

        let results_hot2 = document.querySelector(".container2");

        let movie_div = document.createElement("div");
        movie_div.setAttribute("class", "movieDiv")
        movie_div.addEventListener("click",function(event){
            console.log("hai")
            
            movi_data(Title)
        })

        let posterimg = document.createElement("img");
        posterimg.setAttribute("src", Poster)
        posterimg.setAttribute("class", "posterimgage")

        var teamText = document.createElement("div")
        teamText.setAttribute("class", "imageDescrip")

        // let teamText = document.createElement("div")
        // teamText.setAttribute("class", "imageDescrip")


        let imageDescrip = document.createElement("p");
        imageDescrip.setAttribute("class", "imageDescrip")
        imageDescrip.innerText = `${Title}`
        imageDescrip.style.fontSize = "12px"
        imageDescrip.style.color = "white"

        imageDescrip.style.fontWeight = "bold"
        // imageDescrip.style.fontWeight = "bold"
        // imageDescrip.innerText = `${Title} ${imdbID}`

        // here some problem
        let imageDescriHead = document.createElement("p");
        // imageDescriHead.setAttribute("class", "imageDescrip")
        imageDescriHead.innerText = `${Year}`
        // end here some problem



        let watchbtn = document.createElement("button");
        watchbtn.setAttribute("class", "imageDesc");
        watchbtn.innerHTML = `\n + watchlist`;
        watchbtn.style.fontSize = "12px";
        watchbtn.style.boxSizing = "borderbox"
        watchbtn.style.borderBottom = "1px solid transparent"
        watchbtn.style.borderTopLeftRadius = "5px";
        watchbtn.style.borderTopRightRadius = "5px";
        watchbtn.style.borderBottomLeftRadius = "5px";
        watchbtn.style.outline = "rgb(31, 128, 224) none 0px"
        watchbtn.style.width = "100%"
        watchbtn.style.cursor = "pointer";
        watchbtn.style.backgroundColor = "rgb(12,17,27)";
        watchbtn.style.color = "white";
        watchbtn.style.fontSize = "bold";

// var data3 = fetch(`http://www.omdbapi.com/?apikey=${key}&s=wolverine`)
//     .then((res) => res.json())
//     .then(data => display_hotData3(data));

        let count = 0
        watchbtn.addEventListener("click", function () {
            console.log("yes")
            console.log(indivData)
        
            
                // let icon = document.querySelector("#small_icons>div>img")
                if (count % 2 == 0) {
                    // icon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMxRjgwRTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNzQyIDE3Ljk4NGwtLjA1My0uMDAxYy0uNDQ0LS4wMTYtLjg2LS4yMjEtMS4xNDItLjU2NGwtNC40Ni01LjQyMmMtLjUxNC0uNjI2LS41MzItMS41NjUuMDQtMi4xMzguNjU3LS42NiAxLjcyLS41OTUgMi4yOTYuMTA1bDMuMjE0IDMuOTA3Yy4wOTguMTIuMjguMTI2LjM4Ny4wMTNsNy44OS04LjM1MWMuNTU2LS41ODggMS40ODYtLjcyNSAyLjEyNy0uMjMuNzM3LjU2OC44MDcgMS42MzIuMTg0IDIuMjkxTDEwLjg2NyAxNy41Yy0uMjkzLjMxLS43LjQ4NS0xLjEyNS40ODUiLz4KPC9zdmc+Cg=="
                    let movie_content = JSON.parse(localStorage.getItem("movieData")) || []
                    movie_content.push(indivData)
                    localStorage.setItem("movieData", JSON.stringify(movie_content))
                    watchbtn.innerHTML = `\n &#10004; watchlist`;
                    show_watchlist()
                    myfunction()
                } else {
                    // icon.src = "https://www.hotstar.com/assets/1fd3813027f5538464413fb8b08d9dbb.svg"
                    let movie_content = JSON.parse(localStorage.getItem("movieData"))
                    movie_content = movie_content.filter(el => el.Title != indivData.Title)
                    localStorage.setItem("movieData", JSON.stringify(movie_content))
                    console.log(movie_content)
                    watchbtn.innerHTML = `\n + watchlist`;
                    show_watchlist()
                    myfunction()
                }
                count++
                // console.log(indivData)
            
        })


        imageDescrip.append(imageDescriHead, watchbtn)
        teamText.append(imageDescrip);


         posterimg = document.createElement("img");
        posterimg.setAttribute("src", Poster)
        posterimg.setAttribute("id", "posterimgage")


        movie_div.append(posterimg, teamText);
        results_hot2.append(movie_div)

    });
}


        

// 3



let data3 = fetch(`http://www.omdbapi.com/?apikey=${key}&s=${title[Math.floor(Math.random()*title.length)]}`)
    .then((res) => res.json())
    .then(data => display_hotData3(data));


function display_hotData3(data) {
    let searching = data.Search;
    searching.forEach(indivData => {
        let { Title, Poster, Year } = indivData
        console.log(Title);

        let results_hot3 = document.querySelector(".container3");

        let movie_div = document.createElement("div");
        movie_div.setAttribute("class", "movieDiv")


        let posterimg = document.createElement("img");
        posterimg.setAttribute("src", Poster)
        posterimg.setAttribute("id", "posterimgage")


        let teamText = document.createElement("div")
        teamText.setAttribute("class", "imageDescrip")


        let imageDescrip = document.createElement("p");
        imageDescrip.setAttribute("class", "imageDescrip")
        imageDescrip.innerText = `${Title}`
        imageDescrip.style.fontSize = "12px"
        imageDescrip.style.color = "white"

        imageDescrip.style.fontWeight = "bold"

        // imageDescrip.innerText = `${Title} ${imdbID}`

        // here some problem
        let imageDescriHead = document.createElement("p");
        // imageDescriHead.setAttribute("class", "imageDescrip")
        imageDescriHead.innerText = `${Year}`
        // end here some problem



        let watchbtn = document.createElement("button");
        watchbtn.setAttribute("class", "imageDesc");
        watchbtn.innerHTML = `\n + watchlist`;
        watchbtn.style.fontSize = "12px";
        watchbtn.style.boxSizing = "borderbox"
        watchbtn.style.borderBottom = "1px solid transparent"
        watchbtn.style.borderTopLeftRadius = "5px";
        watchbtn.style.borderTopRightRadius = "5px";
        watchbtn.style.borderBottomLeftRadius = "5px";
        watchbtn.style.outline = "rgb(31, 128, 224) none 0px"
        watchbtn.style.width = "100%"
        watchbtn.style.cursor = "pointer";
        watchbtn.style.backgroundColor = "rgb(12,17,27)";
        watchbtn.style.color = "white";
        watchbtn.style.fontSize = "bold";


  let count = 0
        watchbtn.addEventListener("click", function () {
            console.log("yes")
            console.log(indivData)
        
            
                // let icon = document.querySelector("#small_icons>div>img")
                if (count % 2 == 0) {
                    // icon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMxRjgwRTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNzQyIDE3Ljk4NGwtLjA1My0uMDAxYy0uNDQ0LS4wMTYtLjg2LS4yMjEtMS4xNDItLjU2NGwtNC40Ni01LjQyMmMtLjUxNC0uNjI2LS41MzItMS41NjUuMDQtMi4xMzguNjU3LS42NiAxLjcyLS41OTUgMi4yOTYuMTA1bDMuMjE0IDMuOTA3Yy4wOTguMTIuMjguMTI2LjM4Ny4wMTNsNy44OS04LjM1MWMuNTU2LS41ODggMS40ODYtLjcyNSAyLjEyNy0uMjMuNzM3LjU2OC44MDcgMS42MzIuMTg0IDIuMjkxTDEwLjg2NyAxNy41Yy0uMjkzLjMxLS43LjQ4NS0xLjEyNS40ODUiLz4KPC9zdmc+Cg=="
                    let movie_content = JSON.parse(localStorage.getItem("movieData")) || []
                    movie_content.push(indivData)
                    localStorage.setItem("movieData", JSON.stringify(movie_content))
                    watchbtn.innerHTML = `\n &#10004; watchlist`;
                    show_watchlist()
                    myfunction()
                } else {
                    // icon.src = "https://www.hotstar.com/assets/1fd3813027f5538464413fb8b08d9dbb.svg"
                    let movie_content = JSON.parse(localStorage.getItem("movieData"))
                    movie_content = movie_content.filter(el => el.Title != indivData.Title)
                    localStorage.setItem("movieData", JSON.stringify(movie_content))
                    console.log(movie_content)
                    watchbtn.innerHTML = `\n + watchlist`;
                    show_watchlist()
                    myfunction()
                }
                count++
                // console.log(indivData)
            
        })



        imageDescrip.append(imageDescriHead, watchbtn)
        teamText.append(imageDescrip);



        movie_div.append(posterimg, teamText);
        results_hot3.append(movie_div)

    });
}





let data4 = fetch(`http://www.omdbapi.com/?apikey=${key}&s=${title[Math.floor(Math.random()*title.length)]}`)
    .then((res) => res.json())
    .then(data => display_hotData4(data));



function display_hotData4(data) {
    let searching = data.Search;
    searching.forEach(indivData => {
        let { Title, Poster, Year } = indivData
        console.log(Title);

        let results_hot4 = document.querySelector(".container4");

        let movie_div = document.createElement("div");
        movie_div.setAttribute("class", "movieDiv")
        movie_div.addEventListener("click",function(event){
            console.log("hai")
            
            movi_data(Title)
        })

        let posterimg = document.createElement("img");
        posterimg.setAttribute("src", Poster)
        posterimg.setAttribute("id", "posterimgage")


        let teamText = document.createElement("div")
        teamText.setAttribute("class", "imageDescrip")


        let imageDescrip = document.createElement("p");
        imageDescrip.setAttribute("class", "imageDescrip")
        imageDescrip.innerText = `${Title}`
        imageDescrip.style.fontSize = "12px"
        imageDescrip.style.color = "white"

        imageDescrip.style.fontWeight = "bold"

        // imageDescrip.innerText = `${Title} ${imdbID}`

        // here some problem
        let imageDescriHead = document.createElement("p");
        // imageDescriHead.setAttribute("class", "imageDescrip")
        imageDescriHead.innerText = `${Year}`
        // end here some problem



        let watchbtn = document.createElement("button");
        watchbtn.setAttribute("class", "imageDesc");
        watchbtn.innerHTML = `\n + watchlist`;
        watchbtn.style.fontSize = "12px";
        watchbtn.style.boxSizing = "borderbox"
        watchbtn.style.borderBottom = "1px solid transparent"
        watchbtn.style.borderTopLeftRadius = "5px";
        watchbtn.style.borderTopRightRadius = "5px";
        watchbtn.style.borderBottomLeftRadius = "5px";
        watchbtn.style.outline = "rgb(31, 128, 224) none 0px"
        watchbtn.style.width = "100%"
        watchbtn.style.cursor = "pointer";
        watchbtn.style.backgroundColor = "rgb(12,17,27)";
        watchbtn.style.color = "white";
        watchbtn.style.fontSize = "bold";


        let count = 0
        watchbtn.addEventListener("click", function () {
            console.log("yes")
            console.log(indivData)
        
            
                // let icon = document.querySelector("#small_icons>div>img")
                if (count % 2 == 0) {
                    // icon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMxRjgwRTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNzQyIDE3Ljk4NGwtLjA1My0uMDAxYy0uNDQ0LS4wMTYtLjg2LS4yMjEtMS4xNDItLjU2NGwtNC40Ni01LjQyMmMtLjUxNC0uNjI2LS41MzItMS41NjUuMDQtMi4xMzguNjU3LS42NiAxLjcyLS41OTUgMi4yOTYuMTA1bDMuMjE0IDMuOTA3Yy4wOTguMTIuMjguMTI2LjM4Ny4wMTNsNy44OS04LjM1MWMuNTU2LS41ODggMS40ODYtLjcyNSAyLjEyNy0uMjMuNzM3LjU2OC44MDcgMS42MzIuMTg0IDIuMjkxTDEwLjg2NyAxNy41Yy0uMjkzLjMxLS43LjQ4NS0xLjEyNS40ODUiLz4KPC9zdmc+Cg=="
                    let movie_content = JSON.parse(localStorage.getItem("movieData")) || []
                    movie_content.push(indivData)
                    localStorage.setItem("movieData", JSON.stringify(movie_content))
                    watchbtn.innerHTML = `\n &#10004; watchlist`;
                    show_watchlist()
                    myfunction()
                } else {
                    // icon.src = "https://www.hotstar.com/assets/1fd3813027f5538464413fb8b08d9dbb.svg"
                    let movie_content = JSON.parse(localStorage.getItem("movieData"))
                    movie_content = movie_content.filter(el => el.Title != indivData.Title)
                    localStorage.setItem("movieData", JSON.stringify(movie_content))
                    console.log(movie_content)
                    watchbtn.innerHTML = `\n + watchlist`;
                    show_watchlist()
                    myfunction()
                }
                count++
                // console.log(indivData)
            
        })



        imageDescrip.append(imageDescriHead, watchbtn)
        teamText.append(imageDescrip);


        movie_div.append(posterimg, teamText);
        results_hot4.append(movie_div)

    });
}


window.addEventListener("load", execute)
function execute() {
    document.querySelector(".slideshow-container").addEventListener("mouseleave", leave)
    document.querySelector(".slideshow-container").addEventListener("mouseenter", enter)
    leave()
    let btnleft = document.querySelector(".btnleft")
    let btnright = document.querySelector(".btnright")
    btnright.addEventListener("click", scrollright)
    btnleft.addEventListener("click", scrollleft)
}

function scrollright() {
    console.log("object")
    document.querySelector(".card__container").scrollBy(250, 0)
    document.querySelector(".card__container").style.padding = "0px"
}
function scrollleft() {
    console.log("object")
    document.querySelector(".card__container").scrollBy(-250, 0)
}

let sliding
let slideIndex = 1;
function leave() {
    console.log("leave")
    sliding = setInterval(showSlidess, 3000)
}
function enter() {
    console.log("enter")
    clearInterval(sliding)
}
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var showSlidess = function () {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};
