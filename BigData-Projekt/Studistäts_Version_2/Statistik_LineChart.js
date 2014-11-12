var data = {
    labels: ["WS 98/99", "WS 99/00", "WS 00/01", "WS 01/02", "WS 02/03", "WS 03/04", "WS 04/05","WS 05/06","WS 06/07","WS 07/08","WS 09/10","WS 10/11","WS 11/12","WS 12/13","WS 13/14"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
        }
    ]
};


			function ChartActive15(){
				var ctx2 = document.getElementById("chart-area-LineChart").getContext("2d");
				window.myLineChart = new Chart(ctx2).Line(data, true);
			};