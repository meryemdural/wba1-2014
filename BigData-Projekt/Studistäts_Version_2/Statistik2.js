var doughnutData1 = [
				{
					value: 1,
					color: "#46BFBD",
					highlight: "#46BFBD",
					label: "Green"
				},
				{
					value: 1,
					color: "#F7464A",
					highlight: "#F7464A",
					label: "Red"
				},
				{
					value: 1,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				}
			];


			function ChartActive1(){
				var ctx1 = document.getElementById("chart-area1").getContext("2d");
				var myDoughnutChart = new Chart(ctx1).Doughnut(doughnutData1,true);
			};