$(window).ready(function(){
    $("#button2").click(function(){
        $.getJSON("JSON/studienanfanger_studienfach_bundeslander.json", function(data0){
          
            myDoughnut.segments[0].value = parseInt(data0.semester[1]["Deutsche MÃ¤nnlich"]);
            myDoughnut.segments[1].value = parseInt(data0.semester[1]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.semester[1]["Deutsche Insgesamt"]);
            myDoughnut.update();
        });
    });
});