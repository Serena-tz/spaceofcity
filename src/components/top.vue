<template>
  <!-- 组件内容 -->
  <div class="head">
    <a href="javscript:;">
      <img src="/img/logo.png" alt="">
    </a>
  </div>
</template>

<script>
// 导入组件
// import star from "./star.vue";
export default {
  data() {
    return {}
  },
  components: {},
  methods: {},
  created() {},
};
</script>

<style scoped>
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.8rem;
  /* line-height: 2rem; */
  overflow: hidden;
  background: #000;
  /* padding: 0.25rem 0.625rem; */
  box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 9;
}
.head img{
  width: 1.6rem;
  margin: 0.04rem 0 0.04rem 0.1rem;
}
</style>