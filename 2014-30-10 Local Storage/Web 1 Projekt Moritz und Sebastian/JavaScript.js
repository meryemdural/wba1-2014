/* Hides Chart on page load */
$(window).load(function () {
    $("#ChartDropDown").hide();
});



var horizontalline = "<hr/>";
var wrap = "<div class='imgThumbnail'>";
var textWrap = "<div id='thumbnailTextWrap'>";

var price = {
    id1: 10,
    id2: 15
};

var actionPrice = $(document).ready(function () {
    $(".price").filter(":odd").append(price.id1 + " €");
    $(".price").filter(":even").append(price.id2 + " €");
});

var ddSlider = $(document).ready(function () {

    
    $("#arrowChart").click(function () {
        if ($("#ChartDropDown").is(":hidden")) {
            $("div").slideDown("slow");
            $("#arrowChart").css("transform:rotate(180deg)");
        } else {
            $("#ChartDropDown").slideUp("slow");
            $("#arrowChart").css("transform:rotate(90deg)");
        }
        });
   
});


var ddInput = $(document).ready(function () {
   
    var knapp1 = $("#buyBtn1").click(function () {
           
         $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath1 + " />" + "</div>" +
           textWrap + "<p class='title'>" + titles.title1 +
           "</p><p class='price-info'>" + price.id2 + "€ </p>" +
           "<div class='item-delete'></div>" + "</div>"
       );
    });
    var knapp2 = $("#buyBtn2").click(function () {
        $("#afterthis").after(
         horizontalline + wrap + "<img src=" + pictures.filePath2 + " />" + "</div>" +
         textWrap + "<p class='title'>" + titles.title2 +
         "</p><p class='price-info'>" + price.id1 + "€ </p>" +
         "<div class='item-delete'>" + "</div>"
     );
    });
    var knapp3 = $("#buyBtn3").click(function () {
        $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath3 + " />" + "</div>" +
           textWrap + "<p class='title'>" + titles.title3 +
           "</p><p class='price-info'>" + price.id2 + "€ </p>" +
           "<div class='item-delete'></div>" + "</div>"
       );
    });
    var knapp4 = $("#buyBtn4").click(function () {
        $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath4 + " />" + "</div>" +
           textWrap + "<p class='title'>" + titles.title4 +
           "</p><p class='price-info'>" + price.id1 + "€ </p>" +
           "<div class='item-delete'></div>" + "</div>"
       );
    });
    var knapp5 = $("#buyBtn5").click(function () {
        $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath5 + " />" + "</div>" +
           textWrap + "<p class='title'>" + titles.title5 +
           "</p><p class='price-info'>" + price.id2 + "€ </p>" +
           "<div class='item-delete'></div>" + "</div>"
       );
    });
    var knapp6 = $("#buyBtn6").click(function () {
        $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath6 + " />" + "</div>" +
           textWrap + "<p class='title'>" + titles.title6 +
           "</p><p class='price-info'>" + price.id1 + "€ </p>" +
           "<div class='item-delete'></div>" + "</div>"
       );
    });
});

var remove = $(document).ready(function () {

    $(".item-delete").click(function () {
    
        $("imgThumbnail thumbnailTextWrap").empty();

        //????????????????????????????????????????? o_0

    });

});






