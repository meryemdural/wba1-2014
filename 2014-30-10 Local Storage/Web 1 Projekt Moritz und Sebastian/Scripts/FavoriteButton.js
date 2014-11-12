$(document).ready(function () {


    $(".buy-button").after(

      "<input class='favorite_button' type='button' value='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favorit'/>");

        var list = $(document.getElementsByClassName('favorite_button'));
    $.each(list, function(index, data) {

        $(this).click(function() {
            var currentUser = localStorage.getItem('currentUser');
            
            if (currentUser === null || currentUser === '') {
                return;
            }
            
            if (localStorage.getItem(currentUser + 'Favorit' + index) == null || localStorage.getItem(currentUser + 'Favorit' + index) == '') {
                localStorage.setItem(currentUser + 'Favorit' + index, "true");
            } else {
                localStorage.removeItem(currentUser + 'Favorit' + index);
            }
        });
    });
});