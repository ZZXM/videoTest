<template>
    <div class="contain">
      <div class="header">
        <div class="header-left">
          <ul id="header-li">
            <li @click="hotInfo"  :class="topStyle">热播</li>
            <li @click="likeInfo" :class="likeStyle">搞笑</li>
            <li @click="pickInfo" :class="pickStyle">精选</li>
            <li @click='highInfo' :class="highStyle">高分</li>
            <li @click="childrenInfo" :class="childrenStyle">少儿</li>
            <li @click="guessInfo" :class="guessStyle">你喜欢</li>
            <li @click="vipInfo" :class="vipStyle" style="color: #e9bd6c">VIP</li>
          </ul>
        </div>
        <div class="header-right">
          <button @click="showPopup">
            <div class="header-list" style="color: #9e9e9e">
              <van-icon name="bars" size="0.24rem"/>
            </div>
          </button>
          <van-popup
            v-model="topShow"
            position="left"
            :style="{ height: '100%' , width: '80%'}"
          >
            <div class="page-list">
              <div class="page-list-top">
                <van-notice-bar
                  mode="closeable"
                  text="尊敬的用户，谢谢您参与本应用的内测活动，若您在使用中遇到问题,可及时反馈至邮箱1421820516@qq.com,再次感谢您"
                  background="#9e9e9e0f"
                  color="#e91e63a3"
                  left-icon="volume-o"
                />
                <div class="page-list1">
                  <div @click="hotInfo">
                    <i class="iconfont icon-rebo" style="color: #5e28d4"></i>
                    <span>热播</span>
                  </div>
                  <div @click="likeInfo">
                    <i class="iconfont icon-gaoxiaolei" style="color: #ff9800"></i>
                    <span>搞笑</span>
                  </div>
                  <div @click="pickInfo">
                    <i class="iconfont icon-jingxuan" style="color: #4caf50"></i>
                    <span>精选</span>
                  </div>
                </div>
                <div class="page-list2">
                  <div @click='highInfo'>
                    <i class="iconfont icon-gaofenqiang-tupianxiangqingicon" style="color: #e91e63"></i>
                    <span>高分</span>
                  </div>
                  <div @click="childrenInfo">
                    <i class="iconfont icon-my_child" style="color: #e91e63"></i>
                    <span>少儿</span>
                  </div>
                  <div @click="guessInfo">
                    <i class="iconfont icon-cainixihuan1" style="color: #e91e63"></i>
                    <span>你喜欢</span>
                  </div>
                </div>
                <div class="page-list3" @click="vipInfo">
                  <i class="iconfont icon-VIPzhuanqu"></i>
                  <span> V I P 专 区</span>
                </div>
                <div class="page-list5" @click="helpShow">
                  <div style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #ffc10724 50%,#FFFEFF 100%);">
                    <div class="div">
                      <i class="iconfont icon-12345"></i>
                      <span> 赞助我们</span>
                    </div>
                    <p style="color: #607d8b">
                      <span style="color: #ff5722;font-size: 14px">希望您能成为其中之一</span>
                      <br>
                      赞助是对我们团队认真做免费应用的一种欣赏和支持!
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-list4">
                <img src="../../assets/homeImg/vip2.gif" alt="网络错误，加载失败">
              </div>
            </div>
          </van-popup>
        </div>
      </div>
      <div class="content">
        <div class="banner" v-if="bannerShow">
          <div class="banner-bg">
            <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <img src="../../assets/homeImg/1.jpg" alt="加载失败" @click="getMovieSo('https://www.iqiyi.com/v_19rsmeb7os.html?src=focustext_1_20130410_4','跳舞吧！大象')">
              </van-swipe-item>
              <van-swipe-item>
                <img src="../../assets/homeImg/2.jpg" alt="加载失败" @click="getMovieSo('https://www.iqiyi.com/v_19rr8ie73o.html?spm=a2h0k.11417342.soresults.dtitle','阿丽塔-战斗天使')">
              </van-swipe-item>
              <van-swipe-item>
                <img src="../../assets/homeImg/3.jpg" alt="加载失败" @click="getMovieSo('https://v.qq.com/x/cover/lvjgpbrmo0dpz14.htmllei','雷霆沙赞')">
              </van-swipe-item>
              <van-swipe-item>
                <img src="../../assets/homeImg/4.jpg" alt="加载失败" @click="getMovieSo('https://v.qq.com/x/cover/xyne4253g35nak3.html', '惊奇队长')">
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div class="weather" v-if="weatherShow" >
          <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tm&skin=durian" frameborder="0" width="270" height="26" allowtransparency="true"></iframe>
        </div>
        <div v-html="moiveInfo" style="border-radius: 0 0 15px 15px;height: auto;overflow: hidden"></div>
        <div style="border-bottom: 1px solid #cccccc38;width: 94%;margin: 0 auto;font-family: myfont;font-weight: bold;font-size: 0.2rem;color: #e91e63">{{ InfoTitle }}</div>
        <van-list
          v-model="listLoading"
          :finished="listFinished"
          finished-text="我是有底线的"
          @load="listonLoad"
        >
          <ul class="movie-list">
            <li class="movie-li" v-for="(item, index) in movieInfo" :key="index" style="position: relative" @click="getDate(item.id)">
              <div class="vipMovie" v-show="vipMoiveInfo">V I P</div>
              <img :src="item.cover" alt="网络故障">
              <span class="movie-t">{{ item.title }}</span>
              <div class="ratings">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href=" #icon-xing2"></use>
                  <use :xlink:href="(item.rate/2).toFixed(1) >= 1 ? '#icon-xing2' : (item.rate/2).toFixed(1) >= 0.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="(item.rate/2).toFixed(1) >= 2 ? '#icon-xing2' : (item.rate/2).toFixed(1) >= 1.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="(item.rate/2).toFixed(1) >= 3 ? '#icon-xing2' : (item.rate/2).toFixed(1) >= 2.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="(item.rate/2).toFixed(1) >= 4 ? '#icon-xing2' : (item.rate/2).toFixed(1) >= 3.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="(item.rate/2).toFixed(1) >= 5 ? '#icon-xing2' : (item.rate/2).toFixed(1) >= 4.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <span style="color: #9e9e9e;margin-left: 5px;">{{(item.rate/ 2).toFixed(1) }}</span>
              </div>
            </li>
          </ul>
        </van-list>
        <div v-if="scrinfo" class="scrinfo" @click="goTop">
          <i class="iconfont icon-fanhuidingbu" style="font-size: 0.3rem;"></i>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Popup, Button, Toast, Rate, NoticeBar, Swipe, SwipeItem, Grid, GridItem, ImagePreview, List, Dialog } from 'vant'
