<template>
    <div class="containD">
      <div class="Dtop">
        <div class="topBack" @click="topBack">
          <i class="iconfont icon-fanhui11"></i>
        </div>
        <div>电影详情</div>
        <div style="opacity: 0">.</div>
      </div>
      <div class="content">
        <van-skeleton
          title
          avatar
          :row="4"
          :loading="skeletonLoading"
        >
          <div class="content-top">
            <div class="detail-img" >
              <img :src="movieImages" alt="加载中..." @click="movieImagesInfo">
            </div>
            <div class="detail-tit">
              <p class="title" style="font-size: 0.20rem; font-weight: 500;font-family: myfont">{{ moviemsg.title }}</p>
              <p class="original" style="font-size: 0.1rem; ">{{ moviemsg.original_title }}</p>
              <p style="font-size: 0.06rem;color: #cccccc">
                片长: {{ moviemsgDurations}}
                <br>
                类型: {{ moviemsgTags[0] }} / {{ moviemsgTags[1] }} / {{ moviemsgTags[2] }}  <br>
                <span>{{ moviemsg.mainland_pubdate  ?  moviemsg.mainland_pubdate +' (中国大陆上映)' : '该影片未在中国大陆上映' }}</span>
              </p>

              <span style="font-size: 0.1rem;text-align: right;color: #9e9e9e" @click="tateInfo">数据有问题?点击反馈</span>
            </div>
          </div>
        </van-skeleton>
<!--        评分-->
        <div class="content-movieRate" style="margin-top: 0.1rem">
          <p style="padding-top: 0.05rem;padding-bottom: 0.05rem;">豆瓣评分&trade;</p>
          <div style="display: flex;">
            <div class="movieRate-l">
              <p style="font-size: 0.36rem; color:#fff;font-weight: 500;line-height: 0.36rem;">{{ moviemsgRate }}</p>
              <div class="ratings">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href=" #icon-xing2"></use>
                  <use :xlink:href="(moviemsgRate/2).toFixed(1) >= 1 ? '#icon-xing2' : (moviemsgRate/2).toFixed(1) >= 0.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="(moviemsgRate/2).toFixed(1) >= 2 ? '#icon-xing2' : (moviemsgRate/2).toFixed(1) >= 1.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="(moviemsgRate/2).toFixed(1) >= 3 ? '#icon-xing2' : (moviemsgRate/2).toFixed(1) >= 2.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="(moviemsgRate/2).toFixed(1) >= 4 ? '#icon-xing2' : (moviemsgRate/2).toFixed(1) >= 3.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="(moviemsgRate/2).toFixed(1) >= 5 ? '#icon-xing2' : (moviemsgRate/2).toFixed(1) >= 4.5 ? '#icon-xing' : '#icon-xing1'"></use>
                </svg>
              </div>
            </div>
            <div class="movieRate-r">
              <div class="star">
                <div>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                </div>
                <div>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                </div>
                <div>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                </div>
                <div>
                  <i class="iconfont icon-xing"></i>
                  <i class="iconfont icon-xing"></i>
                </div>
                <div>
                  <i class="iconfont icon-xing"></i>
                </div>
              </div>
              <div class="progress">
                <div class="progress-bg" >
                  <div class="progress-father">
                    <div class="progress-son" :style='{ width: fiveRate }'></div>
                  </div>
                </div>
                <div class="progress-bg" >
                  <div class="progress-father">
                    <div class="progress-son" :style='{ width: fourRate }'></div>
                  </div>
                </div>
                <div class="progress-bg" >
                  <div class="progress-father">
                    <div class="progress-son" :style='{ width: threeRate }'></div>
                  </div>
                </div>
                <div class="progress-bg" >
                  <div class="progress-father">
                    <div class="progress-son" :style='{ width: twoRate }'></div>
                  </div>
                </div>
                <div class="progress-bg" >
                  <div class="progress-father">
                    <div class="progress-son" :style='{ width: oneRate }'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style="text-align: right;width: 90%;color: #cccccc">{{ addRate }}人参与评分</p>
        </div>
