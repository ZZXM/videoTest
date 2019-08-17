<template>
  <div class="container">
    <van-nav-bar
      title="登录"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <img src="../../assets/img/wm.jpg" alt=""/>
       <van-cell-group>
        <li>
        <van-field
          clearable
          placeholder="你的手机号"
          :right-icon="passwordIcon"
          :error-message="usernameState"
          readonly
          clickable
          :value="username"
          @touchstart.native.stop="show = true"
        />
        </li>
        <li>
        <van-field
          v-model="password"
          type="password"
          clearable
          placeholder="请输入密码"
          :right-icon="passwordIcon"
          :error-message="passwordState"
        />
        </li>
      </van-cell-group>
      <van-button @click="login" :disabled = 'flag' :loading = 'flag' loading-text="登录中..." size="normal" :block="true">登录</van-button>
    <van-number-keyboard
      v-model="username"
      :show="show"
      :maxlength="11"
      @blur="show = false"
    />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Field, Button, Toast, Dialog, NumberKeyboard, Cell, CellGroup } from 'vant'
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Button)
Vue.use(Cell).use(CellGroup)
Vue.use(Toast)
Vue.use(NumberKeyboard)
Vue.use(Dialog)
export default {
  data () {
    return {
      username: '18717771641',
      password: '123456',
      show: false,
      flag: false
    }
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    usernameIcon () {
      if (this.username === '') {
        return ''
      } else if ((/^1[3456789]\d{9}$/.test(this.username))) {
        return 'checked'
      } else {
        return ''
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 5) {
        return '密码格式错误'
      } else {
        return ''
      }
    },
    passwordIcon () {
      if (this.password === '') {
        return ''
      } else if (this.password.length >= 5) {
        return 'checked'
      } else {
        return ''
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.replace('/register')
    },
    login () {
      if (this.sms !== this.code) {
        console.log('验证码错误了')
        return null
      }
      if (this.usernameIcon !== 'checked') {
        console.log('手机号格式错误')
        return null
      }
      if (this.passwordIcon !== 'checked') {
        console.log('密码格式错误了')
        return null
      }
      this.flag = true
      fetch('https://www.daxunxun.com/users/login', {
        method: 'post',
        headers: { // 看后端的接口
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        this.flag = false
        if (data === 1) {
          Toast('登录成功')
          localStorage.setItem('isLogin', 'ok')
          this.$router.push('user/login') // 返回上一页
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '还未注册，是否注册'
          }).then(() => {
            // on confirm
            this.$router.push('/register')
          }).catch(() => {
            // on cancel
          })
        } else if (data === -1) {
          Toast('密码错误')
        } else {
          Toast('登录失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
body{background:#fff;}
.van-nav-bar {
  background-color: #fff;
  color: #000;
}
.van-nav-bar__text{color: #000;font-size:.14rem;}
.van-nav-bar__title  {
  color: #000;
  font-weight:900;
  font-size:.16rem;
}
.van-nav-bar .van-icon {
    color: #000;
}
img {
  width:100%;height:.8rem;
}
li{list-style:none;margin:.02rem 0;}
.van-button{
  margin-top:.2rem;
  color:#fff;
  background-color: #6FAAFC;
  border-radius: .05rem;
}
.van-nav-bar__arrow {
    min-width: 1em;
    font-size: 20px;
    font-weight: 900;
}
</style>
