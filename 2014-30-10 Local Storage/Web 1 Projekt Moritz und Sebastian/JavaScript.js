$(window).load(function () {
    $("#ChartDropDown").hide();
});

var horizontalline = "<hr/>";
var wrap = "<div id='imgThumbnail'>";
var textWrap = "<div id='thumbnailTextWrap'>";

var price = {
    id1: 10,
    id2: 15
};

var pictures = {
    filePath1: "images/worlds_end.jpg",
    filePath2: "images/home_front.jpg",
    filePath3: "images/grand_master.jpg",
    filePath4: "images/machete_kills.jpg",    
    filePath5: "images/the_godfather.jpg",
    filePath6: "images/schindlers_list.jpg"

};

var titteler = {
    tittel1: "The World's End",
    tittel2: "Homefront",
    tittel3: "Yi dai zong shi",
    tittel4: "Machete Kills",
    tittel5: "The Godfather",
    tittel6: "Schindler's List"
  
};

var beskrivelse = {
    info1: "Five friends who reunite in an attempt to top their epic pub crawl from 20 years earlier unwittingly become humankind's only hope for survival",
    info2: "A former DEA agent moves his family to a quiet town, where he soon tangles with a local meth druglord.",
    info3: "The story of martial-arts master Ip Man, the man who trained Bruce Lee.",
    info4: "The U.S. government recruits Machete to battle his way through Mexico in order to take down an arms dealer who looks to launch a weapon into space.",
    info5: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    info6: "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
    
};

var actionPriser = $(document).ready(function () {
    $(".price").filter(":odd").append(price.id1);
    $(".price").filter(":even").append(price.id2);
});

var actionBilder = $(document).ready(function () { 
    $("#flexImgBox").append("<img src="  + pictures.filePath1 + " />");
    $("#flexImgBox2").append("<img src=" + pictures.filePath2 + " />");
    $("#flexImgBox3").append("<img src=" + pictures.filePath3 + " />");
    $("#flexImgBox4").append("<img src=" + pictures.filePath4 + " />");
    $("#flexImgBox5").append("<img src=" + pictures.filePath5 + " />");
    $("#flexImgBox6").append("<img src=" + pictures.filePath6 + " />");
});

var actionTittel = $(document).ready(function () {
    $(".seksjonsTittel1").filter(":nth-child(1)").append(titteler.tittel1);
    $(".seksjonsTittel2").filter(":nth-child(1)").append(titteler.tittel2);
    $(".seksjonsTittel3").filter(":nth-child(1)").append(titteler.tittel3);
    $(".seksjonsTittel4").filter(":nth-child(1)").append(titteler.tittel4);
    $(".seksjonsTittel5").filter(":nth-child(1)").append(titteler.tittel5);
    $(".seksjonsTittel6").filter(":nth-child(1)").append(titteler.tittel6);
});

var actionTittel = $(document).ready(function () {
    $(".info1").append(beskrivelse.info1);
    $(".info2").append(beskrivelse.info2);
    $(".info3").append(beskrivelse.info3);
    $(".info4").append(beskrivelse.info4);
    $(".info5").append(beskrivelse.info5);
    $(".info6").append(beskrivelse.info6);
});

var ddSlider = $(document).ready(function () {

    
    $("#arrowChart").click(function () {
        if ($("#ChartDropDown").is(":hidden")) {
            $("div").slideDown("slow");
            $("#arrowChart").css("transform:rotate(180deg)");
        } else {
            $("#ChartDropDown").slideUp("slow");
            $("#arrowChart").css("transform:rotate(90deg)");
        }
        });
   
});


var ddInput = $(document).ready(function () {
   
    var knapp1 = $(".buyBtn1").click(function () {
           
         $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath1 + " />" + "</div>" +
           textWrap + "<p id='tittel'>" + titteler.tittel1 +
           "</p><p class='thumbnailpris'>Kr " + price.id2 + " </p>" +
           "<div id='slettKnapp'></div>" + "</div>"
       );
    });
    var knapp2 = $(".buyBtn2").click(function () {
        $("#afterthis").after(
         horizontalline + wrap + "<img src=" + pictures.filePath2 + " />" + "</div>" +
         textWrap + "<p id='tittel'>" + titteler.tittel2 +
         "</p><p class='thumbnailpris'>Kr " + price.id1 + " </p>" +
         "<div id='slettKnapp'>" +  "</div>"
     );
    });
    var knapp3 = $(".buyBtn3").click(function () {
        $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath3 + " />" + "</div>" +
           textWrap + "<p id='tittel'>" + titteler.tittel3 +
           "</p><p class='thumbnailpris'>Kr " + price.id2 + " </p>" +
           "<div id='slettKnapp'></div>" + "</div>"
       );
    });
    var knapp4 = $(".buyBtn4").click(function () {
        $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath4 + " />" + "</div>" +
           textWrap + "<p id='tittel'>" + titteler.tittel4 +
           "</p><p class='thumbnailpris'>Kr " + price.id1 + " </p>" +
           "<div id='slettKnapp'></div>" + "</div>"
       );
    });
    var knapp5 = $(".buyBtn5").click(function () {
        $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath5 + " />" + "</div>" +
           textWrap + "<p id='tittel'>" + titteler.tittel5 +
           "</p><p class='thumbnailpris'>Kr " + price.id2 + " </p>" +
           "<div id='slettKnapp'></div>" + "</div>"
       );
    });
    var knapp6 = $(".buyBtn6").click(function () {
        $("#afterthis").after(
           horizontalline + wrap + "<img src=" + pictures.filePath6 + " />" + "</div>" +
           textWrap + "<p id='tittel'>" + titteler.tittel6 +
           "</p><p class='thumbnailpris'>Kr " + price.id1 + " </p>" +
           "<div id='slettKnapp'></div>" + "</div>"
       );
    });
});

var remove = $(document).ready(function () {

    $("#slettKnapp").click(function (){
    
        $("imgThumbnail thumbnailTextWrap").empty();

        //????????????????????????????????????????? o_0

    });

});






