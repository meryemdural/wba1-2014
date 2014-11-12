var result;
$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "../json_Filme/json_Filme.json",
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: OnSuccess,
    });

    function OnSuccess(results) {
        result = results;

        var currentUser = localStorage.getItem('currentUser');

        if (currentUser == null || currentUser == '') {

            return;
        }

        for (var i = 0; i < 5; i++) {
            if (localStorage.getItem(currentUser + 'Favorit' + i) === "true") {
                Add(i)
            }
        }
    }
});

function Add(index) {
    $('.favorit-section').append(
             '<div class="mezzomix_ist_geil">' +
                   '<h2 class="mein_profil_titel">' + result.Filme[index].titel + '</h2>' +
                   '<img class="mein_profil_img" src=' + result.Filme[index].picture + ' />' +
                    '<p class="mein_profil_desc"> ' + result.Filme[index].description + '</p>' +
               '<div>'  );
}
