(Datei mit Notepad++ geschrieben. F�r originale formatierung Np++ benutzen)

M�glichkeiten die Webseite zu �ffnen:

1.)
	Die Webseite im Ordner "Visual Studio" enth�lt alle Projektdateien und kann eigentlich nur mit Visual Studio ge�ffnet werden. Ich w�rde diese Variante empfelen, aber viele haben ja nen Mac. Die Webseite wurde auch mit VS entwickelt.

2.)
	Die Webseite im Ordner "LocalStorage" enth�lt die gleiche Webseite nur angepasst f�r einen Webserver oder nur durch klicken auf eine der 3 html Dateien. 

	Vorbereitung:	Die Webseite wurde mit Chrome und Opera (Chrome-Engine) gebaut. Chrome/Opera wird vorrausgesetzt. Firefox funktioniert nicht bzw. es sieht mies aus. IE und andere nicht gestestet.
					F�r Windows (gestestet):
											die Vernk�pfung von Chrome/Opera auf dem Desktop bearbeiten. Hinter dem Zielpfad:  "--allow-file-access-from-files --disable-web-security" (ohne Anf�hrungszeichen). 
											Bsp: ["C:\Program Files (x86)\Opera\launcher.exe" --allow-file-access-from-files --disable-web-security]
											Den Browser nun �ber diese neue Vernk�pfung starten.
											
					F�r Mac (nicht getestet, aber im Web steht das so):
											Chrome, Opera wei� ich nicht ob der bei Mac schon mit der Chrome Engine ist, muss erstmal nicht ge�ffnet sein.
											Dann Chrome �ber folgenden Terminal Befehl aufrufen: open /Applications/Google\ Chrome.app --args --allow-file-access-from-files --disable-web-security
											Link hierzu: http://blog.derraab.com/2013/05/30/start-google-chrome-with-local-file-access-on-mac-os-x/
		

	Ausf�rhung: 
				
				Die einfachste M�glichkeit ist nun eine der .html Dateien zu �ffnen. 
					
				Oder man erichtet auf LocalHost einen server zb. mit dem Tool XAMPP (Skype evtl ausschalten wenn Appache nicht angehen will)
					
					
										
										
				Die Webseite funktioniert nur wenn die Ordnerstruktur nicht ver�ndert wird. Wir haben zum Testen die Seite mittels XAMPP auf Localhost gestestet.
				
				Wichtig ist einfach, dass die Dateien im Ordner "LocalStorage" bleiben m�ssen. Wo der ordner wiederum liegt ist egal.

				Bsp:
				/...
				|
				|-/LocalStorage
				  |
				  |-/images/
				  |-/jqueryRAW/
				  |-/Scripts/
				  |-/StyleSheets/
				  |-/videoLaden-Heiglights.html
				  |-/(all other files and folders)

				


