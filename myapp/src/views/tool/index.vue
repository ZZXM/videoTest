<template>
    <div class="contain">
     <div class="tit">热门</div>
      <div class="conten">
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XMjY0MDA5NDM2NA==' frameborder=0 style='border-radius:5px'></iframe>
        <div class="a">
           <p>
            <img src="../../assets/img/g.jpg"/>
            <i>闻娱教主</i>
          </p>
          <span @click="showPopup">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XNDIxNTE1NzQwNA==' frameborder=0 style='border-radius:5px'></iframe>
        <div class="a">
           <p>
            <img src="../../assets/img/f.jpg"/>
            <i>星游记方</i>
          </p>
          <span @click="xyPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="xy"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XMzUyNjQ3MTg1Mg==' frameborder=0 style='border-radius:5px'></iframe>
         <div class="a">
           <p>
            <img src="../../assets/img/r.jpg"/>
            <i>浅浅澄月</i>
          </p>
          <span @click="qqPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="qq"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XNDExMDI3Mjg4MA==' frameborder=0 style='border-radius:5px'></iframe>
         <div class="a">
           <p>
            <img src="../../assets/img/t.jpg"/>
            <i>欣小萌V</i>
          </p>
          <span @click="xmPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
           <van-popup
            v-model="xm"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XNDI1MDEyOTkzMg==' frameborder=0 style='border-radius:5px'></iframe>
         <div class="a">
           <p>
            <img src="../../assets/img/y.jpg"/>
            <i>Vv北森深鹿-</i>
          </p>
          <span @click="bsPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="bs"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XNDI2NDE3MTA1Mg==' frameborder=0 style='border-radius:5px'></iframe>
         <div class="a">
           <p>
            <img src="../../assets/img/u.jpg"/>
            <i>Tocc随缘</i>
          </p>
          <span @click="syPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="sy"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XNDI2NDIwOTM1Ng==' frameborder=0 style='border-radius:5px'></iframe>
         <div class="a">
           <p>
            <img src="../../assets/img/aa.jpg"/>
            <i>Z章鱼君</i>
          </p>
          <span @click="zyPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="zy"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XNDI2ODk1NjU5Mg==' frameborder=0 style='border-radius:5px'></iframe>
         <div class="a">
           <p>
            <img src="../../assets/img/s.jpg"/>
            <i>M喵星人</i>
          </p>
          <span @click="msPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="mx"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XNDEzMjMxMjYyOA==' frameborder=0 style='border-radius:5px'></iframe>
         <div class="a">
           <p>
            <img src="../../assets/img/e.jpg"/>
            <i>咖喱FPS</i>
          </p>
          <span @click="glPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="gl"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100%  src='http://player.youku.com/embed/XNDI3NTQ1ODM0NA==' frameborder=0 style='border-radius:5px'></iframe>
         <div class="a">
           <p>
            <img src="../../assets/img/g.jpg"/>
            <i>喵来啦—</i>
          </p>
          <span @click="mlPopup">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-copy"></use>
          </svg>
          </span>
          <van-popup
            v-model="ml"
            position="bottom"
            :style="{ height: '20%' }"
          >
          <ul>
            <li><p>分享至消息</p></li>
            <li><p @click="gz">关注</p></li>
            <li><p @click="jb">举报</p></li>
          </ul>
          </van-popup>
        </div>
        <iframe height='30%' width=100% src='http://player.youku.com/embed/XNDA5NzE1MTgwOA==' frameborder=0cd
        style='border-radius:5px'></iframe>
        <b>我是有底线的</b>
      </div>

    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Popup, Toast } from 'vant'
Vue.use(NavBar)
Vue.use(Popup)
Vue.use(Toast)
export default {
  data () {
    return {
      show: false,
      xy: false,
      qq: false,
      xm: false,
      bs: false,
      sy: false,
      zy: false,
      mx: false,
      gl: false,
      ml: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    xyPopup () {
      this.xy = true
    },
    qqPopup () {
      this.qq = true
    },
    xmPopup () {
      this.xm = true
    },
    bsPopup () {
      this.bs = true
    },
    syPopup () {
      this.sy = true
    },
    zyPopup () {
      this.zy = true
    },
    msPopup () {
      this.mx = true
    },
    glPopup () {
      this.gl = true
    },
    mlPopup () {
      this.ml = true
    },
    jb () {
      Toast({
        message: '感谢提醒哦！',
        icon: 'like-o'
      })
    },
    gz () {
      Toast.success('关注成功')
    }
  },
  mounted () {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = '//at.alicdn.com/t/font_1295604_8bga1rxidcy.js'
    document.body.appendChild(s)
  }
}
</script>

<style scoped>
  .contain {
    display: flex;
    flex-direction: column;

  }
  .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
  .icon[data-v-115de5b5] {
  width: 2em;
  height: 2em;
  }
    .van-nav-bar .van-icon {color:#E0E0E0;}
  .conten{width:100%;flex: 1;overflow: auto;}
  .conten b{display:block;text-align:center;height:.2rem;}
  .a{display:flex;width:96%;justify-content: space-between;height: 0.3rem;line-height: .3rem;margin-bottom:.1rem;}
  .a p img{width:.25rem;height:.25rem; margin-left:.12rem; margin-top: .02rem;border-radius:50%;display:block;}
  .a p{width:40%;line-height: .3rem;display:flex;}
  .a p i {display:block;font:.14rem/.3rem "";color:tomato;margin-left:.1rem}
  .a span{display:block;width:.3rem;height:.3rem;font:.14rem/.3rem "";}
  ul{width:100%;}
  ul li p{font:.13rem/.3rem "";margin-bottom: .01rem;}
  ul li:nth-child(1){width:100%;height:.3rem;background:url(../../assets/img/fx1.png) no-repeat left;background-size:.25rem .25rem;}
  ul li p:nth-child(1){text-indent: .3rem;width:100%;}
  ul li:nth-child(2){width:100%;height:.3rem;background:url(../../assets/img/gz.png) no-repeat left;background-size:.3rem .3rem;}
  ul li p:nth-child(2){text-indent: .3rem;width:100%;}
  ul li:nth-child(3){width:100%;height:.3rem;background:url(../../assets/img/ts.png) no-repeat left;background-size:.25rem .25rem;}
  ul li p:nth-child(3){text-indent: .3rem;width:100%;}
  .tit{height:.42rem;line-height: .42rem;text-align: center;
    font-size: .16rem;
    font-weight: 800;
    color:#000;
}
</style>
