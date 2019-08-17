<template>
  <div class="footer">
    <ul class="footer-list">
      <router-link to="/home" tag="li" @click.native="homeStyle">
          <i :class="homeInfo === 1 ? homeAlive : homeClass"></i>
          <span>首页</span>
      </router-link>
      <router-link to="/tool" tag="li" @click.native="toolStyle" class="footer-icon">
        <i :class="toolInfo === 0 ? toolClass : toolAlive"></i>
        <span>热门</span>
      </router-link>
      <router-link to="/search" tag="li"  @click.native="searchStyle">
        <i :class="searchInfo === 0 ? searchClass : searchAlive "></i>
        <span>搜索</span>
      </router-link>
      <router-link to="/user" tag="li" @click.native="userStyle">
        <i :class="userInfo === 0 ? userClass : userAlive"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem, Icon } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon)
export default {
  data () {
    return {
      homeInfo: 0,
      toolInfo: 0,
      searchInfo: 0,
      userInfo: 0,
      homeClass: 'iconfont icon-shouye',
      homeAlive: 'iconfont icon-shouye1',
      toolClass: 'iconfont icon-gongju',
      toolAlive: 'iconfont icon-gongju1',
      searchClass: 'iconfont icon-sousuo',
      searchAlive: 'iconfont icon-sousuo-tianchong',
      userClass: 'iconfont icon-yonghuming',
      userAlive: 'iconfont icon-dashujukeshihuaico-'
    }
  },
  methods: {
    homeStyle () {
      this.homeInfo = 1
      this.toolInfo = 0
      this.searchInfo = 0
      this.userInfo = 0
    },
    toolStyle () {
      this.homeInfo = 0
      this.toolInfo = 1
      this.searchInfo = 0
      this.userInfo = 0
    },
    searchStyle () {
      this.homeInfo = 0
      this.toolInfo = 0
      this.searchInfo = 1
      this.userInfo = 0
    },
    userStyle () {
      this.homeInfo = 0
      this.toolInfo = 0
      this.searchInfo = 0
      this.userInfo = 1
    }
  }
}
</script>

<style lang="scss">
@import "@/lib/reset.scss";
@font-face {
  font-family: 'myfont';
  src: url('../lib/font.otf');
}
  .footer-list {
    @include rect(100%, 100%);
    @include flexbox();
    li {
      @include flex();
      @include flexbox();
      @include flex-direction(column);
      @include align-items(center);
      @include justify-content(center);
      font-family: myfont;
      .iconfont{
        @include font-size(0.24rem);
        @include rect(0.24rem, 0.32rem);
      }
      .icon-shouye1, .icon-sousuo-tianchong, .icon-dashujukeshihuaico-{
        transform: scale(1.1);
        transition: 0.5s;
        color: #009688;
      }
      .icon-gongju {
        transform: scale(1.2);
      }
      .icon-gongju1{
        transform: scale(1.3);
        transition: 0.5s;
        color: #009688;
      }
    }
  }
</style>