Vue.use(Popup)
Vue.use(Button)
Vue.use(Rate)
Vue.use(Toast)
Vue.use(NoticeBar)
Vue.use(List)
Vue.use(ImagePreview)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Grid).use(GridItem)
export default {
  mounted () {
    fetch('/api/j/search_subjects?type=movie&tag=高分&sort=time&page_limit=6&page_start=0', {
      method: 'GET'
    })
      .then(res => res.json()).then(data => {
        this.movieInfo = data.subjects
      })
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = '//at.alicdn.com/t/font_1297396_t1lgsn8qxne.js'
    document.body.appendChild(s)
    const contents = document.querySelector('.content')
    contents.addEventListener('scroll', this.scrollFn)
  },
  data () {
    return {
      scrinfo: false,
      list: [],
      listLoading: false,
      listFinished: false,
      moiveInfo: '',
      likeMovie: '<iframe height="30%" width="100%" src=\'http://player.youku.com/embed/XNDIxNDY4NDkyOA==\' frameborder=0></iframe>',
      pickMovie: '<iframe height="30%" width="100%" src=\'http://player.youku.com/embed/XMTI5MTYxMzE0MA==\' frameborder=0></iframe>',
      highMovie: '<iframe height="30%" width="100%" src=\'http://player.youku.com/embed/XNTk0ODY4MTk2\' frameborder=0></iframe>',
      childrenMovie: '<iframe height="30%" width="100%" src=\'http://player.youku.com/embed/XNDI3NTQ1MDI0NA==\' frameborder=0></iframe>',
      guessMovie: '<iframe height="30%" width="100%" src=\'http://player.youku.com/embed/XNjkyNjEzMDg4\' frameborder=0 ></iframe>',
      vipMovie: '<iframe height="30%" width="100%" src=\'http://player.youku.com/embed/XNjQ0NDY2MjE2\' frameborder=0></iframe>',
      bannerShow: true,
      weatherShow: true,
      vipMoiveInfo: false,
      InfoTitle: '最近热门',
      topStyle: 'liStyle',
      likeStyle: '',
      pickStyle: '',
      highStyle: '',
      childrenStyle: '',
      guessStyle: '',
      vipStyle: '',
      topShow: false,
      value: 0,
      movieInfo: [],
      pageNum: 1
    }
  },
  methods: {
    getMovieUrl (Url) {
      this.$router.push({ name: 'urlVideo', params: { url: Url, name: '扫毒2' } })
    },
    getMovieSo (ALT, tit) {
      this.$router.push({ name: 'playVideo', params: { url: ALT, name: tit } })
    },
    getDate (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    scrollFn () {
      if (event.target.scrollTop > 260) {
        this.scrinfo = true
      } else {
        this.scrinfo = false
      }
    },
    goTop () {
      const contents = document.querySelector('.content')
      var timer = ''
      if (contents.scrollTop > 0) {
        timer = setInterval(function () {
          contents.scrollTop -= 100
          if (contents.scrollTop === 0) {
            clearInterval(timer)
            this.finished = false
          }
        }, 20)
      }
    },
    listonLoad () {
      this.listLoading = true
      fetch('/api/j/search_subjects?type=movie&tag=高分&sort=time&page_limit=6&page_start=' + this.pageNum * 6, {
        method: 'GET'
      })
        .then(res => res.json()).then(data => {
          this.listLoading = false // 数据加载完毕
          this.pageNum++
          if (this.movieInfo.length > 21) {
            this.listFinished = true // 没有数据了
          } else {
            this.movieInfo = [...this.movieInfo, ...data.subjects]
          }
        })
      this.finished = true
    },
    hotInfo () {
      this.moiveInfo = ''
      this.bannerShow = true
      this.weatherShow = true
      this.vipMoiveInfo = false
      this.topStyle = 'liStyle'
      this.likeStyle = ''
      this.pickStyle = ''
      this.highStyle = ''
      this.childrenStyle = ''
      this.guessStyle = ''
      this.vipStyle = ''
      this.topShow = false
      const uls = document.querySelector('.header-left')
      uls.scrollLeft = 0
      this.InfoTitle = '最近热门'
      fetch('/api/j/search_subjects?type=movie&tag=高分&sort=time&page_limit=21&page_start=0', {
        method: 'GET'
      })
        .then(res => {
          Toast.loading({
            duration: 300,
            forbidClick: true,
            loadingType: 'circular',
            message: '数据加载中...'
          })
          return res.json()
        }).then(data => {
          this.movieInfo = data.subjects
        })
    },
    likeInfo () {
      const contents = document.querySelector('.content')
      contents.scrollTop = 0
      this.bannerShow = false
      this.weatherShow = false
      this.moiveInfo = this.likeMovie
      this.vipMoiveInfo = false
      this.topStyle = ''
      this.likeStyle = 'liStyle'
      this.pickStyle = ''
      this.highStyle = ''
      this.childrenStyle = ''
      this.guessStyle = ''
      this.vipStyle = ''
      this.topShow = false
      const uls = document.querySelector('.header-left')
      const liWidth = document.querySelector('li').offsetWidth
      uls.scrollLeft = liWidth * 0
      this.InfoTitle = '爆笑喜剧'
      fetch('/api/j/search_subjects?type=movie&tag=喜剧&sort=time&page_limit=21&page_start=0', {
        method: 'GET'
      })
        .then(res => {
          Toast.loading({
            duration: 300,
            forbidClick: true,
            loadingType: 'circular',
            message: '数据加载中...'
          })
          return res.json()
        }).then(data => {
          this.movieInfo = data.subjects
        })
    },
    pickInfo () {
      const contents = document.querySelector('.content')
      contents.scrollTop = 0
      this.bannerShow = false
      this.weatherShow = false
      this.moiveInfo = this.pickMovie
      this.vipMoiveInfo = false
      this.topStyle = ''
      this.likeStyle = ''
      this.pickStyle = 'liStyle'
      this.highStyle = ''
      this.childrenStyle = ''
      this.guessStyle = ''
      this.vipStyle = ''
      this.topShow = false
      const uls = document.querySelector('.header-left')
      const liWidth = document.querySelector('li').offsetWidth
      uls.style.transition = '0.3s'
      uls.scrollLeft = liWidth * 0
      this.InfoTitle = '为你精选'
      fetch('/api/j/search_subjects?type=movie&tag=精选&sort=time&page_limit=21&page_start=0', {
        method: 'GET'
      })
        .then(res => {
          Toast.loading({
            duration: 300,
            forbidClick: true,
            loadingType: 'circular',
            message: '数据加载中...'
          })
          return res.json()
        })
        .then(data => {
          this.movieInfo = data.subjects
        })
    },
    highInfo () {
      const contents = document.querySelector('.content')
      contents.scrollTop = 0
      this.bannerShow = false
      this.weatherShow = false
      this.moiveInfo = this.highMovie
      this.vipMoiveInfo = false
      this.topStyle = ''
      this.likeStyle = ''
      this.pickStyle = ''
      this.highStyle = 'liStyle'
      this.childrenStyle = ''
      this.guessStyle = ''
      this.vipStyle = ''
      this.topShow = false
      const uls = document.querySelector('.header-left')
      const liWidth = document.querySelector('li').offsetWidth
      var timer = null
      this.InfoTitle = '豆瓣高分'
      fetch('/api/j/search_subjects?type=movie&tag=高分&sort=time&page_limit=21&page_start=50', {
        method: 'GET'
      })
        .then(res => {
          Toast.loading({
            duration: 300,
            forbidClick: true,
            loadingType: 'circular',
            message: '数据加载中...'
          })
          return res.json()
        })
        .then(data => {
          this.movieInfo = data.subjects
        })
      if (uls.scrollLeft < liWidth * 1) {
        timer = setInterval(() => {
          uls.scrollLeft += 10
          if (uls.scrollLeft > liWidth * 1) {
            uls.scrollLeft -= 10
            clearInterval(timer)
          }
        }, 10)
      }
      if (uls.scrollLeft > liWidth * 1) {
        timer = setInterval(() => {
          uls.scrollLeft -= 10
          if (uls.scrollLeft < liWidth * 1) {
            clearInterval(timer)
          }
        }, 10)
      }
    },
    childrenInfo () {
      const contents = document.querySelector('.content')
      contents.scrollTop = 0
      this.bannerShow = false
      this.weatherShow = false
      this.moiveInfo = this.childrenMovie
      this.vipMoiveInfo = false
      this.topStyle = ''
      this.likeStyle = ''
      this.pickStyle = ''
      this.highStyle = ''
      this.childrenStyle = 'liStyle'
      this.guessStyle = ''
      this.vipStyle = ''
      this.topShow = false
      this.InfoTitle = '儿童专区'
      fetch('/api/j/search_subjects?type=movie&tag=动画&sort=time&page_limit=21&page_start=0', {
        method: 'GET'
      })
        .then(res => {
          Toast.loading({
            duration: 300,
            forbidClick: true,
            loadingType: 'circular',
            message: '数据加载中...'
          })
          return res.json()
        })
        .then(data => {
          this.movieInfo = data.subjects
        })
      const uls = document.querySelector('.header-left')
      const liWidth = document.querySelector('li').offsetWidth
      var timer = null
      if (uls.scrollLeft < liWidth * 2) {
        clearInterval(timer)
        timer = setInterval(() => {
          uls.scrollLeft += 10
          if (uls.scrollLeft > liWidth * 2) {
            clearInterval(timer)
          }
        }, 10)
      }
      if (uls.scrollLeft > liWidth * 2) {
        timer = setInterval(() => {
          uls.scrollLeft -= 10
          if (uls.scrollLeft < liWidth * 2) {
            clearInterval(timer)
          }
        }, 10)
      }
    },
    guessInfo () {
      const contents = document.querySelector('.content')
      contents.scrollTop = 0
      this.bannerShow = false
      this.weatherShow = false
      this.moiveInfo = this.guessMovie
      this.vipMoiveInfo = false
      this.topStyle = ''
      this.likeStyle = ''
      this.pickStyle = ''
      this.highStyle = ''
      this.childrenStyle = ''
      this.guessStyle = 'liStyle'
      this.vipStyle = ''
      this.topShow = false
      this.InfoTitle = '猜你喜欢'
      fetch('/api/j/search_subjects?type=movie&tag=恐怖&sort=time&page_limit=21&page_start=0', {
        method: 'GET'
      })
        .then(res => {
          Toast.loading({
            duration: 300,
            forbidClick: true,
            loadingType: 'circular',
            message: '数据加载中...'
          })
          return res.json()
        })
        .then(data => {
          this.movieInfo = data.subjects
        })
      const uls = document.querySelector('.header-left')
      const liWidth = document.querySelector('li').offsetWidth
      uls.scrollLeft = liWidth * 3
    },
    vipInfo () {
      if (localStorage.getItem('isLogin') === 'ok') {
        const contents = document.querySelector('.content')
        contents.scrollTop = 0
        this.bannerShow = false
        this.weatherShow = false
        this.moiveInfo = this.vipMovie
        this.vipMoiveInfo = true
        this.topStyle = ''
        this.likeStyle = ''
        this.pickStyle = ''
        this.highStyle = ''
        this.childrenStyle = ''
        this.guessStyle = ''
        this.vipStyle = 'liStyle'
        this.topShow = false
        this.InfoTitle = 'VIP专区'
        fetch('/api/j/search_subjects?type=movie&tag=都市&sort=time&page_limit=21&page_start=30', {
          method: 'GET'
        })
          .then(res => {
            Toast.loading({
              duration: 300,
              forbidClick: true,
              loadingType: 'circular',
              message: '数据加载中...'
            })
            return res.json()
          })
          .then(data => {
            this.movieInfo = data.subjects
          })
        const uls = document.querySelector('.header-left')
        const liWidth = document.querySelector('li').offsetWidth
        uls.scrollLeft = liWidth * 4
      } else {
        Dialog.confirm({
          message: '您当前未登录,无法查看VIP专区\n是否前往登录页面？'
        }).then(() => {
          this.$router.push('/Login')
        }).catch(() => {
        })
      }
    },
    showPopup () {
      this.topShow = true
    },
    rateInfo () {
      Toast({
        message: '谢谢您的评价\n爱您三千遍',
        icon: 'like-o',
        duration: '1500'
      })
    },
    helpShow () {
      ImagePreview([
        'http://47.95.218.13:8100/images/qaq.png'
      ])
    }
  }
}
</script>

<style lang="scss">
@import "@/lib/reset.scss";
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.scrinfo{
  position: fixed;
  right: 0.3rem;
  bottom: 0.7rem;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 0.4rem;
  @include rect(0.4rem,0.4rem)
}
.header {
  @include rect(100%, 0.44rem);
  @include flexbox();
  .header-left {
    @include rect(88%, auto);
    overflow: auto;
    background-color: #1d1e29;
    transition: 0.3s;
    ul {
      @include flexbox();
      @include justify-content(center);
      align-content: center;
      @include rect(160%, 100%);
      background-color: #1d1e29;
      transition: 0.3s;
      li {
        @include flex();
        border: 0;
        background-color: #1d1e29;
        text-align: center;
        line-height: 0.44rem;
        font-weight: 700;
        color: #009688;
        font-size: 0.16rem;
        font-family: myfont;
      }
      .liStyle {
        font-size: 0.2rem;
        color: #8bc34a;
        transition: 0.3s;
      }
    }
  }
  .header-right {
    @include rect(12%, auto);
    background-color: #1d1e29;
    button {
      @include rect(100%, 100%);
      background-color: #1d1e29;
      color: #fff;
      border: 0;
    }
    .header-list {
      @include rect(100%, 100%);
      line-height: 0.54rem;
    }
    .page-list {
      @include rect(100%, 100%);
      @include flexbox();
      @include flex-direction(column);
      .page-list-top {
        flex: 1;
        @include flexbox();
        @include flex-direction(column);
        @include rect(100%,auto);
      }
    }
    .page-list {
      @include rect(100%, 100%);
      .page-list1 {
        @include rect(96%, 1rem);
        margin-left: 2%;
        @include flexbox();
        div {
          @include flex();
          @include flexbox();
          @include flex-direction(column);
          @include justify-content(center);
          @include align-items(center);
          font-size: 16px;
          .iconfont {
            @include rect(0.36rem, 0.52rem);
            font-size: 0.36rem;
          }
        }
      }
      .page-list2 {
        @include rect(96%, 1rem);
        margin-left: 2%;
        @include flexbox();
        div {
          @include flex();
          @include flexbox();
          @include flex-direction(column);
          @include justify-content(center);
          @include align-items(center);
          font-size: 0.16rem;
          .iconfont {
            @include rect(0.36rem, 0.52rem);
            font-size: .36rem;
          }
        }
      }
      .page-list3 {
        @include rect(100%, 0.6rem);
        line-height: 0.6rem;
        text-align: center;
        font-family: myfont;
        font-weight: bold;
        border-radius: 0 12px 0 0;
        color: #e9bd6c;
        font-size: 0.2rem;
        background-color: #e9bd6c61;
        .iconfont {
          font-size: 0.2rem;
        }
      }
      .page-list5 {
        flex: 1;
        @include rect(100%, auto);
        /*background-color: red;*/
        .div {
          padding-top: 0.1rem;
          padding-bottom: 0.1rem;
          text-align: center;
          color: #f44336;
          i {
            margin-top: 0.1rem;
            font-size: 0.26rem;
          }
          span {
            font-size: 0.26rem;
          }
        }
        p {
          width: 84%;
          margin-left: 8%;
          line-height: 0.28rem;
        }
      }
      .page-list4 {
        @include rect(100%, 1.3rem);
        border-radius: 10px;
        img {
          @include rect(100%, 1.3rem);
          border-radius: 10px;
        }
      }
    }
  }
}
  .contain {
    @include flexbox();
    @include flex-direction(column);
    .content {
      @include flex();
      @include rect(100%, auto);
      background-color: #fff;
      overflow: auto;
      .banner {
        @include rect(100%, 1.9rem);
        background-image: linear-gradient(to top, #607d8b 0%, #1d1e29 100%);
        .banner-bg {
          @include rect(94%, 1.8rem);
          padding-top: 0.1rem;
          margin-left: 3%;
          img {
            @include rect(100%, 1.8rem);
            border-radius: 10px 10px 0 0;
          }
        }
      }
      .weather {
        @include rect(94%, 0.4rem);
        margin: 0 auto;
        @include flexbox();
        @include align-items(center)
      }
      ul {
        @include flexbox();
        @include rect(94%, auto);
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: space-between;
        li {
          @include rect(32%,auto  );
          /*background-color: red;*/
          margin-top: 0.1rem;
          .vipMovie {
            width: 0.3rem;
            height: 0.15rem;
            background-color: #e9bd6c;
            position: absolute;
            top: 5px;
            right: 5px;
            border-radius: 5px;
            color: #fff;
            line-height: 0.15rem;
            text-align: center;
            font-size: 0.12rem;
            font-family: myfont;
          }
          img {
            @include rect(100%,1.3rem);
            border-radius: 0.04rem;
          }
          .movie-t {
            width: 100%;
            display: block;
            margin-top: 4px;
            font-size: 0.12rem;
            font-weight: bold;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            word-break:keep-all;
          }
          .ratings {
            @include rect(100%, .12rem);
            @include flexbox();
            align-items: center;
            font-size: 0.12rem;
          }
        }
      }
    }
  }
</style>