<!--        播放-->
        <div class="videos" @click='videosLook' style="width: 100%;border-bottom: 1px solid rgba(204, 204, 204, 0.1);height: 0.34rem;line-height: 0.3rem;margin: 0.1rem 0 0.1rem 0;color: #fff;font-size: 0.13rem;display: flex;justify-content: space-between" >
          <div>
            <i class="iconfont icon-win-icon" style="color: #FFCA28;font-size: 0.15rem;"></i>
            <span style="margin-left: 0.06rem;font-size: 0.14rem;" v-if="!skeletonLoading">{{ isVideosLook ? '可全片播放' : '暂无可播放片源,去搜索页面试一试'  }}</span>
          </div>
          <div style="display: flex;width: auto" v-if="isVideosLook">
            <div style="margin-right: 0.05rem;" v-if="!skeletonLoading">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563555109551&di=c27ec5626ef1120b1cff5f3396e46c90&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F50%2F36%2F58165162945f4_610.jpg" alt="加载中" style="width: 0.13rem;height: 0.13rem;line-height: 0.31rem;border-radius: 50%">
            </div>
            <div v-for="item in  moviemsg.videos" :key="item.video_id" style="margin-right: 0.05rem;">
              <img :src="item.source.pic" alt="加载中" style="width: 0.13rem;height: 0.13rem;line-height: 0.31rem;">
            </div>
            <i class="iconfont icon-fanhui1" style="font-size: 0.11rem;line-height: 0.34rem;color: #cccccc"></i>
          </div>
        </div>
<!--        播放弹出-->
        <div class="lookBox" v-show="lookBoxInfo" @click="lookBoxInfoOff" style="position: fixed;z-index:9; top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, .7);">
          <div class="lookBoxSon" style="position: absolute; bottom: 0;width: 100%;height: auto;background-color: #f7f0ef;border-radius: 0.1rem 0.1rem 0 0;color: #222;">
            <div style="width: 94%;margin: 0 auto;font-size: 0.17rem;font-weight: bold;height: 0.5rem;line-height: 0.5rem;">
              <i class="iconfont icon-bofang1" style="font-size: 0.20rem;"></i>
              <span style="margin-left: 0.06rem;">可播放片源</span>
            </div>
            <div @click="getMovieCool(moviemsg.title)" style="width: 94%;margin: 0 auto;height: 0.46rem;line-height: 0.46rem;display: flex;justify-content: space-between;border-bottom: 1px solid #cccccc2e;">
              <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563555109551&di=c27ec5626ef1120b1cff5f3396e46c90&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F50%2F36%2F58165162945f4_610.jpg" alt="加载中" style="width: 0.25rem;border-radius: 50%">
                <span style="font-size: 0.10rem;margin-left: 0.06rem;">本站特殊渠道(推荐)</span>
              </div>
              <div>
                <span style="font-size: 0.10rem;margin-right: 0.06rem;">无广告免费观看</span>
                <i class="iconfont icon-fanhui1" style="color: #ccc"></i>
              </div>
            </div>
            <div v-for="(item, index) in moviemsg.videos" :key="index" @click="getMovie(item.sample_link, item.source.name)" style="width: 94%;margin: 0 auto;height: 0.46rem;line-height: 0.46rem;display: flex;justify-content: space-between;border-bottom: 1px solid #cccccc2e;">
              <div>
                <img :src="item.source.pic" alt="加载中" style="width: 0.25rem;border-radius: 50%">
                <span style="font-size: 0.10rem;margin-left: 0.06rem;">{{ item.source.name }}</span>
              </div>
              <div>
                <span style="font-size: 0.10rem;margin-right: 0.06rem;">VIP免费观看</span>
                <i class="iconfont icon-fanhui1" style="color: #ccc"></i>
              </div>
            </div>
            <div style="height: 0.2rem"></div>
          </div>
        </div>
