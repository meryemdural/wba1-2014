$(document).ready(function () {

    $.getJSON("../json_Filme/json_Filme.json", function (json) {

        window.movieList = json;

        //Populate the Highlights Site
        for (var i = 0; i < movieList.Filme.length; i++) {
            $("#flexImgBox" + i).append("<img src=" + movieList.Filme[i].picture + " />");
            $("#movieTitle" + i).filter(":nth-child(1)").append(movieList.Filme[i].titel);
            $("#info" + i).append(movieList.Filme[i].description);
            $("#price" + i).append(movieList.Filme[i].preis + " €");
        }
    });
});