<template>
  <div>
    <van-nav-bar
      title="VIP年卡"
      left-arrow
      @click-left="onClickLeft"
      class="web-font"
    />
    <div class="zs"></div>
    <p> </p>
    <p>对不起，VIP年卡已下线</p>
    <b class="web-font">为了回馈广大用户的支持</b>
    <span class="web-font">VIP专区现已全部开放</span>
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
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.name === 'zs') {
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
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_z7zwfjd7zp.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_z7zwfjd7zp.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_z7zwfjd7zp.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_z7zwfjd7zp.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_z7zwfjd7zp.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_z7zwfjd7zp.svg#AlibabaPuHuiTiL') format('svg'); /* iOS 4.1- */
}
.web-font{
    font-family:"webfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
h4{background:#3B3C3C;width:100%;height:7.31rem;}
.van-nav-bar__title {color:#000;
    font-size: 0.16rem;
    font-weight: 800;}
    .van-nav-bar .van-icon {color:#E0E0E0;}
.zs{width:3rem;height:2rem;background: url(../../assets/img/sc.jpg) no-repeat center;margin: .3rem auto 0;background-size:2rem 1.5rem;
}
p{width:100%;height:.25rem;font:.16rem/.25rem "";text-align: center;color:#000;}
b{display:block;color:#000;margin-top:1.6rem;text-align: center;font-size:.12rem;}
span{display:block;margin-top:.1rem;color:#000;text-align: center;font-size:.12rem;}
.van-nav-bar__arrow {
    min-width: 1em;
    font-size: 20px;
    font-weight: 900;
}
/* b{display:block;width: 1.3rem;height: .4rem;font:.16rem/.4rem "";background:rgb(244, 90, 206);border-radius:.25rem;text-align: center;color:#fff;margin:0 auto;} */
</style>
