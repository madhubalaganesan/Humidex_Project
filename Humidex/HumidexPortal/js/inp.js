var lightVal = 36;
var tempData = [{
        "date": "2012-12-06 16:39",
        "value": 24
    }, {
        "date": "2012-12-06 16:41",
        "value": 24.20
    }, {
        "date": "2012-12-06 16:45",
        "value": 24.60
    }, {
        "date": "2012-12-06 16:49",
        "value": 24.80
    }, {
        "date": "2012-12-06 16:53",
        "value": 25.10
    }, {
        "date": "2012-12-06 16:57",
        "value": 25.20
    }, {
        "date": "2012-12-06 17:01",
        "value": 25.30
    }, {
        "date": "2012-12-06 17:05",
        "value": 25.40
    }, {
        "date": "2012-12-06 17:09",
        "value": 25.50
    }, {
        "date": "2012-12-06 17:13",
        "value": 25.50
    }, {
        "date": "2012-12-06 17:17",
        "value": 25.50
    }, {
        "date": "2012-12-06 17:21",
        "value": 25.60
    },{
        "date": "2012-12-06 17:25",
        "value": 25.60
    }, {
        "date": "2012-12-06 17:29",
        "value": 25.70
    }, {
        "date": "2012-12-06 17:33",
        "value": 25.70
    }];

var humidData = [{
        "date": "2012-12-06 16:39",
        "value": 25.90
    }, {
        "date": "2012-12-06 16:41",
        "value": 25.90
    }, {
        "date": "2012-12-06 16:45",
        "value": 26.00
    }, {
        "date": "2012-12-06 16:49",
        "value": 26.60
    }, {
        "date": "2012-12-06 16:53",
        "value": 27.30
    }, {
        "date": "2012-12-06 16:57",
        "value": 27.10
    }, {
        "date": "2012-12-06 17:01",
        "value": 27.60
    }, {
        "date": "2012-12-06 17:05",
        "value": 27.50
    }, {
        "date": "2012-12-06 17:09",
        "value": 28.10
    }, {
        "date": "2012-12-06 17:13",
        "value": 28.30
    }, {
        "date": "2012-12-06 17:17",
        "value": 28.80
    }, {
        "date": "2012-12-06 17:21",
        "value": 28.80
    },{
        "date": "2012-12-06 17:25",
        "value": 29.00
    }, {
        "date": "2012-12-06 17:29",
        "value": 29.10
    }, {
        "date": "2012-12-06 17:33",
        "value": 29.10
    }];
var humidexData = [{
        "date": "2012-12-06 16:39",
        "value": 23
    }, {
        "date": "2012-12-06 16:41",
        "value": 23
    }, {
        "date": "2012-12-06 16:45",
        "value": 24
    }, {
        "date": "2012-12-06 16:49",
        "value": 24
    }, {
        "date": "2012-12-06 16:53",
        "value": 24
    }, {
        "date": "2012-12-06 16:57",
        "value": 24
    }, {
        "date": "2012-12-06 17:01",
        "value": 25
    }, {
        "date": "2012-12-06 17:05",
        "value": 25
    }, {
        "date": "2012-12-06 17:09",
        "value": 25
    }, {
        "date": "2012-12-06 17:13",
        "value": 25
    }, {
        "date": "2012-12-06 17:17",
        "value": 25
    }, {
        "date": "2012-12-06 17:21",
        "value": 25
    },{
        "date": "2012-12-06 17:25",
        "value": 25
    }, {
        "date": "2012-12-06 17:29",
        "value": 25
    }, {
        "date": "2012-12-06 17:33",
        "value": 25
    }];

var energyData = [{
        "date": "2012-12-06 16:39",
        "value": 33
    }, {
        "date": "2012-12-06 16:41",
        "value": 33
    }, {
        "date": "2012-12-06 16:45",
        "value": 33
    }, {
        "date": "2012-12-06 16:49",
        "value": 33
    }, {
        "date": "2012-12-06 16:53",
        "value": 33
    }, {
        "date": "2012-12-06 16:57",
        "value": 33
    }, {
        "date": "2012-12-06 17:01",
        "value": 33
    }, {
        "date": "2012-12-06 17:05",
        "value": 33
    }, {
        "date": "2012-12-06 17:09",
        "value": 34
    }, {
        "date": "2012-12-06 17:13",
        "value": 33
    }, {
        "date": "2012-12-06 17:17",
        "value": 33
    }, {
        "date": "2012-12-06 17:21",
        "value": 33
    },{
        "date": "2012-12-06 17:25",
        "value": 33
    }, {
        "date": "2012-12-06 17:29",
        "value": 33
    }, {
        "date": "2012-12-06 17:33",
        "value": 33
    }];

var efficiencyData = [{
        "date": "2012-12-06 16:39",
        "value": 33
    }, {
        "date": "2012-12-06 16:41",
        "value": 33
    }, {
        "date": "2012-12-06 16:45",
        "value": 33
    }, {
        "date": "2012-12-06 16:49",
        "value": 33
    }, {
        "date": "2012-12-06 16:53",
        "value": 33
    }, {
        "date": "2012-12-06 16:57",
        "value": 33
    }, {
        "date": "2012-12-06 17:01",
        "value": 33
    }, {
        "date": "2012-12-06 17:05",
        "value": 33
    }, {
        "date": "2012-12-06 17:09",
        "value": 34
    }, {
        "date": "2012-12-06 17:13",
        "value": 33
    }, {
        "date": "2012-12-06 17:17",
        "value": 33
    }, {
        "date": "2012-12-06 17:21",
        "value": 33
    },{
        "date": "2012-12-06 17:25",
        "value": 33
    }, {
        "date": "2012-12-06 17:29",
        "value": 33
    }, {
        "date": "2012-12-06 17:33",
        "value": 33
    }];

var tempchart = AmCharts.makeChart("tempdiv", {
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
   "dataProvider": tempData
});

tempchart.addListener("rendered", zoomChart);

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
   "dataProvider": humidData
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
   "dataProvider": humidexData
});

humidexchart.addListener("rendered", zoomChart);

var energychart = AmCharts.makeChart("energydiv", {
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
   "dataProvider": energyData
});

energychart.addListener("rendered", zoomChart);

var efficiencychart = AmCharts.makeChart("efficiencydiv", {
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
   "dataProvider": efficiencyData
});

efficiencychart.addListener("rendered", zoomChart);

zoomChart();

function zoomChart() {
   tempchart.zoomToIndexes(tempchart.dataProvider.length - 40, tempchart.dataProvider.length - 1);
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