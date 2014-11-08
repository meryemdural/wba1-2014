$(window).ready(function(){
    $("#selectDiv").click(function(){
        var jsLang = $('#selectDiv :selected').val();
            switch (jsLang) {
        case "Baden-WÂ¸rttemberg":
            $.getJSON("JSON/studienanfanger_studienfach_bundeslander.json", function(data0){
            myDoughnut.segments[0].value = parseInt(data0.semester[1]["Deutsche MÃ¤nnlich"]);
            myDoughnut.segments[1].value = parseInt(data0.semester[1]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.semester[1]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            myDoughnut.update();
            });
            break;
        case "Bayern":
            $.getJSON("JSON/studienanfanger_studienfach_bundeslander.json", function(data0){
            myDoughnut.segments[0].value = parseInt(data0.semester[8]["Deutsche MÃ¤nnlich"]);
            myDoughnut.segments[1].value = parseInt(data0.semester[8]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.semester[8]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            myDoughnut.update();
            });
            break;
        case "mootools":
            alert('mootools Wins!');
            break;     
        case "dojo":
            alert('dojo Wins!');
            break;
        default:
            alert('Nobody Wins!');
        }

    });
});