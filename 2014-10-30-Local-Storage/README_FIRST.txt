Die Webseite im Ordner "Visual Studio" enthält alle Projektdateien und kann eigentlich nur mit Visual Stio geöffnet werden. 
Die Webseite im Ordner "LocalStorage" enthält die finale Webseite. Die Webseite funktioniert nur wenn die Ordnerstruktur nicht verändert wird. Wir haben zum Testen die Seite mittels XAMPP auf Localhost gestestet.
Folgene Struktur muss eingehalten werden:

/LocalHost
|
|-/LocalStorage
  |
  |-/images/
  |-/jqueryRAW/
  |-/Scripts/
  |-/StyleSheets/
  |-/videoLaden-Heiglights.html
  |-/(...)

im Browser wird die Seite also so aufgerufen: 127.0.0.1/LocalStorage/videoLaden-Heiglights.html

WICHTIG: Die seite kann NICHT OHNE Server aufgerufen werden. Da ein Ajax-zugriff auf die Json-Datei nur über HTTP-Request klappt und nicht mittels Dateisystemzugriff


