var doughnutData = [
				{
					value: 1,
					color: "#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 1,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
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
