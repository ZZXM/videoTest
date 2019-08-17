<template>
    <div class="contain">
      <div class="Pheader" style="width: 100%;background-color: #000;">
        <div @click='getPtopShow' style="position: fixed; right: 0.23rem;top: 0.18rem;font-size: 0.1rem;color: #9e9e9e47">{{ PtopShow ? '&uarr; 收起导航' : '&darr; 展开导航'}}</div>
        <div class="Ptop" v-if="PtopShow">
          <div class="topBack" @click="topBack">
            <i class="iconfont icon-fanhui11"></i>
          </div>
          <div style="color: #fff;font-size: 0.16rem">{{ movieName }}</div>
          <div style="opacity: 0">.</div>
        </div>
      </div>
      <div id="note" style="color: #fff;background-color: #000; font-size: 0.05rem;text-align: center;position: relative">
        正在加载，请您稍等...
        <br>
        如遇无法观看，请点击左侧切换线路即可
        <div @click="getDelete" style="position: absolute;right: 0.08rem;top: 0.06rem;width: 0.3rem;height: 0.2rem;">
          X
        </div>
      </div>
      <div class="page">
        <iframe id="player" :src="'http://api.nobij.top/jx/?url=' + movieUrl" frameborder="0" width="100%" height="100%"></iframe>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { NoticeBar } from 'vant'
Vue.use(NoticeBar)
export default {
  mounted () {
    const { url } = this.$route.params
    const { name } = this.$route.params
    this.movieUrl = url
    this.movieName = name
    console.log(url)
  },
  data () {
    return {
      notice: true,
      movieUrl: '',
      movieName: '',
      PtopShow: true
    }
  },
  methods: {
    topBack () {
      this.$router.back()
    },
    getDelete () {
      console.log(111)
      this.notice = false
      document.getElementById('note').style.display = 'none'
    },
    getPtopShow () {
      this.PtopShow = !this.PtopShow
      console.log(111)
    }
  }
}
</script>

<style lang="scss">
  @import "@/lib/reset.scss";
  .contain {
    display: flex;
    flex-direction: column;
    .Ptop {
      @include rect(92%, 0.46rem);
      margin: 0 auto;
      @include flexbox();
      justify-content: space-between;
      align-items: center;
      background-color: #000;
      color: #fff;
      font-size: 0.16rem;
      font-weight: bold;
      .topBack {
        line-height: 0.46rem;
        .icon-fanhui1 {
          font-size: 0.16rem;
        }
      }
    }
    .page {

      flex: 1;
    }
  }
</style>
