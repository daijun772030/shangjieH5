<template>
  <div class="all">
    <ul>
      <li @click="li"><span>懒猪到家用户协议</span><p class="right">></p></li>
      <li @click="li2"><span>懒猪到家隐私政策</span><p class="right">></p></li>
      <li @click="li3"><span>懒猪到家商家规则中心</span><p class="right">></p></li>
      <li @click="li4"><span>法律申明</span><p class="right">></p></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    li () {
      this.$router.push({ path: "/agreement" });
      console.log ("点击成功")
    },
    li2 () {
      this.$router.push({ path: "/privacy" });
      console.log ("点击成功")
    },
    li3 () {
      this.$router.push({ path: "/rule" });
      console.log ("点击成功")
    },
    li4 () {
      this.$router.push({ path: "/law" });
      console.log ("点击成功")
    }
  }
}
</script>
<style scoped>
  .all {
    width: 100%;
    background-color: rgba(252, 252, 252, 0.829);
  }
  ul {
    width: 100%;
    height: 100%;
    padding-top: 10px;
    color: rgb(51, 48, 48);
    font-size: 32px;
  }
  li {
    padding:20px;
    border-bottom: 1px solid rgba(185, 180, 180, 0.829);
    overflow: hidden;
  }
  .right {
    display: inline-block;
    float: right;
  }
</style>


