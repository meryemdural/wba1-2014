$(document).ready(function () {


    if (localStorage.getItem('userName') === '' || localStorage.getItem('userName') === null) {

        var uname = prompt('Enter Your Name');
        localStorage.setItem('userName', uname);
        document.getElementById(userName).innerHTML = uname;
    
    } else {
        document.getElementById('idProfil').innerHTML = localStorage.getItem('userName');
    }
    
});