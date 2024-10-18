<template>
  <section class="sec">
    <div class="math">
      <div id="bab251cc37a342f4862aade54a090ad7" class="chart-container"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts/map/js/china';

let chart;

onMounted(() => {
  chart = echarts.init(
    document.getElementById('bab251cc37a342f4862aade54a090ad7'),
    'vintage',
    { renderer: 'canvas' }
  );
  
  const option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "series": [
        {
            "type": "map",
            "name": "捐款者",
            "label": {
                "show": true,
                "margin": 8
            },
            "map": "china",
            "data": [
                {
                    "name": "四川省",
                    "value": 1519
                },
                {
                    "name": "浙江省",
                    "value": 946
                },
                {
                    "name": "福建省",
                    "value": 702
                },
                {
                    "name": "江苏省",
                    "value": 2163
                },
                {
                    "name": "湖南省",
                    "value": 742
                },
                {
                    "name": "山东省",
                    "value": 1744
                },
                {
                    "name": "安徽省",
                    "value": 1311
                },
                {
                    "name": "广东省",
                    "value": 1290
                },
                {
                    "name": "河北省",
                    "value": 1205
                },
                {
                    "name": "湖北省",
                    "value": 1085
                },
                {
                    "name": "吉林省",
                    "value": 287
                },
                {
                    "name": "上海市",
                    "value": 557
                },
                {
                    "name": "江西省",
                    "value": 575
                },
                {
                    "name": "广西壮族自治区",
                    "value": 1069
                },
                {
                    "name": "贵州省",
                    "value": 859
                },
                {
                    "name": "北京省",
                    "value": 679
                },
                {
                    "name": "云南省",
                    "value": 767
                },
                {
                    "name": "重庆市",
                    "value": 664
                },
                {
                    "name": "河南省",
                    "value": 1359
                },
                {
                    "name": "陕西省",
                    "value": 380
                },
                {
                    "name": "山西省",
                    "value": 436
                },
                {
                    "name": "辽宁省",
                    "value": 732
                },
                {
                    "name": "新疆维吾尔自治区",
                    "value": 357
                },
                {
                    "name": "内蒙古自治区",
                    "value": 262
                },
                {
                    "name": "黑龙江省",
                    "value": 443
                },
                {
                    "name": "天津市",
                    "value": 203
                },
                {
                    "name": "甘肃省",
                    "value": 348
                },
                {
                    "name": "海南省",
                    "value": 121
                },
                {
                    "name": "青海省",
                    "value": 63
                },
                {
                    "name": "宁夏回族自治区",
                    "value": 134
                },
                {
                    "name": "西藏自治区",
                    "value": 13
                },
                {
                    "name": "台湾省",
                    "value": 0
                },
                {
                    "name": "澳门特别行政区",
                    "value": 0
                },
                {
                    "name": "香港特别行政区",
                    "value": 0
                },
                {
                    "name": "南海诸岛",
                    "value": 0
                }
            ],
            "roam": true,
            "aspectScale": 0.75,
            "nameProperty": "name",
            "selectedMode": false,
            "zoom": 1.2,
            "mapValueCalculation": "sum",
            "showLegendSymbol": true,
            "emphasis": {}
        }
    ],
    "legend": [
        {
            "data": [
                "捐款者"
            ],
            "selected": {
                "捐款者": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "title": [
        {
            "show": true,
            "text": "旧物回收在全国的分布 单位：万",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false
        }
    ],
    "visualMap": {
        "show": true,
        "type": "piecewise",
        "min": 0,
        "max": 2500,
        "text": [
            "人数数量区间:",
            ""
        ],
        "inRange": {
            "color": [
                "#FFECEC",
                "#FFB5B5",
                "#FF5151",
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 10,
        "hoverLink": true,
        "orient": "vertical",
        "left": "left",
        "top": "middle",
        "padding": 5,
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 14,
        "borderWidth": 0
    }
  };

  chart.setOption(option);

  window.addEventListener('resize', resizeChart);
});

onUnmounted(() => {
  if (chart) {
    chart.dispose();
  }
  window.removeEventListener('resize', resizeChart);
});

function resizeChart() {
  if (chart) {
    chart.resize();
  }
}
</script>

<style scoped>
.math {
  width: 100%;
  max-width: 9000px;
  margin: 500px auto;
  background-color: #561717;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 690px;
  width: 1110px;
  float: left;
  margin: 90px 0px 0px 165px;
  background: rgba(219, 235, 241, 0.8);
  box-shadow: 0 0 15px rgb(59, 73, 95);
  border-radius: 15px;
  overflow: hidden;
  scroll-snap-align: start;
  transition: all 0.5s ease 0s;
}

.math:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.chart-container {
  width: 1000px;
  height: 600px;
  margin: auto;
  margin-top: 20px;
}
</style>