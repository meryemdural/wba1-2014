$(document).ready(function () {


 $('.search-button').click(function () {

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

            function OnSuccess(results) {
                for (var i = 0; i < results.Filme.length; i++) {

                    if (results.Filme[i].titel.toLowerCase() === textInput.toLowerCase()) {
                        $(".search-button").after(
                            '<select class="search_dropdown">' +
                                 ' <option value=' + textInput + '> ' + results.Filme[i].titel + ' </option>' +
                           ' </select>' +
                            "");
                        break;
                    }
                }
            }
            function OnError(err) {
                alert(err.status + " - " + err.statusText);
            }
      });
 });