function kontrast() {
document.getElementsByTagName("h1")[0].style.fontSize = '140%';
document.getElementsByTagName("h1")[0].style.padding = '5px';
document.getElementsByTagName("h1")[0].style.paddingTop = '10px';
document.getElementsByTagName("h2")[0].style.fontSize = '140%'; //nur die erste h2 funktioniert
document.getElementsByName("navigation").style.fontSize = "120%"; //funktioniert nicht. wie wird der text angesprochen?
}