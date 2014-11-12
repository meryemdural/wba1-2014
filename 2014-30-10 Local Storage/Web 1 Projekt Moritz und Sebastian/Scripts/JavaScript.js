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


var logout = $(document).ready(function () {


    $("#arrowProfile").click(function () {
        localStorage.removeItem('currentUser');
        document.getElementById('profilName').innerHTML = localStorage.getItem('currentUser');
        location.reload();
    });

});




