<template>
  <div>
    <h3>
    <van-nav-bar
      title="我的优币"
      left-arrow
      @click-left="onClickLeft"
      class="cc"
    />
    <div class="yb"></div>
    <p>亲，您还没有充值消费记录哦~~</p>
    <b @click="sy" style="line-height: 0.4rem">去逛逛</b>
    </h3>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)
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
      if (to.name === 'yb') {
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
h3{background:#FAFAFA;width:100%;height:7.35rem;}
html,body{background:#F4F4F4;}
.cc{background:#fff;}
.van-nav-bar__title {color:#000;
    font-size: 0.16rem;
    font-weight: 800;}
    .van-nav-bar .van-icon {color:#E0E0E0;}
.yb{width:3rem;height:2rem;background: url(../../assets/img/yb.jpg) no-repeat center;margin: .6rem auto .1rem;background-size:2rem 1.3rem;
}
p{width:100%;height:.3rem;font:.16rem/.3rem "";text-align: center;color:#767676;margin-bottom:.2rem;}
b{display:block;width: 1.3rem;height: .4rem;font:.16rem/.4rem "";background:#6FAAFC;border-radius:.25rem;text-align: center;color:#fff;margin:0 auto;}
h3 .van-nav-bar__arrow {
    min-width: 1em;
    font-size: 20px;
    font-weight: 900;
}
</style>
