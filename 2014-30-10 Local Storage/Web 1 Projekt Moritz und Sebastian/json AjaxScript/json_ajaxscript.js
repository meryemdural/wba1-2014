﻿
var data_file = "../json_Filme/json_Filme.json";

$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: data_file,
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

            break;
   
        }
    }
    function OnError(err) {
        alert(err.status + " - " + err.statusText);
    }
});

