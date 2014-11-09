$(window).ready(function(){
    $("#button2").click(function(){
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder").append('<canvas id="chart-area" height="250" width="500"/>');
        
        var jsLang = $('#selectDiv :selected').val();
            switch (jsLang) {
        case "Baden-Württemberg":
            var index1 = $('#selectDiv2 :selected').val();
            var index2 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index1) + parseInt(index2);
            // getJSON-Funktion holt die Daten aus der .json-Datei, Aufruf der Daten mit übergebenen Parameter data0
            $.getJSON("../JSON/baden_wurttemberg.json", function(data0){
            // Prüfen ob die Daten vorhanden sind, Hier reicht die Überprüfung der ersten Variable
           if((data0.BadenWurttemberg[neu]["Deutsche Männlich"])==="-") alert("Keine Daten vorhanden!");
            ChartActive();
            // Setzen der neuen Werte und Beschriftungen
            myDoughnut.segments[0].value = parseInt(data0.BadenWurttemberg[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.BadenWurttemberg[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.BadenWurttemberg[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            // Aktualisiert die Doughnut-Chart
            myDoughnut.update();
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
            ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Bayern[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Bayern[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Bayern[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();
            });
            break;
        default:
            alert('Keine Datenbank vorhanden!');
        }

    });
});