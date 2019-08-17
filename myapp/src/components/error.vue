<template>
  <div>
    <h3>
    <div class="sb"></div>
    <h2>咦~页面不见了~</h2>
    <p>请核对您输入的页面地址是否正确哦~</p>
    <i @click="sy">返回首页</i>
    </h3>
  </div>
</template>
<script>
export default {
  methods: {
    sy () {
      this.$router.replace('/home')
    }
  }
}
</script>
<style scoped>
h3{background:#fff;width:100%;height:7.35rem;}
.sb{width:3rem;height:3rem;background: url(../assets/img/err.jpg) no-repeat center;margin: 0 auto;background-size:2rem 2rem;
}
h2{width:100%;height:.4rem;font:.24rem/.3rem "";text-align: center;font-weight:700;}
p{width:100%;height:.3rem;font:.16rem/.3rem "";text-align: center;color:#767676;margin-bottom:.2rem;}
i{display:block;width: 1.3rem;height: .4rem;font:.16rem/.4rem "";background:#6FAAFC;text-align: center;color:#fff;margin:0 auto;border-radius: .25rem;}
</style>
