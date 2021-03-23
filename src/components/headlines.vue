<template>
  <!-- 组件内容 -->
  <div class="line">
    <div class="title">疫情头条</div>
    <div class="article">
      <div class="item" v-for="(item,index) in data" :key="index">
        <a :href="item.url">
          <div class="tit">{{item.title}}</div>
          <div class="con">{{item.excerpt}}</div>
          <div class="sm">{{item.date}}</div>
        </a>
      </div>
    </div>
    <a class="block orange allow tc" href="javascript:;">提供新闻线索/举报谣言</a>
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
    this.$axios.get("json/headlines.json").then((res) => {
      this.data = res.data;
    });
  },
};
</script>

<style scoped>
.allow{
  margin-top: 0.2rem;
  font-size: 0.28rem;
  width: 100%;
  height: 0.84rem;
  line-height: 0.84rem;
  border-radius: 0.5rem;
  border: 1px solid #ffc602;
}
.item .sm {
  font-size: 0.24rem;
  color: #999;
  margin: 0.16rem 0;
}
.item .con {
  padding-top: 0.24rem;
  font-size: 0.24rem;
  color: #777;
}
.item .tit {
  padding-bottom: 0.16rem;
  color: #333;
  font-size: 0.32rem;
}
.article .item {
  padding: 0.32rem 0;
}
.line .title {
  font-size: 0.32rem;
  padding-bottom: 0.32rem;
  border-bottom: 1px solid #ddd;
}
.line {
  background: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
  margin:0 0.3rem;
  padding: 0.32rem;
}
</style>