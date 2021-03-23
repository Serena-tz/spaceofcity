<template>
  <!-- 组件内容 -->
  <div class="rumor">
    <div class="tit clearfix">
      <span>最新辟谣</span>
      <a class="fr block tc bgorange nook white" href="javascript:;"
        >举报谣言</a
      >
    </div>
    <div class="con-wrap">
      <div class="con pore">
        <div class="inner">
          <div class="wrap fl" v-for="(item, index) in data" :key="index">
            <div class="title pore">
              <img src="/img/jia.svg" alt="" />
              <div class="head white">{{ item.title }}</div>
            </div>
            <div class="article">{{ item.excerpt }}</div>
            <div class="btn-wrap tc">
              <div class="wrap-inner">
                <a class="bgblack white share inline" href="javascript:;"
                  >分享给朋友</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dots tc">
        <span
          class="inline"
          v-for="(item, index) in data.length"
          :key="index"
          :class="{ blue: num == index }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      num: "",
    };
  },
  created() {
    this.$axios.get("json/no_rumor.json").then((res) => {
      this.data = res.data;
    });
  },
};
</script>

<style scoped>
.dots {
  height: 0.56rem;
  line-height: 0.56rem;
  margin: 0.1rem 0;
}
.rumor .dots .blue {
  background-color: #007aff;
}
.dots span {
  width: 0.16rem;
  height: 0.16rem;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 0.08rem;
}

/* .con-wrap{
  overflow-y: auto;
} */
.inner {
  width: 10000px;
  position: absolute;
  top: 0;
  left: 0;
  height: 8.18rem;
}
.share {
  padding: 0.24rem 0.54rem;
  font-size: 0.28rem;
  border-radius: 0.1rem;
}
.wrap-inner {
  padding: 0.32rem 0;
}
/* .btn-wrap {
  margin: 0.2rem 0;
} */
.article {
  padding: 0.32rem;
  font-size: 0.28rem;
  color: #212529;
  width: 100%;
}
.title .head {
  width: 100%;
  height: 100%;
  padding: 0.96rem 0.64rem 0.32rem 0.32rem;
  font-size: 0.4rem;
  overflow: hidden;
}
.title img {
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.long {
  width: 10000px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.title {
  background: url(/img/v.jpg) no-repeat;
  background-size: 6.26rem 200%;
  background-position: 0 50%;
  height: 2.44rem;
  width: 6.26rem;
}
.con .wrap {
  margin: 0.32rem 0.32rem;
  border-radius: 0.1rem;
  overflow: hidden;
  /* background: #fff; */
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.3);
  width: 6.26rem;
}
.con {
  padding: 0 0.32rem;
  height: 8.18rem;
  width: 100%;
  overflow-y: auto;
}
.nook {
  width: 1.36rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.5rem;
  font-size: 0.24rem;
}
.tit {
  margin-bottom: 0.16rem;
  font-size: 0.32rem;
}
.rumor {
  margin-top: 0.52rem;
  padding: 0.3rem;
}
</style>