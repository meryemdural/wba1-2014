$(window).ready(function(){
    $("#button1").click(function(){
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder").append('<canvas id="chart-area" height="250" width="500"/>');
        
        var jsLang = $('#Bundes_LineChart :selected').val();
            switch (jsLang) {
        case "baden_wurttemberg":
            var index1 = $('#Stud_LineChart :selected').val();
            var index3 = $('#Bundes2_LineChart :selected').val();
            var neu = index3;
            ChartActive15();
            // getJSON-Funktion holt die Daten aus der .json-Datei, Aufruf der Daten mit übergebenen Parameter data0
            $.getJSON("../JSON/baden_wurttemberg.json", function(data0){
                 $.getJSON("../JSON/studienanfanger_bundeslander.json", function(data1){
                     $.getJSON("../JSON/"+ neu +".json", function(data2){
                         var erste = parseInt(data0.baden_wurttemberg[3]["Insgesamt"]);
                         var zweite = parseInt(data1.Studienanfaenger_Bundesland[0]["Insgesamt"]);
                         var dritte = parseInt(data0.neu[0]["Insgesamt"]);
                         console.log(erste);
                         console.log(zweite);
            // Prüfen ob die Daten vorhanden sind, Hier reicht die Überprüfung der ersten Variable
            myLineChart.datasets[0].points[0].value = parseInt(((erste * 100) / zweite)*100);
            myLineChart.datasets[1].points[0].value = ((zweite*100) / zweite)*100;
            // Aktualisiert die Doughnut-Chart
            myLineChart.update();
                     });
                 });
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Bayern[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Bayern[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Bayern[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Berlin[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Berlin[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Berlin[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Brandenburg[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Brandenburg[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Brandenburg[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Bremen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Bremen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Bremen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Hamburg[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Hamburg[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Hamburg[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Hessen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Hessen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Hessen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Niedersachsen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Niedersachsen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Niedersachsen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Saarland[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Saarland[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Saarland[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Sachsen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Sachsen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Sachsen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
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
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Thüringen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Thüringen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Thüringen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        default:
            alert('Keine Datenbank vorhanden!');
        }

    });
});