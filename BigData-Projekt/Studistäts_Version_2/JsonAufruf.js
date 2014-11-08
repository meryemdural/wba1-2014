$(window).ready(function(){
    $("#button2").click(function(){
        var jsLang = $('#selectDiv :selected').val();
            switch (jsLang) {
        case "Baden-Württemberg":
            var index = $('#selectDiv2 :selected').val();
            $.getJSON("../JSON/baden_wurttemberg.json", function(data0){
           console.log(index);
            myDoughnut.segments[0].value = parseInt(data0.BadenWurttemberg[index]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.BadenWurttemberg[index]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.BadenWurttemberg[index]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();
            });
            break;
        case "Bayern":
            var index = $('#selectDiv2 :selected').val();
            $.getJSON("../JSON/bayern.json", function(data0){
            
            myDoughnut.segments[0].value = parseInt(data0.Bayern[index]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Bayern[index]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Bayern[index]["Deutsche Insgesamt"]);
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