<!--        剧情简介-->
        <div class="summary">
          <p class="summary-title">剧情简介</p>
          <van-popup
            v-model="summaryShow"
            round
            position="bottom"
            :style="{ backgroundColor: '#607d8b',display: 'flex',flexDirection: 'column',color: '#fff'}"
          >
            <p v-show = 'summaryShow' style="font-size: 0.20rem; font-weight: bold;text-align: center; line-height: 0.4rem;font-family: myfont;height: 0.4rem;">剧情简介</p>
            <p v-show = 'summaryShow' style="font-size: 0.14rem; width: 92%;margin: 0 auto;white-space: pre-line;flex: 1;font-weight: 500;">&emsp;{{ moviemsgSummary }}</p>
            <p v-show = 'summaryShow' style="height: 0.2rem">............................................................................................................</p>
          </van-popup>
          <p class="summary-page web-font" @click="getSummary">
            &emsp;{{ moviemsgSummary }}
          </p>
          <p v-if="summaryMore" @click="getSummary" style="text-align: right; font-size: 0.06rem;width: 92%;margin: 0 auto;color: #cccccc">展开更多</p>
        </div>
        <div class="functionary">
          <p class="functionary-title">演职员</p>
          <img src="http://img.zcool.cn/community/01e858594b2e58a8012193a3da10db.gif" alt="" v-if='loadInfo' style="width: 100%; height: 1.6rem">
          <div class="functionaryJob" v-show="!loadInfo">
            <div class="directors">
            <van-popup
              v-model="directorShow"
              :style="{ borderRadius: '0.05rem 0.05rem 0 0',height: '70%',width: '82%'}"
            >
              <div>
                <img :src="moviemsgDirectorsAvatars" alt="加载中" style="width: 101%; height: 100%;margin: 0 auto" >
                <p style="text-align: center;font-weight: bold;height: 10%">{{ moviemsgDirectors.name }}</p>
              </div>
            </van-popup>
            <img :src="moviemsgDirectorsAvatars" alt="加载中" @click="getDirectors">
            <p class="directorsName">{{ moviemsgDirectors.name }}</p>
            <p class="job">导演</p>
          </div>
            <div class="casts" v-for="(item, index) in casts" :key="index">
              <van-popup
                v-model="castsShow"
                :style="{ borderRadius: '0.05rem 0.05rem 0 0',height: '70%',width: '82%'}"
              >
                <div>
                  <img :src="castsInfoShow" alt="加载中" style="width: 101%; height: 100%;margin: 0 auto" >
                  <p style="text-align: center;font-weight: bold;height: 10%">{{ castsInfoName }}</p>
                </div>
              </van-popup>
              <img :src="item.avatars.small ? item.avatars.small : '../../assets/404.jpg'" alt="加载中" @click="getCasts(item.avatars.small, item.name)">
              <p class="castsName">{{ item.name }}</p>
              <p class="job">演员</p>
            </div>
          </div>
        </div>
<!--        分割线-->
        <div class="functionary" style="height: 1.7rem">
          <p class="functionary-title">预告片 / 剧照</p>
          <img src="http://img.zcool.cn/community/01e858594b2e58a8012193a3da10db.gif" alt="" v-if='loadInfo' style="width: 100%; height: 1.3rem">
          <div class="functionaryJob" style="height: 1.3rem" v-show="!loadInfo">
            <div class="directors" style="display: flex;width: auto;height: auto" v-for="item of trailers" :key="item.id">
              <div style="width:2.0rem; height:1.15rem;position: relative; margin-right: 0.04rem;">
                <div style="width: 0.36rem;height: 0.16rem;line-height: 0.16rem;background-color: #ff9800;color: #fff;position: absolute;top: 0.05rem;left: 0.05rem;font-size: 0.10rem;border-radius: 0.02rem;text-align: center;">预告片</div>
                <video width="100%" height="100%" controls style="border-radius: 0.06rem" :poster='item.medium'>
                  <source :src="item.resource_url" type="video/mp4">
                </video>
              </div>
            </div>
            <div class="directors" style="display: flex;width: auto;height: auto" >
              <div style="width:1.7rem; height:1.15rem;position: relative; margin-right: 0.04rem;" v-for="(item, index) of photos" :key="item.id" @click="getPhotos(index)">
                <div style="width: 0.36rem;height: 0.16rem;line-height: 0.16rem;background-color: #3f51b5;color: #fff;position: absolute;top: 0.05rem;left: 0.05rem;font-size: 0.10rem;border-radius: 0.02rem;text-align: center;">剧照</div>
                <img :src="item.image" style="width:1.7rem; height:1.15rem;" alt="">
              </div>
            </div>
          </div>
        </div>
