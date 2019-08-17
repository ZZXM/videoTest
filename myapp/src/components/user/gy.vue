<template>
  <div>
    <van-nav-bar
      title="关于我们"
      left-arrow
      @click-left="onClickLeft"
      class="c"
    />
    <div class="sc" style="border-radius: 50%"></div>
    <span>当前版本0.8.3</span>
    <ul style="margin-top: 0.3rem">
<!--      <li @click="sp"><p></p></li>-->
      <li @click="lxPopup"><p>联系我们</p><b></b></li>
      <li @click="jc"><p>版本更新</p><b></b></li>
    </ul>
      <h5> </h5>
      <div style="position: fixed;bottom: 0.1rem;display: flex;flex-direction: column;width: 100%">
        <p style="padding-bottom: 0.1rem;text-align: center;font-size: 0.12rem;color: #808dd6">此软件仅做学习交流，不得用于商业用途</p>
        <span>Iron公司 版权所有</span>
        <span>Copyright © 2012-2019 Iron视频</span>
      </div>

      <van-popup
        v-model="lx"
        position="bottom"
        :style="{ height: '20%' }"
      >
      <ul class="u">
        <li>  官方网站：<a href="#">www.zhaohongcheng.com</a></li>
        <li>  商务邮箱：<a>1421820516@qq.com</a></li>
        <li>  客服QQ：<a>1421820516</a></li>
      </ul>
      </van-popup>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Dialog, Toast, Popup } from 'vant'
Vue.use(NavBar)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Popup)
export default {
  data () {
    return {
      lx: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/user/Login')
    },
    hy () {
      Toast('如果您想了解，请深究')
    },
    jc () {
      Toast('当前已是最新版本')
    },
    sp () {
      this.$router.push('/tool')
    },
    lxPopup () {
      this.lx = true
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
.sc{width:3rem;height:1.2rem;background: url(../../assets/img/lg.png) no-repeat center;border-radius:.1rem;margin: .2rem auto 0;background-size:.8rem .8rem;
}
span{display:block;width:100%;height:.2rem;font:.12rem/.1rem "";text-align: center;color:#767676;}
/* ul{margin-top:.1rem;} */
ul li{float: left;width:100%;line-height:.5rem;height: .5rem;background:#fff;}
ul li p{ float:left; font-size:.14rem;margin-left:.19rem;color:#000;}
ul li b{display:block;float:right;width:.18rem;height:.18rem; background:url(../../assets/img/nnn.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.17rem;margin-top:.1rem; }
h5{width:100%;height: .3rem;font:.14rem/.3rem "";text-align: center;margin-bottom: .07rem}
.van-nav-bar__arrow {
    min-width: 1em;
    font-size: 20px;
    font-weight: 900;
}
.van-toast--text .van-toast__text {height:.3rem;line-height:.3rem;}
.u li{margin-left:.1rem;}
.van-toast__text {
    height: .3rem;
    line-height: .3rem;
    color:#fff;
}
</style>
