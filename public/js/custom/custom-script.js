/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 5.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */

//setTimeo
setInterval(function(){ document.getElementById('good-life-logo').src = "/images/logo/materialize-logo-color.png"; }, 100);

// document.getElementsById('addLocalHour').innerHTML = Date().toString(); //TODO MUST CONVERT SERVER TIME TO LOCAL TIME 

function convert24to12(hour) {
	if (hour == 24 || hour == 0) {
		return "12am";
	}
	else if (hour < 12) {
		return hour + "am";
	}
	else if (hour == 12) {
		return "12pm";
	}
	else {
		return (hour - 12) + "pm";
	}
}

var hourNodes = document.getElementsByClassName("hour")
for (var i = 0; i < hourNodes.length; i++) {	

	var hourNode = hourNodes[i];
	var str = hourNode.innerHTML;
	var matches = str.match(/(\d+)-(\d+)/);
	if (matches) {
		var hour1 = matches[1];
		var hour2 = matches[2];

		hourNode.innerHTML = convert24to12(hour1) + "-" + convert24to12(hour2);

	}

}

// let currentYearNode = document.getElementById("currentYear")
// currentYearNode.innerHTML = new Date().getFullYear();


function generateHour() {
  var dateStr = Date().toString();
  console.log(dateStr);
  var str1 = dateStr.substring(0, dateStr.indexOf(":"));
  var hour = Number(str1.substring(str1.lastIndexOf(" ")));
  return hour;
}

function setHourID() {
	document.getElementById("hour").value = generateHour();
}

document.getElementsByClassName("hour")

var data = {
	// A labels array that can contain any sort of values
	labels: ['First', 'Second', 'Third', 'Fourth', 'Fri'],
	// Our series array that contains series objects or in this case series data arrays
	series: [
	  [8.45, 8.18, 9.18, 8.88]
	]
  };
  
  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
new Chartist.Line('.ct-chart', data);

var TotalTransactionLine = new Chartist.Line(
	"#total-transaction-line-chart",
	{
		series: [[3, 10, 4, 20, 7, 45, 5, 35, 20, 48, 3, 2, 1, 1]]
	},
	{
		chartPadding: 0,
		axisX: {
			showLabel: true,
			showGrid: false
		},
		axisY: {
			showLabel: true,
			showGrid: true,
			low: 0,
			high: 50,
			scaleMinSpace: 40
		},
		lineSmooth: Chartist.Interpolation.simple({
			divisor: 2
		}),
		plugins: [Chartist.plugins.tooltip({ class: "total-transaction-tooltip", appendToBody: true })],
		fullWidth: true
	}
);

TotalTransactionLine.on("created", function (data) {
	var defs = data.svg.querySelector("defs") || data.svg.elem("defs");
	defs
		.elem("linearGradient", {
			id: "lineLinearStats",
			x1: 0,
			y1: 0,
			x2: 1,
			y2: 0
		})
		.elem("stop", {
			offset: "0%",
			"stop-color": "rgba(255, 82, 249, 0.1)"
		})
		.parent()
		.elem("stop", {
			offset: "10%",
			"stop-color": "rgba(255, 82, 249, 1)"
		})
		.parent()
		.elem("stop", {
			offset: "30%",
			"stop-color": "rgba(255, 82, 249, 1)"
		})
		.parent()
		.elem("stop", {
			offset: "95%",
			"stop-color": "rgba(133, 3, 168, 1)"
		})
		.parent()
		.elem("stop", {
			offset: "100%",
			"stop-color": "rgba(133, 3, 168, 0.1)"
		});

	return defs;

}).on("draw", function (data) {
	var circleRadius = 5;
	if (data.type === "point") {
		var circle = new Chartist.Svg("circle", {
			cx: data.x,
			cy: data.y,
			"ct:value": data.y,
			r: circleRadius,
			class: data.value.y === 35 ? "ct-point ct-point-circle" : "ct-point ct-point-circle-transperent"
		});
		data.element.replace(circle);
	}
});
  

var dateNodes = document.getElementsByClassName("date")
for (var i = 0; i < dateNodes.length; i++) {	

	var hourNode = dateNodes[i];
	var str = hourNode.innerHTML;
	var matches = str.match(/(.*\d+) ([0-9]{4})/);
	if (matches) {

		hourNode.innerHTML = `${matches[1]} ${matches[2]}`;

	}

}
