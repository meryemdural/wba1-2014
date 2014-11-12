// Main document for Local Storage Logic

$(document).ready(function () {
    StorageLoad2();
});

function StorageLoad() {
    if (localStorage.getItem('userName') === '' || localStorage.getItem('userName') === null) {

        var uname = prompt('Enter Your Name');
        localStorage.setItem('userName', uname);
        document.getElementById('profilName').innerHTML = uname;

    } else {
        document.getElementById('profilName').innerHTML = localStorage.getItem('userName');
    }
}

function StorageLoad2() {

    if (localStorage.getItem('currentUser') != null) {
        document.getElementById('profilName').innerHTML = localStorage.getItem('currentUser');
        return;
    }

    var uname = prompt('Enter Your Name');

    if (uname === null || uname === '') {
        return;
    }

    localStorage.setItem('user' + uname, uname);
    localStorage.setItem('currentUser', uname);
    document.getElementById('profilName').innerHTML = localStorage.getItem('currentUser');
}