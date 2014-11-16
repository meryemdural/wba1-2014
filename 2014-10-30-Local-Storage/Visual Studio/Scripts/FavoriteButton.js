//User specific favorite implementation. Writes value to Local Storage. If no user do nothing. Clicking again removes the entry from Local Storage. 
$(document).ready(function () {

    // Very bad programing but takes way too much time to adjust it to appear on each page for each movie
    $(".buy-button").after(
        "<input class='favorite_button' type='button' value='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favorit'/>");

    var list = $(document.getElementsByClassName('favorite_button'));
    $.each(list, function(id) {
        $(this).click(function () {
            var currentUser = localStorage.getItem('currentUser');

            if (currentUser === null || currentUser === '') {
                return;
            }

            if (localStorage.getItem(currentUser + 'Favorit' + id) == null || localStorage.getItem(currentUser + 'Favorit' + id) == '') {
                localStorage.setItem(currentUser + 'Favorit' + id, "true");
            } else {
                localStorage.removeItem(currentUser + 'Favorit' + id);
            }
        });
    });
});