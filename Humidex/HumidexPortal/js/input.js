var lightVal = 300;
var tempdata = [{
        "date": "2012-08-01 00:04",
        "value": 13
    }, {
        "date": "2012-08-01 00:08",
        "value": 18
    }, {
        "date": "2012-08-01 00:12",
        "value": 11
    }, {
        "date": "2012-08-01 00:16",
        "value": 15
    }, {
        "date": "2012-08-01 00:20",
        "value": 16
    }, {
        "date": "2012-08-01 00:24",
        "value": 13
    }];
var humiddata = [{
        "date": "2012-08-01 00:04",
        "value": 13
    }, {
        "date": "2012-08-01 00:08",
        "value": 18
    }, {
        "date": "2012-08-01 00:12",
        "value": 11
    }, {
        "date": "2012-08-01 00:16",
        "value": 15
    }, {
        "date": "2012-08-01 00:20",
        "value": 16
    }, {
        "date": "2012-08-01 00:24",
        "value": 13
    }];
var humidexdata = [{
        "date": "2012-08-01 00:04",
        "value": 13
    }, {
        "date": "2012-08-01 00:08",
        "value": 18
    }, {
        "date": "2012-08-01 00:12",
        "value": 11
    }, {
        "date": "2012-08-01 00:16",
        "value": 15
    }, {
        "date": "2012-08-01 00:20",
        "value": 16
    }, {
        "date": "2012-08-01 00:24",
        "value": 13
    }];
var energydata = [{
        "date": "2012-08-01 00:04",
        "value": 13
    }, {
        "date": "2012-08-01 00:08",
        "value": 18
    }, {
        "date": "2012-08-01 00:12",
        "value": 11
    }, {
        "date": "2012-08-01 00:16",
        "value": 15
    }, {
        "date": "2012-08-01 00:20",
        "value": 16
    }, {
        "date": "2012-08-01 00:24",
        "value": 13
    }];
var efficiencydata = [{
        "date": "2012-08-01 00:04",
        "value": 13
    }, {
        "date": "2012-08-01 00:08",
        "value": 18
    }, {
        "date": "2012-08-01 00:12",
        "value": 11
    }, {
        "date": "2012-08-01 00:16",
        "value": 15
    }, {
        "date": "2012-08-01 00:20",
        "value": 16
    }, {
        "date": "2012-08-01 00:24",
        "value": 13
    }];

var chart = AmCharts.makeChart("tempdiv", {
    "type": "serial",
    "theme": "dark",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD JJ:NN",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
       "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN",
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":50,
      "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true,
          "labelFunction": function(valueText, date, categoryAxis) {
               return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          }
    },
   "dataProvider": tempdata
});

chart.addListener("rendered", zoomChart);


var humidchart = AmCharts.makeChart("humiddiv", {
     "type": "serial",
    "theme": "black",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD JJ:NN",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
       "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN",
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":50,
      "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true,
          "labelFunction": function(valueText, date, categoryAxis) {
               return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          }
    },
   "dataProvider": humiddata
});
humidchart.addListener("rendered", zoomChart);


var humidexchart = AmCharts.makeChart("humidexdiv", {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD JJ:NN",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
       "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN",
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":50,
      "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true,
          "labelFunction": function(valueText, date, categoryAxis) {
               return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          }
    },
   "dataProvider": humidexdata
});
humidexchart.addListener("rendered", zoomChart);

var energychart = AmCharts.makeChart("energydiv", {
     "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD JJ:NN",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
       "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN",
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":50,
      "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true,
          "labelFunction": function(valueText, date, categoryAxis) {
               return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          }
    },
   "dataProvider": energydata
});
energychart.addListener("rendered", zoomChart);

var efficiencychart = AmCharts.makeChart("efficiencydiv", {
     "type": "serial",
    "theme": "dark",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD JJ:NN",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
       "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN",
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":50,
      "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true,
          "labelFunction": function(valueText, date, categoryAxis) {
               return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          }
    },
   "dataProvider": efficiencydata
});
efficiencychart.addListener("rendered", zoomChart);
zoomChart();

function zoomChart() {
    chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
    humidchart.zoomToIndexes(humidchart.dataProvider.length - 40, humidchart.dataProvider.length - 1);
    humidexchart.zoomToIndexes(humidexchart.dataProvider.length - 40, humidexchart.dataProvider.length - 1);
    energychart.zoomToIndexes(energychart.dataProvider.length - 40, energychart.dataProvider.length - 1);
    efficiencychart.zoomToIndexes(efficiencychart.dataProvider.length - 40, efficiencychart.dataProvider.length - 1);
}

var gaugeChart = AmCharts.makeChart( "lightdiv", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 100,
    "bands": [ {
      "color": "#cc4748",
      "endValue": 399,
      "startValue": 0
    }, {
      "color": "#84b761",
      "endValue": 799,
      "startValue": 400
    }, {
      "color": "#fdd400",
      "endValue": 1000,
      "innerRadius": "95%",
      "startValue": 800
    } ],
    "bottomText": "0 Lux",
    "bottomTextYOffset": -20,
    "endValue": 1000
  } ],
  "arrows": [ {} ],
  } );

setInterval( randomValue, 2000 );

// set random value
function randomValue() {
  var value = lightVal;
  if ( gaugeChart ) {
    if ( gaugeChart.arrows ) {
      if ( gaugeChart.arrows[ 0 ] ) {
        if ( gaugeChart.arrows[ 0 ].setValue ) {
          gaugeChart.arrows[ 0 ].setValue( value );
          gaugeChart.axes[ 0 ].setBottomText( value + " Lux" );
        }
      }
    }
  }
}
