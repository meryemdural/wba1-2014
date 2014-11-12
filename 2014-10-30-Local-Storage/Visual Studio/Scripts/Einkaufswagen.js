var result;
//Init Code
$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "../json_Filme/json_Filme.json",
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
            AddToChart(0);
        });
        $("#buyBtn1").click(function() {
            AddToChart(1);
        });
        $("#buyBtn2").click(function() {
            AddToChart(2);
        });
        $("#buyBtn3").click(function() {
            AddToChart(3);
        });
        $("#buyBtn4").click(function() {
            AddToChart(4);
        });
        $("#buyBtn5").click(function() {
            AddToChart(5);
        });
    }

    function OnError(err) {
        alert(err.status + " - " + err.statusText);
    }
});

function AddInfo(index) {
    
    return "<div class='ChartContainer'>" + horizontalline + wrap + "<img src=" + result.Filme[index].picture + " />" + "</div>" +
        textWrap + "<p class='title'>" + result.Filme[index].titel +
        "</p><p class='price-info'>" + result.Filme[index].preis+ " €</p>" +
        "<div class='correct-space'></div>" + "</div></div>";
}

//Adds a movie to Local Storage. If no user do nothing. Clicking again removes the entry from Local Storage
function AddToChart(index) {
    
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

//Populates Chart with Items which are preselected to buy. Shows or Hides Dropdown
$(document).ready(function() {
    $("#arrowChart").click(function() {

        var currentUser = localStorage.getItem('currentUser');

        //If no user is logged in just show default dropdown
        if (currentUser === null || currentUser === '') {
            if ($("#ChartDropDown").is(":hidden")) {
                $("div").slideDown("slow");
            } else {
                $("#ChartDropDown").slideUp("slow");
            }

            //If user is logged in load movies in chart into dropdown when dropping down. When dropping up remove those items from list but not from local stroage
        } else {
            if ($("#ChartDropDown").is(":hidden")) {
                for (var i = 0; i < 6; i++) {
                    if (localStorage.getItem(currentUser + 'FilmInChart' + i) === "true") {
                        $("#afterthis").after(AddInfo(i));
                    }
                }
                $("div").slideDown("slow");
            } else {    
                $("#ChartDropDown").slideUp("slow");
                $('.ChartContainer').remove();
            }
        }

    });

});


