<template>
  <!-- 组件内容 -->
  <div class="fed">
    <div class="top">
      <img src="/img/ky.png" alt="" />
    </div>
    <div class="text tc">
      <p>点击下方盟友</p>
      <p>获取更多信息及优惠券</p>
    </div>
    <div class="icon-wrap">
      <div class="item" v-for="(item,index) in data" :key="index">
        <a :href="item.url">
          <img :src="item.img" :alt="item.title" />
        </a>
      </div>
    </div>
    <div class="text tc bom">
      STAY HOME 为抗疫出一分力
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
    this.$axios.get("json/federation.json").then((res) => {
      this.data = res.data;
    })
  },
};
</script>

<style scoped>
.bom{
  margin-bottom: 0.25rem;
}
.icon-wrap .item{
  margin: 0.1856rem;
}
.icon-wrap{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.item{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: solid #000 0.02rem;
}
.item img{
  width: 0.96rem;
  height: 0.96rem;
  border-radius: 50%;
}
.text {
  padding: 0.32rem 0;
  font-size: 0.32rem;
}
.fed .top {
  padding-top: 0.16rem;
}
.fed .top img {
  width: 100%;
}
.fed {
  padding: 0 0.3rem;
}
</style>