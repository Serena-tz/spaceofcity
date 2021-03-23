<template>
  <!-- 组件内容 -->
  <div class="jnddata">
    <!-- 表格文字数据 -->
    <div class="jnd space">
      <!-- 标题 -->
      <div class="header clearfix">
        <div class="title fl">{{ data.area }}最新疫情消息</div>
        <a class="fr detail bgblack white block" href="javascript:;"
          >详细数据</a
        >
      </div>
      <!-- 总数据 -->
      <div class="topdata tc">
        <div class="box">
          <p class="tit confirm">{{ data.confirmed }}</p>
          <p class="num">
            <span class="jiao">较昨日</span>
            <span class="red">+{{ data.confirmedRelative }}</span>
          </p>
          <p>确诊病例</p>
        </div>
        <div class="box">
          <p class="tit heal">{{ data.cured }}</p>
          <p class="num">
            <span class="jiao">较昨日</span>
            <span>+{{ data.curedRelative }}</span>
          </p>
          <p>治愈人数</p>
        </div>
        <div class="box">
          <p class="tit dead">{{ data.died }}</p>
          <p class="num">
            <span class="jiao">较昨日</span>
            <span>+{{ data.diedRelative }}</span>
          </p>
          <p>死亡人数</p>
        </div>
      </div>
      <!-- 详细数据 -->
      <table class="tab tc">
        <thead class="thead">
          <tr>
            <td>省市</td>
            <td>累积确诊</td>
            <td>治愈</td>
            <td>死亡</td>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(item, index) in data.subList" :key="index">
            <th>{{ item.area }}</th>
            <th
              class="big confirm"
              v-html="item.confirmed ? item.cured : 0"
            ></th>
            <td class="big heal" v-html="item.cured ? item.cured : 0"></td>
            <td class="big dead" v-html="item.died ? item.cured : 0"></td>
          </tr>
        </tbody>
      </table>
      <!-- 说明 -->
      <div class="info">
        <p>
          <span class="fb">"现有确诊"</span>
          <span> = 累计确诊 - 治愈 - 死亡</span>
        </p>
        <p>
          <span class="fb">"其他"</span>
          <span>包括：军事基地隔离点</span>
        </p>
      </div>
      <!-- 地图 -->
      <div class="map">
        <a href="javascript:;">
          <img src="/img/map.png" alt="" />
        </a>
      </div>
    </div>
    <!-- 图表数据 -->
    <div class="jnd charts">
      <div class="btns">
        <a class="block tc" :class="{on:num==0}" @click="num=0" href="javascript:;">累计确诊</a>
        <a class="block tc" :class="{on:num==1}" @click="num=1" href="javascript:;">新增确诊</a>
      </div>
      <div class="ec" ref="ec" style="height: 6rem; width: 6.28rem" v-show="num==0"></div>
      <div class="ec" ref="ec2" style="height: 6rem; width: 6.28rem" v-show="num==1"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      num:0,
    };
  },
  created() {
    this.$axios.get("json/jnd_newest.json").then((res) => {
      this.data = res.data;
    });
    this.$axios.get("json/his.json").then((res) => {
      var d = res.data;
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.ec);
      // 绘制图表
      myChart.setOption({
        legend: {
          data: [d["11.17"].area,d["11.19"].subList[0].area, d["11.21"].subList[1].area, d["11.23"].subList[2].area,d["11.17"].subList[3].area],
          // align:"right",
          icon:"circle"
        },
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
        xAxis: {
          data: ["11.17", "11.19", "11.21", "11.23"],
        },
        grid:[
          {x:'18%'},
        ],
        yAxis: {
          name: "数量",
        },
        series: [
          {
            name: d["11.17"].area,
            type: "line",
            data: [d["11.17"].confirmed, d["11.19"].confirmed, d["11.21"].confirmed, d["11.23"].confirmed],
           
          },
          {
            name:d["11.17"].subList[0].area,
            type: "line",
            data: [d["11.17"].subList[0].confirmed, d["11.19"].subList[0].confirmed, d["11.21"].subList[0].confirmed, d["11.23"].subList[0].confirmed],
          },
          {
            name:d["11.17"].subList[1].area,
            type: "line",
            data: [d["11.17"].subList[1].confirmed, d["11.19"].subList[1].confirmed, d["11.21"].subList[1].confirmed, d["11.23"].subList[1].confirmed],
          },
          {
            name:d["11.17"].subList[2].area,
            type: "line",
            data: [d["11.17"].subList[2].confirmed, d["11.19"].subList[2].confirmed, d["11.21"].subList[2].confirmed, d["11.23"].subList[2].confirmed],
          },
          {
            name:d["11.17"].subList[3].area,
            type: "line",
            data: [d["11.17"].subList[2].confirmed, d["11.19"].subList[2].confirmed, d["11.21"].subList[2].confirmed, d["11.23"].subList[2].confirmed],
          },
        ],
        color:["#AAAAAA","#FF9966","#9FE6B6","#F8C654"]
      });
      // 基于准备好的dom，初始化echarts实例
      var myChart2 = echarts.init(this.$refs.ec2);
      // 绘制图表
      myChart2.setOption({
        legend: {
          data: [d["11.19"].subList[0].area,d["11.19"].subList[1].area, d["11.19"].subList[2].area, d["11.19"].subList[3].area],
          // align:"right",
          icon:"circle"
        },
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
        xAxis: {
          data: ["11.19", "11.20", "11.21", "11.22", "11.23"],
        },
        grid:[
          {x:'18%'},
        ],
        yAxis: {
          name: "数量",
        },
        series: [
          {
            name:d["11.19"].subList[0].area,
            type: "bar",
            data: [d["11.19"].subList[0].nowConfirmed, d["11.20"].subList[0].nowConfirmed, d["11.21"].subList[0].nowConfirmed, d["11.22"].subList[0].nowConfirmed, d["11.23"].subList[0].nowConfirmed],
            stack: d["11.19"].subList[0].area,
             label: {
                show: true,
                // position: 'insideRight'
            },
          },
          {
            name:d["11.19"].subList[1].area,
            type: "bar",
            data: [d["11.19"].subList[1].nowConfirmed, d["11.20"].subList[1].nowConfirmed, d["11.21"].subList[1].nowConfirmed, d["11.22"].subList[1].nowConfirmed, d["11.23"].subList[1].nowConfirmed],
            stack: d["11.19"].subList[0].area,
             label: {
                show: true,
                // position: 'insideRight'
            },
          },
          {
            name:d["11.19"].subList[2].area,
            type: "bar",
            data: [d["11.19"].subList[2].nowConfirmed, d["11.20"].subList[2].nowConfirmed, d["11.21"].subList[2].nowConfirmed, d["11.22"].subList[2].nowConfirmed, d["11.23"].subList[2].nowConfirmed],
            stack: d["11.19"].subList[0].area,
             label: {
                show: true,
                // position: 'insideRight'
            },
          },
          {
            name:d["11.19"].subList[3].area,
            type: "bar",
            data: [d["11.19"].subList[3].nowConfirmed, d["11.20"].subList[3].nowConfirmed, d["11.21"].subList[3].nowConfirmed, d["11.22"].subList[3].nowConfirmed, d["11.23"].subList[3].nowConfirmed],
            stack: d["11.19"].subList[0].area,
             label: {
                show: true,
                // position: 'insideRight'
            },
          },
          
        ],
        color:["#FF9966","#9FE6B6","#F8C654","#82C6F4"]
      });
    });
  },
};
</script>

