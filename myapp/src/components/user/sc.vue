<template>
  <div>
    <van-nav-bar
      title="我的收藏"
      left-arrow
      @click-left="onClickLeft"
      class="c"
    />
    <div class="sc"></div>
    <p>暂无收藏，要不要我给你看个宝贝？</p>
    <b @click="sy" style="line-height: 0.4rem">去逛逛</b>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Dialog } from 'vant'
Vue.use(NavBar)
Vue.use(Dialog)
export default {
  methods: {
    onClickLeft () {
      this.$router.push('/user/Login')
    },
    sy () {
      this.$router.replace('/tool')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.name === 'sc') {
        if (localStorage.getItem('isLogin') !== 'ok') {
          vm.$router.replace('/Login')
        }
      } else {
        next()
      }
    })
  }
}
</script>
<style scoped>
html,body{background:#F4F4F4;}

.c{background:#fff;}
.van-nav-bar__title {color:#000;
    font-size: 0.16rem;
    font-weight: 800;}
    .van-nav-bar .van-icon {color:#E0E0E0;}
.sc{width:3rem;height:2rem;background: url(../../assets/img/sc.jpg) no-repeat center;margin: .6rem auto .1rem;background-size:2rem 1.5rem;
}
p{width:100%;height:.3rem;font:.16rem/.3rem "";text-align: center;color:#767676;margin-bottom:.2rem;}
b{display:block;width: 1.3rem;height: .4rem;font:.16rem/.4rem "";background:#6FAAFC;border-radius:.25rem;text-align: center;color:#fff;margin:0 auto;}
.van-nav-bar__arrow {
    min-width: 1em;
    font-size: 20px;
    font-weight: 900;
}
</style>
