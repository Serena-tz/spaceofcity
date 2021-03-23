<template>
  <!-- 组件内容 -->
  <div class="foot">
    <!-- 三个按钮 -->
    <div class="btn">
      <a class="block white bgorange" href="javascript:;">
        <img class="vam turn" src="/img/update.svg" alt="" />
        <span>订阅更新</span>
      </a>
      <a
        class="block white bgorange"
        href="javascript:;"
        @click="wechatshow = true"
      >
        <img class="vam" src="/img/wechat.png" alt="" />
        <span>公众号</span>
      </a>
      <a
        class="block white bgorange"
        href="javascript:;"
        @click="shareshow = true"
      >
        <img class="vam" src="/img/share.png" alt="" />
        <span>分享</span>
      </a>
    </div>
    <!-- 公众号弹出层 -->
    <div class="welayer" v-show="wechatshow">
      <div class="wechat"></div>
      <div class="layer tc">
        <h3 class="pore">
          微信公众号<span class="close" @click="wechatshow = false">X</span>
        </h3>
        <div class="con">
          <img src="/img/code.png" alt="" />
          <p>公众号：大温星球</p>
          <p>微信号：spaceofcity</p>
        </div>
      </div>
    </div>
    <!-- 分享弹出层 -->
    <div class="share" v-show="shareshow" @click="shareshow = false">
      <p class="hope">愿所有人平安！</p>
      <div class="up">
        <img class="fr" src="/img/up.svg" alt="" />
        <div class="text fr">
          <p>点击右上角更多</p>
          <p>分享本页面。</p>
        </div>
      </div>
      <div class="down">
        <div class="downtext">
          <p>手机浏览器(iOS)</p>
          <p>点击下<img class="sup" src="/img/sup.svg" alt="" />图标</p>
          <p>分享本页面</p>
        </div>
        <div class="tc">
          <img src="/img/down.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
// import star from "./star.vue";
export default {
  data() {
    return {
      shareshow: false,
      wechatshow: false,
    };
  },
  components: {},
  methods: {
    // 公众号弹出层
  },
  created() {},
};
</script>

<style scoped>
.close {
  font-weight: normal;
  margin-right: 0.4rem;
  font-size: 0.28rem;
  color: #999;
  position: absolute;
  right: 0;
}
.layer p {
  line-height: 0.56rem;
}
.layer .con {
  padding: 0.32rem;
}
.layer img {
  width: 3.9rem;
}
.layer {
  position: fixed;
  font-size: 0.28rem;
  top: 18%;
  margin: auto;
  left: 0;
  right: 0;
  margin: 0 0.15rem;
  background-color: #fff;
  display: inline-block;
  border-radius: 0.2rem;
  overflow: hidden;
  z-index: 99;
}
.layer h3 {
  background: #f8f8f8;
  font-weight: 700;
  font-size: 0.32rem;
  height: 0.96rem;
  line-height: 0.96rem;
}

.wechat,
.share {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
/* 转圈圈动画 */
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.turn {
  animation: turn 1s linear infinite;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 0.2rem 0.4rem;
  display: flex;
  justify-content: space-around;
  z-index: 99;
}
.btn > a {
  font-size: 0.14rem;
  padding: 0.2rem 0.5rem;
  border-radius: 2rem;
}
.btn > a img {
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.2rem;
}
.share {
  color: #fff;
  font-weight: 700;
  z-index: 999;
}
.hope {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.4rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.32rem 0.52rem;
  border-radius: 3rem;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text {
  margin-top: 0.2rem;
  margin-right: 0.64rem;
}
.text,
.downtext {
  font-size: 0.32rem;
  border: 2px solid #fff;
  padding: 0.32rem;
  line-height: 0.64rem;
  border-radius: 0.25rem;
  clear: both;
  background: rgba(0, 0, 0, 0.2);
}
.downtext {
  margin-bottom: 0.08rem;
}
.up {
  position: absolute;
  right: 0.4rem;
  top: 0.7rem;
}
.down {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.sup {
  margin: 0 0.2rem;
}
</style>