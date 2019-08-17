<template>
  <div>
    <h2><img src="../../assets/img/d1.jpg" alt=""/></h2>
      <div class="user-box">
        <a href="#">未登录</a>
      </div>
      <ul class="clear">
        <li>
          <router-link to="/login"><p>登录</p></router-link>
        </li>
        <li>
          <router-link to="/register"><p class="end">注册</p></router-link>
        </li>
      </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
export default {
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('isLogin') === 'ok') {
      next('/user/login')
    } else {
      next()
    }
  }
}
</script>
<style lang="scss">
.van-button{
  color: #fff;
 background: #6FAAFC;
  border:none;
}
</style>
