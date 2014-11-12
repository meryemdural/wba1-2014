var jsonMovies = "../json_Filme/json_Filme.json";
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
        for (var i = 0; i < results.Filme.length; i++) {

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

            $("#buyBtn1").click(function () {
                $("#afterthis").after(
                  horizontalline + wrap + "<img src=" + results.Filme[0].picture + " />" + "</div>" +
                  textWrap + "<p class='title'>" + results.Filme[0].titel +
                  "</p><p class='price-info'> 10 €</p>" +
                  "<div class='item-delete'></div>" + "</div>"
              );
            });

            $("#buyBtn2").click(function () {
                $("#afterthis").after(
                 horizontalline + wrap + "<img src=" + results.Filme[1].picture + " />" + "</div>" +
                 textWrap + "<p class='title'>" + results.Filme[1].titel +
                 "</p><p class='price-info'>10 €</p>" +
                 "<div class='item-delete'>" + "</div>"
             );
            });
            $("#buyBtn3").click(function () {
                $("#afterthis").after(
                   horizontalline + wrap + "<img src=" + results.Filme[2].picture + " />" + "</div>" +
                   textWrap + "<p class='title'>" + results.Filme[2].titel +
                   "</p><p class='price-info'>" + price.id2 + "€ </p>" +
                   "<div class='item-delete'></div>" + "</div>"
               );
            });
            $("#buyBtn4").click(function () {
                $("#afterthis").after(
                   horizontalline + wrap + "<img src=" + results.Filme[3].picture + " />" + "</div>" +
                   textWrap + "<p class='title'>" + results.Filme[3].titel +
                   "</p><p class='price-info'>" + price.id1 + "€ </p>" +
                   "<div class='item-delete'></div>" + "</div>"
               );
            });
            $("#buyBtn5").click(function () {
                $("#afterthis").after(
                   horizontalline + wrap + "<img src=" + results.Filme[4].picture + " />" + "</div>" +
                   textWrap + "<p class='title'>" + results.Filme[4].titel +
                   "</p><p class='price-info'>" + price.id2 + "€ </p>" +
                   "<div class='item-delete'></div>" + "</div>"
               );
            });
            $("#buyBtn6").click(function () {
                $("#afterthis").after(
                   horizontalline + wrap + "<img src=" + results.Filme[5].picture + " />" + "</div>" +
                   textWrap + "<p class='title'>" + results.Filme[5].titel +
                   "</p><p class='price-info'>" + price.id1 + "€ </p>" +
                   "<div class='item-delete'></div>" + "</div>"
               );
            });

            break;
   
        }
    }
    function OnError(err) {
        alert(err.status + " - " + err.statusText);
    }
});


