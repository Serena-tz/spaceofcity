<template>
  <!-- 组件内容 -->
  <div class="real-wrap">
    <div class="real">
      <div class="title tc">
        <p class="big">中国及海外疫情数据实时播报</p>
        <p class="small">数据来自官方通报，数据可能存在延迟差异</p>
      </div>
      <div class="china-wrap">
        <div class="china">
          <!-- 面板标题 -->
          <div class="china-tit">
            <div class="tit">中国最新疫情数据</div>
          </div>
          <!-- 面板内容第一行 -->
          <div class="topdata tc">
            <div class="box">
              <p class="tit confirm">{{alldata.curConfirm}}</p>
              <p class="num">
                <span class="jiao">较昨日</span>
                <span class="red"><span v-show="alldata.curConfirmRelative>0">+</span>{{alldata.curConfirmRelative}}</span>
              </p>
              <p>现有确诊</p>
            </div>
            <div class="box">
              <p class="tit heal">{{alldata.unconfirmed}}</p>
              <p class="num">
                <span class="jiao">较昨日</span>
                <span><span v-show="alldata.unconfirmedRelative>0">+</span>{{alldata.unconfirmedRelative}}</span>
              </p>
              <p>现有疑似</p>
            </div>
            <div class="box">
              <p class="tit dead">{{alldata.icu}}</p>
              <p class="num">
                <span class="jiao">较昨日</span>
                <span><span v-show="alldata.icuRelative>0">+</span>{{alldata.icuRelative}}</span>
              </p>
              <p>现有重症</p>
            </div>
          </div>
          <!-- 面板内容第二行 -->
          <div class="topdata tc">
            <div class="box">
              <p class="tit gg">{{alldata.confirmed}}</p>
              <p class="num">
                <span class="jiao">较昨日</span>
                <span class="red"><span v-show="alldata.confirmedRelative>0">+</span>{{alldata.confirmedRelative}}</span>
              </p>
              <p>累计确诊</p>
            </div>
            <div class="box">
              <p class="tit heal">{{alldata.cured}}</p>
              <p class="num">
                <span class="jiao">较昨日</span>
                <span><span v-show="alldata.curedRelative>0">+</span>{{alldata.curedRelative}}</span>
              </p>
              <p>累计治愈</p>
            </div>
            <div class="box">
              <p class="tit heal">{{alldata.died}}</p>
              <p class="num">
                <span class="jiao">较昨日</span>
                <span><span v-show="alldata.diedRelative>0">+</span>{{alldata.diedRelative}}</span>
              </p>
              <p>累计死亡</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jnddata">
      <!-- 表格文字数据 -->
      <div class="jnd space">
        <!-- 标题 -->
        <div class="header clearfix">
          <div class="title fl">{{ data.area }}海外其他地区病例</div>
          <a class="fr detail bgblack white block" href="javascript:;"
            >详细数据</a
          >
        </div>
        <!-- 总数据 -->
        <div class="topdata tc">
          <div class="box">
            <p class="tit confirm">{{ topdata.confirmed }}</p>
            <p>确诊病例</p>
          </div>
          <div class="box">
            <p class="tit heal">{{ topdata.cured }}</p>
            <p>治愈人数</p>
          </div>
          <div class="box">
            <p class="tit dead">{{ topdata.died }}</p>
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
            <tr v-for="(item, index) in data" :key="index">
              <th>{{ item.area }}</th>
              <th class="big confirm">{{ item.confirmed}}</th>
              <td class="big heal">{{ item.crued }}</td>
              <td class="big dead">{{ item.died }}</td>
            </tr>
          </tbody>
        </table>
      <!-- 数据更新时间 -->
      <div class="update tc">数据更新至 {{time}} (北京时间)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      alldata: "",
      topdata: "",
      time: "",
    };
  },
  created() {
    this.$axios.get("json/real_time.json").then((res) => {
      this.data = res.data.caseOutsideList;
      this.alldata = res.data.summaryDataIn;
      this.topdata = res.data.summaryDataOut;
      this.time = res.data.mapLastUpdatedTime;
    });
  },
};
</script>

<style scoped>
.tbody th{
  padding:0  0.2rem;
}
.update{
  padding: 0.2rem 0.32rem 0.32rem;
  color: #999;
  font-size: 0.24rem;
}
.tab tr td {
  width: 25%;
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
.gg {
  color: #66666c;
}
.confirm,
.topdata .confirm,
.num .red {
  color: #f55253;
}
.topdata .heal,
.heal {
  color: #000;
}
.topdata .dead,
.dead {
  color: #178b50;
}
.num .jiao {
  color: #999;
  margin-right: 0.1rem;
}
.box p {
  color: #555;
  font-size: 0.26rem;
}
.topdata .box .tit {
  font-size: 0.44rem;
  font-weight: 700;
}
.topdata .box {
  flex: 1;
}
.topdata {
  display: flex;
  padding: 0.32rem 0;
}
.china .china-tit .tit {
  padding: 0.3rem;
  font-size: 0.32rem;
}
.china {
  background: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
}
.china-tit {
  border-bottom: 1px solid #f2f2f2;
}
.china-wrap {
  margin-top: 0.32rem;
  padding: 0 0.3rem;
}
.title .small {
  color: #999;
  font-size: 0.24rem;
  padding: 0.24rem 0;
}
.title .big {
  font-size: 0.52rem;
  font-weight: 700;
  color: #111;
}
.real .title {
  margin: 0.64rem 0;
}
</style>