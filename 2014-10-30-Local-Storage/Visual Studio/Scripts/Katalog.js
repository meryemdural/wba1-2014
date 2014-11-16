$(document).ready(function () {

    $.getJSON("../json_Filme/json_Filme.json", function (json) {

         window.movieList = json;

        //Get all Favorites
         for (var i = 0; i < movieList.Filme.length; i++) {
             if (movieList.Filme[i].typ == "film") {
                 if (movieList.Filme[i].genere == "Action")
                     AddActionMovie(i);
                 if (movieList.Filme[i].genere == "Drama")
                     AddDramaMovie(i);
                 if (movieList.Filme[i].genere == "Crime")
                     AddCrimeMovie(i);
             }
             if (movieList.Filme[i].typ == "serie") {
                 if (movieList.Filme[i].genere == "Sci-Fi")
                     AddSciFiSerie(i);
                 if (movieList.Filme[i].genere == "Fantasy")
                     AddFantasySerie(i);
             }
         }
    });
});


//If JS would support enums code woudl be better, just thinking ...

//Some Inline code. Not beatiful but works
function AddActionMovie(index) {
    $('#actionMovieSection').append(Add(index));
}

function AddDramaMovie(index) {
    $('#dramaMovieSection').append(Add(index));
}

function AddCrimeMovie(index) {
    $('#crimeMovieSection').append(Add(index));
}

function AddSciFiSerie(index) {
    $('#SciFiSerieSection').append(Add(index));
}

function AddFantasySerie(index) {
    $('#FantasySerieSection').append(Add(index));
}

function Add(index) {
    return '<div class="profil-container">' +
        '<h2 class="profil-titel">' + window.movieList.Filme[index].titel + '</h2>' +
        '<img class="profil-img" src=' + window.movieList.Filme[index].picture + ' />' +
        '<p class="profil-desc"> ' + window.movieList.Filme[index].description + '</p>';
}

$('.collapse-button').click(function () {

    var id = ($(this).attr('id'));

    var div = GetDivID(id);
   
    if ($(this).val() == '⇓') {
        $('#' + div).show();
        $(this).val('⇑');
    } else {
        $('#' + div).hide();
        $(this).val('⇓');
    }
    
});

function GetDivID(index) {
    if (index == 1)
        return "actionMovieSection";
    if (index == 2)
        return "dramaMovieSection";
    if (index == 3)
        return "crimeMovieSection";
    if (index == 4)
        return "SciFiSerieSection";
    if (index == 5)
        return "FantasySerieSection";
    else return "";
}