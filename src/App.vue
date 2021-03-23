<template>
  <!-- 组件内容 -->
  <div class="app">
    <!-- 头部 -->
    <top></top>
    <!-- 顶部 -->
    <div class="header">
      <!-- 大图 -->
      <div class="banner"></div>
      <!-- 黑色按钮 -->
      <div class="blackbtn bgblack tc">
        <ul class="clearfix">
          <li class="fl">
            <a class="white block" href="javascript:;">
              <p class="chinese">病例地图</p>
              <p class="eng">case Map</p>
            </a>
          </li>
          <li class="fl">
            <a class="white block" href="javascript:;">
              <p class="chinese">实时播报</p>
              <p class="eng">Real-time</p>
            </a>
          </li>
          <li class="fl">
            <a class="white block" href="javascript:;">
              <p class="chinese">疫情自查</p>
              <p class="eng">Latest Rumors</p>
            </a>
          </li>
          <li class="fl">
            <a class="white block" href="javascript:;">
              <p class="chinese">防护手册</p>
              <p class="eng">Manual</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 橙色按钮 -->
      <div class="orbtn">
        <ul class="clearfix">
          <li class="fl">
            <a class="block bgorange black" href="javascript:;">
              <img class="vam" src="/img/b1.png" alt="">
              <span>关于我们</span>
            </a>
          </li>
          <li class="fl">
            <a class="block bgorange black" href="javascript:;">
              <img class="vam" src="/img/b2.png" alt="">
              <span>抗疫联盟</span>
            </a>
          </li>
          <li class="fl">
            <a class="block bgorange black" href="javascript:;">
              <img class="vam" src="/img/b3.png" alt="">
              <span>停课详情</span>
            </a>
          </li>
          <li class="fl">
            <a class="block bgorange black" href="javascript:;">
              <img class="vam" src="/img/b4.png" alt="">
              <span>抗疫用品</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 加拿大疫情 -->
    <jnddata></jnddata>
    <!-- 抗议联盟 -->
    <fed></fed>
    <!-- 疫情头条 -->
    <headlines></headlines>
    <!-- 最新疫情动态 -->
    <newest></newest>
    <!-- 最新辟谣 -->
    <rumor></rumor>
    <!-- 中国及海外疫情数据实时播报 -->
    <cur></cur>
    <!-- 版权信息 -->
    <copy></copy>
    <!-- 底部 -->
    <bom></bom>
  </div>
</template>

<script>
// 导入组件
import top from "./components/top.vue";
import bom from "./components/bom.vue";
import jnddata from "./components/jnddata.vue";
import fed from "./components/fed.vue";
import headlines from "./components/headlines.vue";
import newest from "./components/newest.vue";
import cur from "./components/cur.vue";
import rumor from "./components/rumor.vue";
import copy from "./components/copy.vue";
export default {
  // 这里写vue的那些兄弟
  data() {
    return {};
  },
  components: {
      top,
      bom,
      jnddata,
      fed,
      headlines,
      newest,
      rumor,
      cur,
      copy,
  },
};
</script>

<style scoped>
.orbtn img{
  width: 0.4rem;
  height: 0.4rem;
  margin: 0 0.08rem;
}
.orbtn ul li a span{
  margin-right: 0.08rem;
}
.orbtn ul{
  display: flex;
  justify-content: space-between;
}
.orbtn ul li a{
  border-radius: 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
.orbtn{
  margin: 0 0.32rem;
  padding: 0.16rem 0;
}
.eng{
  font-size: 0.24rem;
}
.chinese{
  font-size: 0.32rem;
  font-weight: 700;
}
.blackbtn ul li{
  flex: 1;
}
.blackbtn ul{
  display: flex;
  justify-content: space-between;
}
.blackbtn a{
  height: 0.8rem;
}
.blackbtn{
  margin: 0 0.32rem;
  border-radius: 0.1rem;
  padding: 0.16rem;
}
.banner{
  background: url(/img/bg.jpg) no-repeat;
  background-size: 100% 100%;
  padding-bottom: 0.52rem;
  margin-bottom: -0.52rem;
  height: 3.96rem;
  background-color: pink;
}
.header{
  padding-top: 0.8rem;
}
</style>