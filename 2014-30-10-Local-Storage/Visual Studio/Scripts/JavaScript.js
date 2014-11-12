//Hides Chart on page load
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






