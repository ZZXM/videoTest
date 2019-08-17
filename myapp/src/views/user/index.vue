<template>
  <div class="contain">
    <div class="head">
      <router-view></router-view>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text" @click="zss">
          <i></i>
          <p>VIP年卡</p>
          <b></b>
        </li>
        <li class="mm-text" @click="scc">
          <i></i>
          <p>我的收藏</p>
          <b></b>
        </li>
        <li class="cg-text" @click="lss">
          <i></i>
          <p>观看历史</p>
          <b></b>
        </li>
        <li class="sc-text" @click="ybb">
          <i></i>
          <p>我的优币</p>
          <b></b>
        </li>
        <li class="my_cz" @click="gyy">
          <i></i>
          <p>关于我们</p>
          <b></b>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import '../../assets/js/iconfont'
</script>

<script>
import Vue from 'vue'
import { Dialog } from 'vant'
Vue.use(Dialog)
export default {
  data () {
    return {
      flag: ''
    }
  },
 methods: {
   scc () {
     if (localStorage.getItem('isLogin') === 'ok') {
       this.$router.replace('/sc')
       } else {
           Dialog.confirm({
            message: '您当前未登录，是否前往登录页面？'
          }).then(() => {
            this.$router.push('/Login')
          }).catch(() => {
          });
     }
   },
   lss () {
     if (localStorage.getItem('isLogin') === 'ok') {
       this.$router.replace('/ls')
       } else {
           Dialog.confirm({
            message: '您当前未登录，是否前往登录页面？'
          }).then(() => {
            this.$router.push('/Login')
          }).catch(() => {
          });
     }
   },
   ybb () {
     if (localStorage.getItem('isLogin') === 'ok') {
       this.$router.replace('/yb')
       } else {
           Dialog.confirm({
            message: '您当前未登录，是否前往登录页面？'
          }).then(() => {
            this.$router.push('/Login')
          }).catch(() => {
          });
     }
   },
   gyy () {
     this.$router.replace('/gy')
   },
   zss () {
     if (localStorage.getItem('isLogin') === 'ok') {
       this.$router.replace('/zs')
       } else {
           Dialog.confirm({
            message: '您当前未登录，是否前往登录页面？'
          }).then(() => {
            this.$router.push('/Login')
          }).catch(() => {
          });
     }
   }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.name === 'user') {
        if (localStorage.getItem('isLogin') === 'ok') {
          vm.$router.replace('/user/login')
        } else {
          vm.$router.replace('/user/nologin')
        }
      } else {
        next()
      }
    })
  }
}
</script>
<style lang="scss" scoped>
body{background:#fff;}
@import url('../../assets/css/user.css');
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.van-button{  background: #6FAAFC;}
</style>