<style scoped>
.ec {
  margin-top: 0.32rem;
}
.charts {
  padding: 0.32rem 0.32rem 0;
}
.btns a.on {
  background-color: #000;
  color: #fff;
}
.btns {
  font-size: 0.28rem;
  display: flex;
  justify-content: space-around;
}
.btns a {
  padding: 0 0.32rem;
  width: 45%;
  background: #f2f2f2;
  border-radius: 3rem;
  background-color: #e6e6e6;
  border: none;
  color: #333;
  height: 0.96rem;
  line-height: 0.96rem;
}
.space {
  padding-bottom: 0.32rem;
  margin-bottom: 0.32rem;
}
.map img {
  width: 100%;
}
.jnd .info {
  padding: 0.2rem 0.32rem;
  color: #555;
  font-size: 0.24rem;
}
.tbody .big {
  font-size: 0.28rem;
}
.thead {
  color: #111;
  background: #f8f8f8;
}
.tab tr {
  height: 0.72rem;
  border-bottom: 1px solid #f2f2f2;
}
.tab {
  background: url(/img/logo.png) 50% no-repeat;
  background-size: contain;
  width: 100%;
  font-size: 0.24rem;
}
.confirm,
.topdata .confirm,
.num .red {
  color: #f55253;
}
.topdata .heal,
.heal {
  color: #178b50;
}
.topdata .dead,
.dead {
  color: #66666c;
}
.num .jiao {
  color: #999;
  margin-right: 0.1rem;
}
.box p {
  margin-top: 0.08rem;
  color: #555;
  font-size: 0.26rem;
}
.topdata .box .tit {
  font-size: 0.46rem;
  font-weight: 800;
}
.topdata .box {
  flex: 1;
}
.topdata {
  display: flex;
  padding: 0.32rem 0;
}
.detail {
  border-radius: 0.2rem;
  margin-top: 0.3rem;
  margin-right: 0.3rem;
  padding: 0 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.header .title {
  padding: 0.3rem;
  font-size: 0.32rem;
}
.header {
  border-bottom: 1px solid #f2f2f2;
}
.jnd {
  background: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
}
.jnddata {
  margin-top: 0.32rem;
  padding: 0 0.3rem;
}
</style>