$(window).ready(function(){
    $("#button2").click(function(){
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area-1").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder-1").append('<canvas id="chart-area-1" height="250" width="500"/>');
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area-2").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder-2").append('<canvas id="chart-area-2" height="250" width="500"/>');
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area-3").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder-3").append('<canvas id="chart-area-3" height="250" width="500"/>');
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area-4").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder-4").append('<canvas id="chart-area-4" height="250" width="500"/>');
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area-5").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder-5").append('<canvas id="chart-area-5" height="250" width="500"/>');
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area-6").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder-6").append('<canvas id="chart-area-6" height="250" width="500"/>');
        
        var jsLang = $('#Bundes_Doughnut :selected').val();
            switch (jsLang) {
        case "Baden-Württemberg":
            // getJSON-Funktion holt die Daten aus der .json-Datei, Aufruf der Daten mit übergebenen Parameter data0
            $.getJSON("../JSON/baden_wurttemberg.json", function(data0){
            // Prüfen ob die Daten vorhanden sind, Hier reicht die Überprüfung der ersten Variable

                
            // Setzen der neuen Werte und Beschriftungen
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.BadenWurttemberg[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.BadenWurttemberg[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.BadenWurttemberg[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.BadenWurttemberg[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.BadenWurttemberg[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.BadenWurttemberg[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.BadenWurttemberg[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.BadenWurttemberg[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.BadenWurttemberg[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.BadenWurttemberg[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.BadenWurttemberg[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.BadenWurttemberg[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.BadenWurttemberg[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.BadenWurttemberg[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.BadenWurttemberg[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.BadenWurttemberg[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.BadenWurttemberg[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.BadenWurttemberg[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        case "Bayern":
            $.getJSON("../JSON/bayern.json", function(data0){
                        // Setzen der neuen Werte und Beschriftungen
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.Bayern[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.Bayern[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.Bayern[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.Bayern[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.Bayern[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.Bayern[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.Bayern[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.Bayern[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.Bayern[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.Bayern[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.Bayern[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.Bayern[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.Bayern[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.Bayern[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.Bayern[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.Bayern[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.Bayern[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.Bayern[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        case "Brandenburg":
            $.getJSON("../JSON/brandenburg.json", function(data0){
             // Setzen der neuen Werte und Beschriftungen
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.Brandenburg[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.Brandenburg[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.Brandenburg[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.Brandenburg[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.Brandenburg[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.Brandenburg[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.Brandenburg[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.Brandenburg[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.Brandenburg[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.Brandenburg[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.Brandenburg[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.Brandenburg[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.Brandenburg[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.Brandenburg[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.Brandenburg[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.Brandenburg[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.Brandenburg[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.Brandenburg[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        case "Hessen":
            $.getJSON("../JSON/hessen.json", function(data0){
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.Hessen[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.Hessen[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.Hessen[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.Hessen[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.Hessen[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.Hessen[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.Hessen[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.Hessen[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.Hessen[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.Hessen[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.Hessen[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.Hessen[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.Hessen[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.Hessen[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.Hessen[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.Hessen[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.Hessen[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.Hessen[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        case "Nordrhein-Westfalen":
            var index1 = $('#Stud_Doughnut :selected').val();
            var neu = parseInt(105) + parseInt(index1);
            console.log(neu);
            $.getJSON("../JSON/nordrhein-westfalen.json", function(data0){
                            ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.Nordrhein_Westfalen[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.Nordrhein_Westfalen[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.Nordrhein_Westfalen[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.Nordrhein_Westfalen[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.Nordrhein_Westfalen[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.Nordrhein_Westfalen[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.Nordrhein_Westfalen[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.Nordrhein_Westfalen[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.Nordrhein_Westfalen[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.Nordrhein_Westfalen[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.Nordrhein_Westfalen[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.Nordrhein_Westfalen[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.Nordrhein_Westfalen[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.Nordrhein_Westfalen[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.Nordrhein_Westfalen[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.Nordrhein_Westfalen[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.Nordrhein_Westfalen[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.Nordrhein_Westfalen[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        case "Saarland":
            $.getJSON("../JSON/saarland.json", function(data0){
                         ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.Saarland[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.Saarland[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.Saarland[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.Saarland[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.Saarland[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.Saarland[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.Saarland[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.Saarland[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.Saarland[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.Saarland[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.Saarland[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.Saarland[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.Saarland[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.Saarland[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.Saarland[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.Saarland[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.Saarland[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.Saarland[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        case "Sachsen-Anhalt":
            $.getJSON("../JSON/sachsen-anhalt.json", function(data0){
                         ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.Sachsen_Anhalt[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.Sachsen_Anhalt[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.Sachsen_Anhalt[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.Sachsen_Anhalt[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.Sachsen_Anhalt[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.Sachsen_Anhalt[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.Sachsen_Anhalt[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.Sachsen_Anhalt[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.Sachsen_Anhalt[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.Sachsen_Anhalt[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.Sachsen_Anhalt[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.Sachsen_Anhalt[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.Sachsen_Anhalt[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.Sachsen_Anhalt[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.Sachsen_Anhalt[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.Sachsen_Anhalt[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.Sachsen_Anhalt[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.Sachsen_Anhalt[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        case "Schleswig-Holstein":
            $.getJSON("../JSON/schleswig-holstein.json", function(data0){
                        ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.Schleswig_Holstein[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.Schleswig_Holstein[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.Schleswig_Holstein[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.Schleswig_Holstein[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.Schleswig_Holstein[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.Schleswig_Holstein[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.Schleswig_Holstein[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.Schleswig_Holstein[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.Schleswig_Holstein[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.Schleswig_Holstein[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.Schleswig_Holstein[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.Schleswig_Holstein[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.Schleswig_Holstein[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.Schleswig_Holstein[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.Schleswig_Holstein[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.Schleswig_Holstein[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.Schleswig_Holstein[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.Schleswig_Holstein[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        case "Thüringen":
            $.getJSON("../JSON/thuringen.json", function(data0){
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.Thüringen[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.Thüringen[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.Thüringen[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.Thüringen[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.Thüringen[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.Thüringen[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.Thüringen[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.Thüringen[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.Thüringen[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.Thüringen[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.Thüringen[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.Thüringen[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.Thüringen[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.Thüringen[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.Thüringen[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.Thüringen[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.Thüringen[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.Thüringen[110]["Deutsche Insgesamt"]);
                myDoughnut6.segments[0].label = "Deutsche Männlich";
                myDoughnut6.segments[1].label = "Deutsche Weiblich";
                myDoughnut6.segments[2].label = "Deutsche Insgesamt";
                
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();
            myDoughnut2.update();
            myDoughnut3.update();
            myDoughnut4.update();
            myDoughnut5.update();
            myDoughnut6.update();
            });
            break;
        default:
        
           alert('Keine Datenbank vorhanden!');
        }

    });
});