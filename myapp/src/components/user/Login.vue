<template>
  <div>
      <div class="bbb">
        <img src="../../assets/img/heading.png" alt=""/>
        <a href="#">欢迎小仙女进入！！！</a>
      </div>
      <a href="javascript:;" @click="logout" class="z" style="line-height: 0.3rem">注销</a>
  </div>
</template>
<script>
export default {
  methods: {
    logout () {
      localStorage.setItem('isLogin', null)
      if (localStorage.getItem('isLogin') !== 'ok') {
        this.$router.push('/user')
        history.go(0)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('isLogin') === 'ok') {
      next()
    } else {
      next('/user/nologin')
    }
  }
}
</script>
<style scoped>
  .bbb{margin-top:.2rem;}
  img{display:inline-block;width:.7rem;height:.7rem;margin-top:.14rem;border-radius:50%;margin:0;margin-left:.3rem;}
  .bbb a{display:inline-block;color:#fff;margin-left:.14rem;margin-top:.2rem;}
  .z{color:#fff;display:block;margin: .2rem .3rem;background: rgba(0,0,0,.2);width: .6rem;height: .3rem;text-align: center;font:.14rem/.3rem "";border-radius: .08rem;}
</style>
