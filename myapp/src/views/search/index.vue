<template>
    <div class="contain" style="display: flex;flex-direction: column">
      <div class="Stop">搜索</div>
      <div class="fakeContent" v-if="searchFake" style="display: flex;flex-direction: column;justify-content: center;align-items: center;flex: 1;height: 100%;">
        <div style="font-size: 0.4rem;text-align: center;font-family: cfont;margin-bottom: 0.15rem;color: #00a8ff">
          影视搜索
        </div>
        <div style="display: flex;justify-content: center">
          <div @click="getSearch" style="display: inline-block;width: 2rem;height: 0.4rem;line-height: .4rem;border: 1px solid #00a8ff;vertical-align: center;box-sizing: border-box;color: #ccc">
            &ensp;
            <i class="iconfont icon-search"></i>
             搜索影视名称
          </div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563769767006&di=1bb41c8a77fc5b6e4674af8c7c8411c3&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170803%2Fbf20192543cc4c4d894e87806afdacba.png" alt="" style="width: 0.8rem;height: 0.4rem;border-radius: 0 0.05rem 0.05rem  0;vertical-align: top">
        </div>
      </div>
      <div class="trueContent" v-if="!searchFake" style="flex:1;display: flex;flex-direction: column">
        <div style="display: flex;justify-content: center;height: 0.7rem;align-items: center">
          <div @click="getSearch" style="display: inline-block;width: 2.24rem;height: 0.4rem;line-height: .4rem;border: 0;vertical-align: center;box-sizing: border-box;color: #ccc">
            <input type="text" id='movieVal' style="border: 1px solid #00a8ff;;height: 0.4rem;text-indent: 0.1rem;color: #222;width: 100%;" placeholder="请输入影视名称" autofocus="autofocus">
<!--            <i class="iconfont icon-search"></i>-->
<!--            搜索影视名称-->
          </div>
          <img @click="getMovieInfo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563769767006&di=1bb41c8a77fc5b6e4674af8c7c8411c3&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170803%2Fbf20192543cc4c4d894e87806afdacba.png" alt="" style="width: 0.8rem;height: 0.4rem;border-radius: 0 0.05rem 0.05rem  0;vertical-align: top">
        </div>
        <div v-if='searchFour' style="width: 94%;margin: 0 auto;font-weight: bold;font-family: myfont;color: #f44336;height: 0.3rem;">搜索结果</div>
        <div class="movieList" style="flex: 1;overflow: auto;">
            <ul class="movie-list" id="movie-list">
              <li class="movie-li" v-for="(item, index) in movieInfo" :key="index" style="position: relative" @click="getDate(item.id)">
                <img :src="item.img" alt="网络故障">
                <span class="movie-t">{{ item.title }}</span>
              </li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { List, Dialog } from 'vant'
Vue.use(List)
export default {
  mounted () {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = '//at.alicdn.com/t/font_1297396_t1lgsn8qxne.js'
    document.body.appendChild(s)
    // const contents = document.querySelector('.content')
    // contents.addEventListener('scroll', this.scrollFn)
  },
  data () {
    return {
      searchFake: true,
      listLoading: false,
      listFinished: false,
      movieInfo: '',
      searchFour: false
    }
  },
  methods: {
    getSearch () {
      this.searchFake = false
    },
    getMovieInfo () {
      var movieVal = document.getElementById('movieVal').value
      if (movieVal) {
        fetch('/api/j/subject_suggest?q=' + movieVal, {
          method: 'GET'
        })
          .then(res => res.json()).then(data => {
            if (data.length > 1) {
              if (data.length % 2 === 0) {
                console.log('两端对齐都被你发现了，这是个彩蛋')
              }
              this.movieInfo = data
              this.searchFour = true
            } else {
              Dialog({ message: '没有找到您输入的影视资源，换个电影看看吧' })
            }
          })
      } else {
        Dialog({ message: '您的输入有误，请检查后再试' })
      }
    },
    getDate (id) {
      this.$router.push({ path: '/detail/' + id })
    }
  }
}
</script>

<style lang="scss">
  @import "@/lib/reset.scss";
  @font-face {
    font-family: cfont; /*这里是说明调用来的字体名字*/
    src: url('../../lib/font.otf'); /*这里是字体文件路径*/
  }
  .Stop {
    @include rect(100%, 0.42rem);
    line-height: 0.42rem;
    font-size: 0.16rem;
    text-align: center;
    font-weight: 800;
    border-bottom: 1px solid #cccccc73;
  }
  .movie-list {
    height: 100%;
    @include flexbox();
    @include rect(94%, auto);
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    li {
      @include rect(32%,auto  );
      margin-top: 0.1rem;
      .vipMovie {
        width: 0.3rem;
        height: 0.15rem;
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
    }
  }

</style>
