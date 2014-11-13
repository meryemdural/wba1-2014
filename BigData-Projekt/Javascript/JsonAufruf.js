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
        case "baden_wurttemberg":
            // getJSON-Funktion holt die Daten aus der .json-Datei, Aufruf der Daten mit übergebenen Parameter data0
            $.getJSON("../JSON/baden_wurttemberg.json", function(data0){
               
            // Prüfen ob die Daten vorhanden sind, Hier reicht die Überprüfung der ersten Variable

                
            // Setzen der neuen Werte und Beschriftungen
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.baden_wurttemberg[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.baden_wurttemberg[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.baden_wurttemberg[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.baden_wurttemberg[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.baden_wurttemberg[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.baden_wurttemberg[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.baden_wurttemberg[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.baden_wurttemberg[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.baden_wurttemberg[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.baden_wurttemberg[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.baden_wurttemberg[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.baden_wurttemberg[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.baden_wurttemberg[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.baden_wurttemberg[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.baden_wurttemberg[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.baden_wurttemberg[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.baden_wurttemberg[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.baden_wurttemberg[110]["Deutsche Insgesamt"]);
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
        case "bayern":
            $.getJSON("../JSON/bayern.json", function(data0){
                        // Setzen der neuen Werte und Beschriftungen
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.bayern[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.bayern[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.bayern[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.bayern[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.bayern[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.bayern[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.bayern[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.bayern[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.bayern[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.bayern[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.bayern[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.bayern[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.bayern[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.bayern[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.bayern[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.bayern[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.bayern[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.bayern[110]["Deutsche Insgesamt"]);
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
        case "brandenburg":
            $.getJSON("../JSON/brandenburg.json", function(data0){
             // Setzen der neuen Werte und Beschriftungen
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.brandenburg[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.brandenburg[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.brandenburg[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.brandenburg[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.brandenburg[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.brandenburg[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.brandenburg[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.brandenburg[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.brandenburg[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.brandenburg[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.brandenburg[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.brandenburg[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.brandenburg[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.brandenburg[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.brandenburg[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.brandenburg[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.brandenburg[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.brandenburg[110]["Deutsche Insgesamt"]);
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
        case "hessen":
            $.getJSON("../JSON/hessen.json", function(data0){
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.hessen[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.hessen[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.hessen[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.hessen[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.hessen[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.hessen[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.hessen[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.hessen[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.hessen[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.hessen[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.hessen[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.hessen[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.hessen[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.hessen[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.hessen[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.hessen[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.hessen[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.hessen[110]["Deutsche Insgesamt"]);
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
        case "nordrhein_westfalen":
            $.getJSON("../JSON/nordrhein_westfalen.json", function(data0){
                            ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.nordrhein_westfalen[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.nordrhein_westfalen[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.nordrhein_westfalen[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.nordrhein_westfalen[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.nordrhein_westfalen[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.nordrhein_westfalen[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.nordrhein_westfalen[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.nordrhein_westfalen[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.nordrhein_westfalen[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.nordrhein_westfalen[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.nordrhein_westfalen[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.nordrhein_westfalen[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.nordrhein_westfalen[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.nordrhein_westfalen[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.nordrhein_westfalen[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.nordrhein_westfalen[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.nordrhein_westfalen[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.nordrhein_westfalen[110]["Deutsche Insgesamt"]);
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
        case "saarland":
            $.getJSON("../JSON/saarland.json", function(data0){
                         ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.saarland[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.saarland[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.saarland[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.saarland[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.saarland[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.saarland[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.saarland[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.saarland[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.saarland[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.saarland[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.saarland[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.saarland[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.saarland[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.saarland[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.saarland[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.saarland[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.saarland[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.saarland[110]["Deutsche Insgesamt"]);
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
        case "sachsen_anhalt":
            $.getJSON("../JSON/sachsen_anhalt.json", function(data0){
                         ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.sachsen_anhalt[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.sachsen_anhalt[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.sachsen_anhalt[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.sachsen_anhalt[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.sachsen_anhalt[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.sachsen_anhalt[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.sachsen_anhalt[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.sachsen_anhalt[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.sachsen_anhalt[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.sachsen_anhalt[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.sachsen_anhalt[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.sachsen_anhalt[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.sachsen_anhalt[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.sachsen_anhalt[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.sachsen_anhalt[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.sachsen_anhalt[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.sachsen_anhalt[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.sachsen_anhalt[110]["Deutsche Insgesamt"]);
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
        case "schleswig_holstein":
            $.getJSON("../JSON/schleswig_holstein.json", function(data0){
                        ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.schleswig_holstein[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.schleswig_holstein[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.schleswig_holstein[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.schleswig_holstein[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.schleswig_holstein[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.schleswig_holstein[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.schleswig_holstein[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.schleswig_holstein[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.schleswig_holstein[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.schleswig_holstein[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.schleswig_holstein[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.schleswig_holstein[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.schleswig_holstein[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.schleswig_holstein[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.schleswig_holstein[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.schleswig_holstein[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.schleswig_holstein[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.schleswig_holstein[110]["Deutsche Insgesamt"]);
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
        case "thuringen":
            $.getJSON("../JSON/thuringen.json", function(data0){
                ChartActive1();
                myDoughnut1.segments[0].value = parseInt(data0.thuringen[105]["Deutsche Männlich"]);
                myDoughnut1.segments[1].value = parseInt(data0.thuringen[105]["Deutsche Weiblich"]);
                myDoughnut1.segments[2].value = parseInt(data0.thuringen[105]["Deutsche Insgesamt"]);
                myDoughnut1.segments[0].label = "Deutsche Männlich";
                myDoughnut1.segments[1].label = "Deutsche Weiblich";
                myDoughnut1.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive2();
                myDoughnut2.segments[0].value = parseInt(data0.thuringen[106]["Deutsche Männlich"]);
                myDoughnut2.segments[1].value = parseInt(data0.thuringen[106]["Deutsche Weiblich"]);
                myDoughnut2.segments[2].value = parseInt(data0.thuringen[106]["Deutsche Insgesamt"]);
                myDoughnut2.segments[0].label = "Deutsche Männlich";
                myDoughnut2.segments[1].label = "Deutsche Weiblich";
                myDoughnut2.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive3();
                myDoughnut3.segments[0].value = parseInt(data0.thuringen[107]["Deutsche Männlich"]);
                myDoughnut3.segments[1].value = parseInt(data0.thuringen[107]["Deutsche Weiblich"]);
                myDoughnut3.segments[2].value = parseInt(data0.thuringen[107]["Deutsche Insgesamt"]);
                myDoughnut3.segments[0].label = "Deutsche Männlich";
                myDoughnut3.segments[1].label = "Deutsche Weiblich";
                myDoughnut3.segments[2].label = "Deutsche Insgesamt";
                
                ChartActive4();
                myDoughnut4.segments[0].value = parseInt(data0.thuringen[108]["Deutsche Männlich"]);
                myDoughnut4.segments[1].value = parseInt(data0.thuringen[108]["Deutsche Weiblich"]);
                myDoughnut4.segments[2].value = parseInt(data0.thuringen[108]["Deutsche Insgesamt"]);
                myDoughnut4.segments[0].label = "Deutsche Männlich";
                myDoughnut4.segments[1].label = "Deutsche Weiblich";
                myDoughnut4.segments[2].label = "Deutsche Insgesamt";
            
                ChartActive5();
                myDoughnut5.segments[0].value = parseInt(data0.thuringen[109]["Deutsche Männlich"]);
                myDoughnut5.segments[1].value = parseInt(data0.thuringen[109]["Deutsche Weiblich"]);
                myDoughnut5.segments[2].value = parseInt(data0.thuringen[109]["Deutsche Insgesamt"]);
                myDoughnut5.segments[0].label = "Deutsche Männlich";
                myDoughnut5.segments[1].label = "Deutsche Weiblich";
                myDoughnut5.segments[2].label = "Deutsche Insgesamt";

                ChartActive6();
                myDoughnut6.segments[0].value = parseInt(data0.thuringen[110]["Deutsche Männlich"]);
                myDoughnut6.segments[1].value = parseInt(data0.thuringen[110]["Deutsche Weiblich"]);
                myDoughnut6.segments[2].value = parseInt(data0.thuringen[110]["Deutsche Insgesamt"]);
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