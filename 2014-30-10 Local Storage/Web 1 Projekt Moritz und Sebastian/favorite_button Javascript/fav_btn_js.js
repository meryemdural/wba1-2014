$(document).ready(function () {


    $(".buyBtn1, .buyBtn2, .buyBtn3, .buyBtn4, .buyBtn5, .buyBtn6 ").after(

      "<input class='favorite_button' type='button' value='Favorisieren' />");

        var list = $(document.getElementsByClassName('favorite_button'));
        $.each(list, function (index, data) {

            $(this).click(function () {

                alert("geklickd" + index + "");
            });

        });

    
});