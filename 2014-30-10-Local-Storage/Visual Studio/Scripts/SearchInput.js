$(document).ready(function() {


    $('.search-button').click(function() {

        var textInput = $('#topSearchField').val();

        var data_file = "../json_Filme/json_Filme.json";

        $.ajax({
            type: "GET",
            url: data_file,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: OnSuccess,
            error: OnError
        });

        //Search in JASON file and show DropDown
        function OnSuccess(results) {
            for (var i = 0; i < results.Filme.length; i++) {

                if (results.Filme[i].titel.toLowerCase() === textInput.toLowerCase()) {
                    $(".search-button").after(
                        '<button class="search_dropdown" id"test">' +
                            ' <option value=' + textInput + '> ' + results.Filme[i].titel + ' </option>' +
                            ' </button>');
                    break;
                }
            }
        }

        function OnError(err) {
            alert(err.status + " - " + err.statusText);
        }
    });

    //Remove Dropdown when button lost focus
    $('.search-button').focusout(function () {
        $('.search_dropdown').remove();
    });
});