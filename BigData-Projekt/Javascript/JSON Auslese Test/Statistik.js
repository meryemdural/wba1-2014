var doughnutData = [
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


			function ChartActive(){
				var ctx = document.getElementById("chart-area").getContext("2d");
				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, true);
			};
