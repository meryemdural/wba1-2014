// Main document for Local Storage Logic

$(document).ready(function () {
    Login();
});

//Login Logic
function Login() {

    //If a user is logged in just write his Name in UserMenu
    if (localStorage.getItem('currentUser') != null) {
        document.getElementById('profilName').innerHTML = localStorage.getItem('currentUser');
        return;
    }
    
    var uname = prompt('Enter Your Name');

    //If Not entered do nothing and return.
    if (uname === null || uname === '') {
        return;
    }

    //Setup a user and Update currentUser
    localStorage.setItem('user' + uname, uname);
    localStorage.setItem('currentUser', uname);
    document.getElementById('profilName').innerHTML = localStorage.getItem('currentUser');
}


//Loging out by deleting CurrentUser Item. 
var logout = $(document).ready(function () {

    $("#arrowProfile").click(function () {
        localStorage.removeItem('currentUser');
        document.getElementById('profilName').innerHTML = localStorage.getItem('currentUser');
        location.reload();
    });

});