$(document).ready(function () {

    $.getJSON("../LocalStorage/json_Filme/json_Filme.json", function (json) {

        window.movieList = json;
        
        var currentUser = localStorage.getItem('currentUser');

        if (currentUser == null || currentUser == '') {

            return;
        }

        //Get all Favorites
        for (var i = 0; i < window.movieList.Filme.length; i++) {
            // Because we work with the movie id, wich is unique it is possible to add any movie in the databae, however our button logic does not support. to see results change Local Storage Value in Browser
            if (localStorage.getItem(currentUser + 'Favorit' + window.movieList.Filme[i].id) === "true") {
                Add(i);
            }
        }
    });
});

//Some Inline code. Not beatiful but works
function Add(index) {
    $('.favorit-section').append(
        '<div class="profil-container">' +
            '<h2 class="profil-titel">' + window.movieList.Filme[index].titel + '</h2>' +
            '<img class="profil-img" src=' + window.movieList.Filme[index].picture + ' />' +
            '<p class="profil-desc"> ' + window.movieList.Filme[index].description + '</p>' +
            '<div>');
}