<!--        评论-->
        <div class="popular_comments">
          <p class="popular_comments-tit" style="width: 94%;margin: 0 auto;">精选评论</p>
          <div class="popular_comments-page" v-for="(item, index) in popular_comments" :key="index" style="width: 94%;margin: .14rem auto;border-bottom: 1px solid rgba(204, 204, 204, .1);">
            <div class="commentsPage-t" style="display: flex; height: 0.34rem;align-items: center">
              <img :src="item.author.avatar" alt="" style="width: 0.34rem;height: 0.34rem;">
              <div style="display: flex;height: 0.3rem;flex-direction: column;margin-left: 0.08rem;">
                <span style="font-size: 0.12rem;line-height: 0.12rem;color: #fff;font-weight: 700;">{{ item.author.name }}</span>
                <van-rate
                  v-model="item.rating.value"
                  allow-half
                  void-icon="star"
                  void-color="#eee"
                  size="0.1rem"
                  gutter="0.01rem"
                />
              </div>
            </div>
            <div style="font-size: 0.12rem;padding-top: 0.05rem;color: #fff;">
              {{ item.content }}
            </div>
            <div style="font-size: 0.05rem;color: #b7acac;text-align: right;margin-bottom: 0.1rem">{{ item.created_at }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Rate, Icon, Toast, Skeleton, ImagePreview, Progress, Popup, Dialog } from 'vant'
