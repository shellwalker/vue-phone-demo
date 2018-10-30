<template>
  <div>
    <div style="text-align:center">
      <div id="painRecord" class="chart-container">

      </div>
    </div>
    <div>
      上面是我的Echart Demo
    </div>
    <div class="btn-container">
      <mt-button  @click="showLoginInfo" type="primary" size="large">新增记录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PainRecord',
  data () {
    return {
      msg: 'Welcome to my first Echart Demo'
    }
  },
  mounted () {
    this.drawPainRecordChart()
  },
  methods: {
    drawPainRecordChart () {
      let myChart = this.$echarts.init(document.getElementById('painRecord'))
      myChart.setOption({
        title: {
          text: '最近一周疼痛趋势图',
          left: 'center'
        },
        tooltip: {},
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          type: 'category'
        },
        yAxis: {
          data: [0, 2, 4, 6, 8, 10, 12],
          type: 'value',
          max: 10,
          minInterval: 2
        },
        series: {
          name: '得分',
          type: 'line',
          data: [3, 5, 6, 3, 5, 7, 8]
        }
      })
    }
  }
}
</script>
<style scoped>
.chart-container {
  /* text-align: center; */
  width: 100%;
  height: 300px;
}
.btn-container {
  /* width: 100%; */
  position: absolute;
  right: 0;
  left: 0;
  bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
