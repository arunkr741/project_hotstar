let key = "b4ca5947";
    var slideIndexes = 1;

    var data = fetch(`http://www.omdbapi.com/?apikey=${key}&s=batman`)
        .then((res) => res.json())
        .then(data => display_hotData(data));


    function display_hotData(data) {
        var searching = data.Search;
        searching.forEach(indivData => {
            var { Title, Poster, imdbID ,Year} = indivData
            // console.log(Title);

            let results_hot = document.querySelector(".container");

            let movie_div = document.createElement("div");
            movie_div.setAttribute("class", "movieDiv")

            let posterimg = document.createElement("img");
            posterimg.setAttribute("src", Poster)
            posterimg.setAttribute("class", "posterimgage")


            var teamText = document.createElement("div")
            teamText.setAttribute("class", "imageDescrip")


            var imageDescrip = document.createElement("p");
            imageDescrip.setAttribute("class", "imageDescrip")
            imageDescrip.innerText = `${Title}`
            imageDescrip.style.fontSize = "12px"
            imageDescrip.style.color = "white"

            imageDescrip.style.fontWeight = "bold"

            // imageDescrip.innerText = `${Title} ${imdbID}`

            // here some problem
            var imageDescriHead = document.createElement("p");
            // imageDescriHead.setAttribute("class", "imageDescrip")
            imageDescriHead.innerText = `${Year}`
            // end here some problem



            var watchbtn = document.createElement("button");
            watchbtn.setAttribute("class", "imageDesc");
            watchbtn.textContent = "\n" + "+ watchlist";
            watchbtn.style.fontSize = "12px";
            watchbtn.style.boxSizing = "borderbox"
            watchbtn.style.borderBottom = "1px solid transparent"
            watchbtn.style.borderTopLeftRadius = "5px";
            watchbtn.style.borderTopRightRadius = "5px";
            watchbtn.style.borderBottomLeftRadius = "5px";
            watchbtn.style.outline = "rgb(31, 128, 224) none 0px"
            watchbtn.style.width = "100%"
            watchbtn.style.cursor = "pointer";
            watchbtn.style.backgroundColor = "#b1b1b1";
            watchbtn.style.color = "white";
            watchbtn.style.fontSize = "bold";
            
            


            imageDescrip.append(imageDescriHead, watchbtn)
            teamText.append(imageDescrip);


            movie_div.append(posterimg, teamText);
            results_hot.append(movie_div)

        });
    }





    // 2

    var data2 = fetch(`http://www.omdbapi.com/?apikey=${key}&s=max`)
        .then((res) => res.json())
        .then(data => display_hotData2(data));


    function display_hotData2(data) {
        var searching = data.Search;
        searching.forEach(indivData => {
            var { Title, Poster, Year } = indivData
            // console.log(Title);

            let results_hot2 = document.querySelector(".container2");

            let movie_div = document.createElement("div");
            movie_div.setAttribute("class", "movieDiv")

            let posterimg = document.createElement("img");
            posterimg.setAttribute("src", Poster)
            posterimg.setAttribute("class", "posterimgage")


            var teamText = document.createElement("div")
            teamText.setAttribute("class", "imageDescrip")


            var imageDescrip = document.createElement("p");
            imageDescrip.setAttribute("class", "imageDescrip")
            imageDescrip.innerText = `${Title}`
            imageDescrip.style.fontSize = "12px"
            imageDescrip.style.color = "white"

            imageDescrip.style.fontWeight = "bold"

            // imageDescrip.innerText = `${Title} ${imdbID}`

            // here some problem
            var imageDescriHead = document.createElement("p");
            // imageDescriHead.setAttribute("class", "imageDescrip")
            imageDescriHead.innerText = `${Year}`
            // end here some problem



            var watchbtn = document.createElement("button");
            watchbtn.setAttribute("class", "imageDesc");
            watchbtn.textContent = "\n" + "+ watchlist";
            watchbtn.style.fontSize = "12px";
            watchbtn.style.boxSizing = "borderbox"
            watchbtn.style.borderBottom = "1px solid transparent"
            watchbtn.style.borderTopLeftRadius = "5px";
            watchbtn.style.borderTopRightRadius = "5px";
            watchbtn.style.borderBottomLeftRadius = "5px";
            watchbtn.style.outline = "rgb(31, 128, 224) none 0px"
            watchbtn.style.width = "100%"
            watchbtn.style.cursor = "pointer";
            watchbtn.style.backgroundColor = "#b1b1b1";
            watchbtn.style.color = "white";
            watchbtn.style.fontSize = "bold";
            
            


            imageDescrip.append(imageDescriHead, watchbtn)
            teamText.append(imageDescrip);




            movie_div.append(posterimg, teamText);
            results_hot2.append(movie_div)

        });
    }



    // 3



    var data3 = fetch(`http://www.omdbapi.com/?apikey=${key}&s=wolverine`)
        .then((res) => res.json())
        .then(data => display_hotData3(data));


    function display_hotData3(data) {
        var searching = data.Search;
        searching.forEach(indivData => {
            var { Title, Poster, Year } = indivData
            // console.log(Title);

            let results_hot3 = document.querySelector(".container3");

            let movie_div = document.createElement("div");
            movie_div.setAttribute("class", "movieDiv")

            let posterimg = document.createElement("img");
            posterimg.setAttribute("src", Poster)
            posterimg.setAttribute("id", "posterimgage")


            var teamText = document.createElement("div")
            teamText.setAttribute("class", "imageDescrip")


            var imageDescrip = document.createElement("p");
            imageDescrip.setAttribute("class", "imageDescrip")
            imageDescrip.innerText = `${Title}`
            imageDescrip.style.fontSize = "12px"
            imageDescrip.style.color = "white"

            imageDescrip.style.fontWeight = "bold"

            // imageDescrip.innerText = `${Title} ${imdbID}`

            // here some problem
            var imageDescriHead = document.createElement("p");
            // imageDescriHead.setAttribute("class", "imageDescrip")
            imageDescriHead.innerText = `${Year}`
            // end here some problem



            var watchbtn = document.createElement("button");
            watchbtn.setAttribute("class", "imageDesc");
            watchbtn.textContent = "\n" + "+ watchlist";
            watchbtn.style.fontSize = "12px";
            watchbtn.style.boxSizing = "borderbox"
            watchbtn.style.borderBottom = "1px solid transparent"
            watchbtn.style.borderTopLeftRadius = "5px";
            watchbtn.style.borderTopRightRadius = "5px";
            watchbtn.style.borderBottomLeftRadius = "5px";
            watchbtn.style.outline = "rgb(31, 128, 224) none 0px"
            watchbtn.style.width = "100%"
            watchbtn.style.cursor = "pointer";
            watchbtn.style.backgroundColor = "#b1b1b1";
            watchbtn.style.color = "white";
            watchbtn.style.fontSize = "bold";
            
            


            imageDescrip.append(imageDescriHead, watchbtn)
            teamText.append(imageDescrip);



            movie_div.append(posterimg, teamText);
            results_hot3.append(movie_div)

        });
    }





    var data4 = fetch(`http://www.omdbapi.com/?apikey=${key}&s=cartoon`)
        .then((res) => res.json())
        .then(data => display_hotData4(data));



    function display_hotData4(data) {
        var searching = data.Search;
        searching.forEach(indivData => {
            var { Title, Poster ,Year} = indivData
            // console.log(Title);

            let results_hot4 = document.querySelector(".container4");

            let movie_div = document.createElement("div");
            movie_div.setAttribute("class", "movieDiv")

            let posterimg = document.createElement("img");
            posterimg.setAttribute("src", Poster)
            posterimg.setAttribute("id", "posterimgage")


            var teamText = document.createElement("div")
            teamText.setAttribute("class", "imageDescrip")


            var imageDescrip = document.createElement("p");
            imageDescrip.setAttribute("class", "imageDescrip")
            imageDescrip.innerText = `${Title}`
            imageDescrip.style.fontSize = "12px"
            imageDescrip.style.color = "white"

            imageDescrip.style.fontWeight = "bold"

            // imageDescrip.innerText = `${Title} ${imdbID}`

            // here some problem
            var imageDescriHead = document.createElement("p");
            // imageDescriHead.setAttribute("class", "imageDescrip")
            imageDescriHead.innerText = `${Year}`
            // end here some problem



            var watchbtn = document.createElement("button");
            watchbtn.setAttribute("class", "imageDesc");
            watchbtn.textContent = "\n" + "+ watchlist";
            watchbtn.style.fontSize = "12px";
            watchbtn.style.boxSizing = "borderbox"
            watchbtn.style.borderBottom = "1px solid transparent"
            watchbtn.style.borderTopLeftRadius = "5px";
            watchbtn.style.borderTopRightRadius = "5px";
            watchbtn.style.borderBottomLeftRadius = "5px";
            watchbtn.style.outline = "rgb(31, 128, 224) none 0px"
            watchbtn.style.width = "100%"
            watchbtn.style.cursor = "pointer";
            watchbtn.style.backgroundColor = "#b1b1b1";
            watchbtn.style.color = "white";
            watchbtn.style.fontSize = "bold";
            
            


            imageDescrip.append(imageDescriHead, watchbtn)
            teamText.append(imageDescrip);


            movie_div.append(posterimg, teamText);
            results_hot4.append(movie_div)

        });
    }