Vue.use(NavBar)
Vue.use(Rate)
Vue.use(Skeleton)
Vue.use(Progress)
Vue.use(ImagePreview)
Vue.use(Popup)
Vue.use(Icon).use(Toast)
export default {
  mounted () {
    const { id } = this.$route.params
    fetch('/bpi/v2/movie/subject/' + id).then(res => res.json())
      .then(data => {
        console.log(data)
        this.moviemsg = data
        if (this.moviemsg.images.small) {
          this.movieImages = this.moviemsg.images.small
        } else {
          this.movieImages = '../../assets/404.jpg'
        }
        this.moviemsgTags = this.moviemsg.genres
        this.moviemsgDurations = this.moviemsg.durations[0]
        this.moviemsgRate = this.moviemsg.rating.average
        this.fiveRate = this.moviemsg.rating.details['5']
        this.fourRate = this.moviemsg.rating.details['4']
        this.threeRate = this.moviemsg.rating.details['3']
        this.twoRate = this.moviemsg.rating.details['2']
        this.oneRate = this.moviemsg.rating.details['1']
        this.addRate = this.fiveRate + this.fourRate + this.threeRate + this.twoRate + this.oneRate
        this.fiveRate = (Number(this.fiveRate / this.addRate).toFixed(4) * 100 + '%')
        this.fourRate = (Number(this.fourRate / this.addRate).toFixed(4) * 100 + '%')
        this.threeRate = (Number(this.threeRate / this.addRate).toFixed(4) * 100 + '%')
        this.twoRate = (Number(this.twoRate / this.addRate).toFixed(4) * 100 + '%')
        this.oneRate = (Number(this.oneRate / this.addRate).toFixed(4) * 100 + '%')
        this.moviemsgSummary = this.moviemsg.summary
        this.summaryMore = true
        this.moviemsgDirectors = this.moviemsg.directors[0]
        this.moviemsgDirectorsAvatars = this.moviemsg.directors[0].avatars.small
        this.casts = this.moviemsg.casts
        this.trailers = this.moviemsg.trailers
        this.photos = this.moviemsg.photos
        this.popular_comments = this.moviemsg.popular_comments
        if (this.moviemsg.videos[0]) {
          this.isVideosLook = true
          this.getMovieCoolInfo = this.moviemsg.videos[0].sample_link
        } else {
          this.getMovieCoolInfo = false
        }
        this.loadInfo = false
        this.skeletonLoading = false
        if (this.moviemsgSummary.length > 100) {
          this.summaryInfo = true
        }
      })
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = '//at.alicdn.com/t/font_1297396_t1lgsn8qxne.js'
    document.body.appendChild(s)
  },
  data () {
    return {
      skeletonLoading: true,
      ratevalue: 0,
      moviemsg: {},
      movieImages: '',
      moviemsgTags: ['', '', '', ''],
      moviemsgDurations: '',
      detail_imgInfo: '',
      moviemsgRate: '',
      fiveRate: '0%',
      fourRate: '0%',
      threeRate: '0%',
      twoRate: '0%',
      oneRate: '0%',
      addRate: 0,
      moviemsgSummary: '',
      summaryInfo: false,
      summaryShow: false,
      summaryMore: false,
      moviemsgDirectors: {},
      moviemsgDirectorsAvatars: '',
      directorShow: false,
      casts: [],
      castsShow: false,
      castsInfoShow: '',
      castsInfoName: '',
      trailerShow: false,
      loadInfo: true,
      trailers: [],
      photos: [],
      popular_comments: [],
      commentsValue: 0,
      lookBoxInfo: false,
      getMovieCoolInfo: '',
      isVideosLook: false
    }
  },
  methods: {
    tateInfo () {
      Toast({
        message: '谢谢您的反馈',
        icon: 'like'
      })
    },
    topBack () {
      this.$router.back()
    },
    movieImagesInfo () {
      ImagePreview({
        images: [this.movieImages],
        showIndex: false
      })
    },
    getSummary () {
      if (this.summaryInfo) {
        this.summaryShow = true
        this.castsShow = false
      }
      console.log('嘿嘿,这是个彩蛋')
    },
    getDirectors () {
      this.directorShow = true
    },
    getCasts (img, name) {
      this.castsShow = true
      this.summaryShow = false
      this.castsInfoShow = img
      this.castsInfoName = name
    },
    getTrailerShow () {
      this.trailerShow = true
    },
    getPhotos (index) {
      var photosArr = []
      for (var items of this.photos) {
        photosArr.push(items.image)
      }
      ImagePreview({ images: photosArr, startPosition: index })
    },
    videosLook () {
      if (this.isVideosLook === false) {
        return
      }
      this.lookBoxInfo = true
    },
    lookBoxInfoOff () {
      this.lookBoxInfo = false
    },
    getMovieCool (tiele) {
      this.$router.push({ name: 'playVideo', params: { url: this.getMovieCoolInfo, name: tiele } })
    },
    getMovie (move, name) {
      Dialog.confirm({
        title: '跳转提示',
        message: '即将跳转至' + name + '原网页观看'
      }).then(() => {
        window.open(move, '_blank')
      }).catch(() => {
        // on cancel
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/lib/reset.scss";
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_5ldedw2ah6f.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_5ldedw2ah6f.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_5ldedw2ah6f.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_5ldedw2ah6f.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_5ldedw2ah6f.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_5ldedw2ah6f.svg#AlibabaPuHuiTiL') format('svg'); /* iOS 4.1- */
}
.web-font{
  font-family:"webfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
  .containD {
    @include rect(100%, 100%);
    @include flexbox();
    @include flex-direction(column);
    background-color: #607d8b;
    .Dtop {
      @include rect(92%, 0.46rem);
      margin: 0 auto;
      @include flexbox();
      justify-content: space-between;
      align-items: center;
      background-color: #607d8b;
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
    .content {
      @include flex();
      @include rect(92%, auto);
      overflow-x: hidden;
      overflow-y: auto;
      margin: 0 auto;
      /*background-color: grey;*/
      .content-top {
        @include rect(100%, 1.3rem);
        @include flexbox();
        justify-content: space-between;
        color: #fff;
        /*background-color: red;*/
        .detail-img {
          @include rect(32%, 1.3rem);
          img {
            @include rect(100%, 1.3rem);
            border-radius: 6px;
            font-family: myfont;
          }
        }
        .detail-tit {
          @include rect(63%, 1.3rem);
          @include flexbox();
          @include flex-direction(column);
          justify-content: space-between;
        }
      }
      .content-movieRate {
        @include rect(100%, 1rem);
        margin: 0 auto;
        background-color: rgba(0, 0, 0, .2);
        border-radius: 6px;
        @include flexbox();
        @include flex-direction(column);
        p {
          font-size: 0.06rem;
          color:#fff;
          @include rect(94%, auto);
          margin: 0 auto;
        }
        .movieRate-l {
          margin-left: 10%;
          width: 20%;
          height: 0.55rem;
          /*background-color: blueviolet;*/
          position: relative;
          text-align: right;
          @include flexbox();
          @include flex-direction(column);
          justify-content: space-between;
          align-content: space-between;
          align-items: center;
          .ratings {
            @include flexbox();
            @include rect(100%, 0.2rem);
            line-height: 0.3rem;
          }
        }
        .movieRate-r {
          width: 60%;
          height: 0.55rem;
          /*background-color: lightcoral;*/
          margin-left: 5%;
          @include flexbox();
          .star {
            @include rect(30%, 0.55rem);
            /*background-color: greenyellow;*/
            @include flexbox();
            @include flex-direction(column);
            div {
              @include flexbox();
              align-items: center;
              @include rect(auto, 0.11rem);
              justify-content: flex-end;
              .icon-xing {
                font-size: 0.11rem;
                color: #e6e6e6;
              }
            }
          }
          .progress {
            @include rect(66%, 0.55rem);
            margin-left: 4%;
            /*background-color: palegreen;*/
            @include flexbox();
            @include flex-direction(column);
            .progress-bg {
              width: 100%;
              height: 0.11rem;
              /*background-color: #ccc;*/
              display: flex;
              align-items: center;
              .progress-father {
                width: 100%;
                height: 0.07rem;
                background-color: #9e9e9e75;
                position: relative;
                border-radius: 2px;
                .progress-son {
                  width: 30%;
                  height: 0.07rem;
                  background-color: #FFCA28;
                  position: absolute;
                  top: 0;
                  left: 0;
                  border-radius: 2px;
                  transition: 0.3s;
                }
              }
            }
          }
        }
      }
      .summary {
        @include rect(100%, 1.3rem);
        .summary-title {
          font-size: 0.14rem;
          line-height: .4rem;
          font-weight: bold;
          color: #fff;
        }
        .summary-page {
          @include rect(100%, 0.63rem);
          line-height: 0.16rem;
          font-size: 0.12rem;
          color: #fff;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }
      }
      .functionary {
        @include rect(100%, 2rem);
        .functionary-title {
          font-size: 0.14rem;
          line-height: .36rem;
          font-weight: bold;
          color: #fff;
        }
       .functionaryJob {
         @include flexbox();
         @include rect(auto, 1.6rem);
         overflow: auto;
         .directors {
           @include rect(0.74rem, 1.6rem);
           .directorsName {
             @include rect(100%, 0.24rem);
             color: #fff;
             font-size: 0.12rem;
             line-height: 0.24rem;
             @include rect(100%, auto);
             overflow:hidden; //超出的文本隐藏
             white-space:nowrap; //溢出不换行
             text-overflow:ellipsis; //溢出用省略号显示
           }
           img {
             @include rect(0.74rem,1rem);
             border-radius: 0.03rem;
           }
           .job {
             font-size: 0.1rem;
             color: #cccccc;
           }
         }
         .casts {
           margin-left: 0.1rem;
           @include rect(0.74rem, 1.6rem);
           .castsName {
             @include rect(100%, 0.24rem);
             color: #fff;
             font-size: 0.12rem;
             line-height: 0.24rem;
             @include rect(100%, auto);
             overflow:hidden; //超出的文本隐藏
             white-space:nowrap; //溢出不换行
             text-overflow:ellipsis; //溢出用省略号显示
           }
           img {
             @include rect(0.74rem,1rem);
             border-radius: 0.03rem;
           }
           .job {
             font-size: 0.1rem;
             color: #cccccc;
           }
         }
       }
      }
      .popular_comments {
        width: 100%;
        height: auto;
        border-radius: 0.05rem;
        background-color: rgba(0, 0, 0, .2);
        .popular_comments-tit {
          font-size: 0.14rem;
          line-height: .36rem;
          font-weight: bold;
          color: #fff;
        }
        .popular_comments-page {
          @include rect(100%, auto);
          .commentsPage-t {
            img {
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
</style>
