(Datei mit Notepad++ geschrieben. Für originale formatierung Np++ benutzen)

Möglichkeiten die Webseite zu öffnen:

1.)
	Die Webseite im Ordner "Visual Studio" enthält alle Projektdateien und kann eigentlich nur mit Visual Studio geöffnet werden. Ich würde diese Variante empfelen, aber viele haben ja nen Mac. Die Webseite wurde auch mit VS entwickelt.

2.)
	Die Webseite im Ordner "LocalStorage" enthält die gleiche Webseite nur angepasst für einen Webserver oder nur durch klicken auf eine der 3 html Dateien. 

	Vorbereitung:	Die Webseite wurde mit Chrome und Opera (Chrome-Engine) gebaut. Chrome/Opera wird vorrausgesetzt. Firefox funktioniert nicht bzw. es sieht mies aus. IE und andere nicht gestestet.
					Für Windows (gestestet):
											die Vernküpfung von Chrome/Opera auf dem Desktop bearbeiten. Hinter dem Zielpfad:  "--allow-file-access-from-files --disable-web-security" (ohne Anführungszeichen). 
											Bsp: ["C:\Program Files (x86)\Opera\launcher.exe" --allow-file-access-from-files --disable-web-security]
											Den Browser nun über diese neue Vernküpfung starten.
											
					Für Mac (nicht getestet, aber im Web steht das so):
											Chrome, Opera weiß ich nicht ob der bei Mac schon mit der Chrome Engine ist, muss erstmal nicht geöffnet sein.
											Dann Chrome über folgenden Terminal Befehl aufrufen: open /Applications/Google\ Chrome.app --args --allow-file-access-from-files --disable-web-security
											Link hierzu: http://blog.derraab.com/2013/05/30/start-google-chrome-with-local-file-access-on-mac-os-x/
		

	Ausfürhung: 
				
				Die einfachste Möglichkeit ist nun eine der .html Dateien zu öffnen. 
					
				Oder man erichtet auf LocalHost einen server zb. mit dem Tool XAMPP (Skype evtl ausschalten wenn Appache nicht angehen will)
					
					
										
										
				Die Webseite funktioniert nur wenn die Ordnerstruktur nicht verändert wird. Wir haben zum Testen die Seite mittels XAMPP auf Localhost gestestet.
				
				Wichtig ist einfach, dass die Dateien im Ordner "LocalStorage" bleiben müssen. Wo der ordner wiederum liegt ist egal.

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

				


