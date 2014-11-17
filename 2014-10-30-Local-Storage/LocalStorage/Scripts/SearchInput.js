$('.search-button').click(function() {

    var textInput = $('#topSearchField').val();

    if (textInput.length <= 3) {
        alert("Bitte einen Text größer als 3 Zeichen eingeben");
        return;
    }


    $.getJSON("../LocalStorage/json_Filme/json_Filme.json", function(json) {

        //Clear list first
        $('.search_dropdown').remove();

        document.movieList = json;
        var found = false;
        for (var i = 0; i < window.movieList.Filme.length; i++) {

            // Now this is cool! When we search for "Star" if gives us of course "Star Wars: ... "but also "The fault in our stars"
            if (window.movieList.Filme[i].titel.toLowerCase().indexOf(textInput.toLowerCase()) > -1) {

                var option = document.createElement("option");
                option.text = window.movieList.Filme[i].titel;
                option.className = "search_dropdown";

                var select = document.getElementById("SearchMenu");
                select.appendChild(option);

                found = true;
            }
        }
        if (!found)
            alert("Film konnte nicht gefunden werden");

    });
});

    //Remove Dropdown when button lost focus
$('.search-button').focusout(function() {
    $('.search_dropdown').remove();
});