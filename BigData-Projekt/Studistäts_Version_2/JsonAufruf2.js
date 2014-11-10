$(window).ready(function(){
    $("#button2").click(function(){
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area1").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder1").append('<canvas id="chart-area1" height="250" width="500"/>');
        
        var jsLang = $('#selectDiv1 :selected').val();
            switch (jsLang) {
        case "Baden-Württemberg":
            var index1 = $('#selectDiv2 :selected').val();
            var index2 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index1) + parseInt(index2);
            console.log(index2+index1);
            console.log(neu);
            // getJSON-Funktion holt die Daten aus der .json-Datei, Aufruf der Daten mit übergebenen Parameter data0
            $.getJSON("../JSON/baden_wurttemberg.json", function(data0){
            // Prüfen ob die Daten vorhanden sind, Hier reicht die Überprüfung der ersten Variable
           if((data0.BadenWurttemberg[neu]["Deutsche Männlich"])==="-") alert("Keine Daten vorhanden!");
           else{ ChartActive1();
            // Setzen der neuen Werte und Beschriftungen
            myDoughnut1.segments[0].value = parseInt(data0.BadenWurttemberg[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.BadenWurttemberg[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.BadenWurttemberg[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            // Aktualisiert die Doughnut-Chart
            myDoughnut1.update();}
            });
            break;
        case "Bayern":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/bayern.json", function(data0){
            if(data0.Bayern[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Bayern[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Bayern[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Bayern[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;            
        case "Berlin":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/berlin.json", function(data0){
            if(data0.Berlin[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Berlin[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Berlin[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Berlin[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Brandenburg":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/brandenburg.json", function(data0){
            if(data0.Brandenburg[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Brandenburg[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Brandenburg[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Brandenburg[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Bremen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/bremen.json", function(data0){
            if(data0.Bremen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Bremen[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Bremen[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Bremen[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;   
        case "Hamburg":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/hamburg.json", function(data0){
            if(data0.Hamburg[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Hamburg[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Hamburg[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Hamburg[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Hessen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/hessen.json", function(data0){
            if(data0.Hessen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Hessen[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Hessen[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Hessen[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Mecklenburg-Vorpommern":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/mecklenburg-vorpommern.json", function(data0){
            if(data0.Mecklenburg_Vorpommern[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Niedersachsen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/niedersachsen.json", function(data0){
            if(data0.Niedersachsen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Niedersachsen[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Niedersachsen[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Niedersachsen[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Nordrhein-Westfalen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/nordrhein-westfalen.json", function(data0){
            if(data0.Nordrhein_Westfalen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Rheinland-Pfalz":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/rheinland-pfalz.json", function(data0){
            if(data0.Rheinland_Pfalz[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Saarland":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/saarland.json", function(data0){
            if(data0.Saarland[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Saarland[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Saarland[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Saarland[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Sachsen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/sachsen.json", function(data0){
            if(data0.Sachsen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Sachsen[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Sachsen[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Sachsen[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Sachsen-Anhalt":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/sachsen-anhalt.json", function(data0){
            if(data0.Sachsen_Anhalt[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Schleswig-Holstein":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/schleswig-holstein.json", function(data0){
            if(data0.Schleswig_Holstein[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        case "Thüringen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/thuringen.json", function(data0){
            if(data0.Thüringen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive1();
            myDoughnut1.segments[0].value = parseInt(data0.Thüringen[neu]["Deutsche Männlich"]);
            myDoughnut1.segments[1].value = parseInt(data0.Thüringen[neu]["Deutsche Weiblich"]);
            myDoughnut1.segments[2].value = parseInt(data0.Thüringen[neu]["Deutsche Insgesamt"]);
            myDoughnut1.segments[0].label = "Deutsche Männlich";
            myDoughnut1.segments[1].label = "Deutsche Weiblich";
            myDoughnut1.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut1.update();}
            });
            break;
        default:
            alert('Keine Datenbank vorhanden!');
        }

    });
});