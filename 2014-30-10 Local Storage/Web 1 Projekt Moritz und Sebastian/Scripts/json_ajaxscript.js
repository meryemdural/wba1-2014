var jsonMovies = "../json_Filme/json_Filme.json";

var result;
$(document).ready(function () {

    $.ajax({
        type: "GET",
        url:  jsonMovies,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: OnSuccess, 
        error: OnError
    });

    function OnSuccess(results) {
        result = results;

        $("#flexImgBox1").append("<img src=" + results.Filme[0].picture + " />");
        $("#flexImgBox2").append("<img src=" + results.Filme[1].picture + " />");
        $("#flexImgBox3").append("<img src=" + results.Filme[2].picture + " />");
        $("#flexImgBox4").append("<img src=" + results.Filme[3].picture + " />");
        $("#flexImgBox5").append("<img src=" + results.Filme[4].picture + " />");
        $("#flexImgBox6").append("<img src=" + results.Filme[5].picture + " />");

        $("#movieTitle1").filter(":nth-child(1)").append(results.Filme[0].titel);
        $("#movieTitle2").filter(":nth-child(1)").append(results.Filme[1].titel);
        $("#movieTitle3").filter(":nth-child(1)").append(results.Filme[2].titel);
        $("#movieTitle4").filter(":nth-child(1)").append(results.Filme[3].titel);
        $("#movieTitle5").filter(":nth-child(1)").append(results.Filme[4].titel);
        $("#movieTitle6").filter(":nth-child(1)").append(results.Filme[5].titel);

        $("#info1").append(results.Filme[0].description);
        $("#info2").append(results.Filme[1].description);
        $("#info3").append(results.Filme[2].description);
        $("#info4").append(results.Filme[3].description);
        $("#info5").append(results.Filme[4].description);
        $("#info6").append(results.Filme[5].description);

        $("#buyBtn0").click(function() {
            $("#afterthis").after(AddInfo(0));
            AddToLocalStorage(0);
        });
        $("#buyBtn1").click(function() {
            $("#afterthis").after(AddInfo(1));
            AddToLocalStorage(1);
        });
        $("#buyBtn2").click(function() {
            $("#afterthis").after(AddInfo(2));
            AddToLocalStorage(2);
        });
        $("#buyBtn3").click(function() {
            $("#afterthis").after(AddInfo(3));
            AddToLocalStorage(3);
        });
        $("#buyBtn4").click(function() {
            $("#afterthis").after(AddInfo(4));
            AddToLocalStorage(4);
        });
        $("#buyBtn5").click(function() {
            $("#afterthis").after(AddInfo(5));
            AddToLocalStorage(5);
        });
    }

    function OnError(err) {
        alert(err.status + " - " + err.statusText);
    }
});


function AddInfo(index) {
    return horizontalline + wrap + "<img src=" + result.Filme[index].picture + " />" + "</div>" +
        textWrap + "<p class='title'>" + result.Filme[index].titel +
        "</p><p class='price-info'> 10 €</p>" +
        "<div class='item-delete'></div>" + "</div>";
}

function AddToLocalStorage(index) {
    
    var currentUser = localStorage.getItem('currentUser');
    
    if (currentUser === null || currentUser === '') {
        return;
    }
    
    if (localStorage.getItem(currentUser + 'FilmInChart' + index) == null || localStorage.getItem(currentUser + 'FilmFilmInChart' + index) == '') {
        localStorage.setItem(currentUser + 'FilmInChart' + index, "true");
    } else {
        localStorage.removeItem(currentUser + 'FilmInChart' + index);
    }
}


