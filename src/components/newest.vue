<template>
  <!-- 组件内容 -->
  <div class="newest">
    <a href="javscript:;" class="title block white bgblack tc">最新疫情动态</a>
    <div class="con">
      <div class="tit">加拿大</div>
      <div class="wrap">
        <div class="item pore" v-for="(item,index) in data" :key="index">
          <a :href="item.url">
            <div class="head">{{item.date}} 本网综合</div>
            <div class="text">{{item.excerpt}}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
    };
  },
  created() {
    this.$axios.get("json/newest.json").then((res) => {
      this.data = res.data;
    });
  },
};
</script>

<style scoped>
.item::before{
  content: "";
    width: 0.14rem;
    height: 0.14rem;
    border-radius: 100%;
    display: block;
    background: #ffc602;
    border: 0.06rem solid #ffe380;
    position: absolute;
    left: -0.46rem;
    top: 0;
}
.item .text{
  font-size: 0.32rem;
  margin-top: 0.2rem;
}
.item .head{
  font-size: 0.24rem;
}
.item a{
  color: #555;
}
.item{
  padding-bottom: 0.32rem;
  margin: 0.32rem 0 0 0.32rem;
}
.con .wrap{
  margin-left: 0.16rem;
  border-left: 1px solid rgba(255,198,2,.3);
}
.con .tit{
  font-size: 0.32rem;
  padding-top: 0.16rem;
  color: #111;
}
.newest .con{
  padding: 0 0.3rem;
}
.newest .title {
  margin: 0.64rem 0 0.32rem;
  width: 2.32rem;
  height: 0.76rem;
  line-height: 0.76rem;
  font-size: 0.28rem;
  border-radius: 0.5rem;
}
.newest {
  margin: 0 0.3rem;
}
</style>