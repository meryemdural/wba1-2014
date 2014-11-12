var data = {
    labels: ["WS 98/99", "WS 99/00", "WS 00/01", "WS 01/02", "WS 02/03", "WS 03/04", "WS 04/05","WS 05/06","WS 06/07","WS 07/08","WS 09/10","WS 10/11","WS 11/12","WS 12/13","WS 13/14"],
    datasets: [
        {
            label: "Bundesland 1",
            fillColor: "rgba(255,182,0,0.2)",
            strokeColor: "rgba(255,182,0,1)",
            pointColor: "rgba(255,182,0,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(255,182,0,1)",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        },
        {
            label: "Bundesland 2",
            fillColor: "rgba(66,140,186,0.2)",
            strokeColor: "rgba(66,140,186,1)",
            pointColor: "rgba(66,140,186,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(66,140,186,1)",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        }
    ]
};


			function ChartActive15(){
				var ctx2 = document.getElementById("chart-area-LineChart").getContext("2d");
				window.myLineChart = new Chart(ctx2).Line(data, true);
			};