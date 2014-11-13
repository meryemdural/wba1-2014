function vergroessern() {
document.getElementsByTagName("h1")[0].style.padding = '5px';
document.getElementsByTagName("h1")[0].style.paddingTop = '10px';
document.getElementsByTagName("body")[0].style.fontSize = '107%';
document.getElementsByTagName("body")[0].style.lineHeight = '107%';
document.getElementsByTagName("h1")[0].style.fontSize = '107%';
document.getElementsByTagName("h2")[0].style.fontSize = '107%'; //warum lässt sich nur die erste überschrift vergrössern?
}

function verkleinern() {
document.getElementsByTagName("h1")[0].style.padding = '4px';
document.getElementsByTagName("h1")[0].style.paddingTop = '6px';
document.getElementsByTagName("body")[0].style.fontSize = '13px';
document.getElementsByTagName("body")[0].style.lineHeight = '15px';
document.getElementsByTagName("h1")[0].style.fontSize = '13px';
document.getElementsByTagName("h2")[0].style.fontSize = '15px';
document.getElementsByTagName("body")[0].style.fontFamily = 'Myriad Pro';
}

function kontrast() {
document.getElementsByTagName("body")[0].style.backgroundColor = '#000';
document.getElementsByTagName("body")[0].style.color = '#fff';
document.getElementsByTagName("body")[0].style.letterSpacing = '1px';
document.getElementsByTagName("body")[0].style.fontFamily = 'Myriad Pro'; // beim Umschalten auf Kontrast ändert sich die Schrift, jedoch ändert sich nicht mehr zurück
document.getElementById("MIlogo")[0].replace = 'src="img/logo.svg"'; //wie ersetzt man ein Bild durch ein anderes?
document.getElementById("breadcrumb")[0].style.color = '#fff'; //wie wird "breadcrumb a" angesprochen?
document.getElementsByClassName("info")[0].style.color = '#fff'; //funktioniert nicht
}

//woher kommt die schwarze/weiße box am rand?

function kontrastReduzieren() {
document.getElementsByTagName("body")[0].style.backgroundColor = '#fff';
document.getElementsByTagName("body")[0].style.color = '#000';
}