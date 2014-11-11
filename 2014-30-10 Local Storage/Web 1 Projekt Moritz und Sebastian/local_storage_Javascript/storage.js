// Main document for Local Storage Logic

$(document).ready(function () {


    if (localStorage.getItem('userName') === '' || localStorage.getItem('userName') === null) {

        var uname = prompt('Enter Your Name');
        localStorage.setItem('userName', uname);
        document.getElementById('profilName').innerHTML = uname;
    
    } else {
        document.getElementById('profilName').innerHTML = localStorage.getItem('userName');
    }
    
});