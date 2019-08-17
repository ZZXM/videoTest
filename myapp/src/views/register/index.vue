<template>
  <div class="container">
    <van-nav-bar
      title="注册"
      left-text="返回"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="手机号"
          :right-icon="usernameIcon"
          placeholder="请输入手机号"
          :error-message="usernameState"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          clearable
          placeholder="请输入密码"
          :right-icon="passwordIcon"
          :error-message="passwordState"
          required
        />
         <van-field
          center
          clearable
          required
          label="短信验证码"
          placeholder="请输入短信验证码"
          readonly
          clickable
          :value="sms"
          @touchstart.native.stop="show = true"
        >
          <van-button slot="button" @click="sendcode" size="small">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-button @click="register" size="normal" :block="true">注册</van-button>
    </div>
    <van-number-keyboard
      v-model="sms"
      :show="show"
      :maxlength="11"
      @blur="show = false"
    />
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
      sms: '',
      show: false,
      code: '123'
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
      this.$router.replace('/login')
    },
    sendcode () {
      fetch('https://www.daxunxun.com/users/sendCode?tel=' + this.username)
        .then(res => res.json())
        .then(data => {
          if (data === 1) {
            Toast('哎呀，已经注册了')
          } else if (data === 0) {
            Toast('获取验证码失败了')
          } else {
            this.code = data.code
          }
        })
    },
    register () {
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
      fetch('https://www.daxunxun.com/users/register', {
        method: 'post',
        headers: { // 看后端的接口
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        if (data === 1) {
          Toast('注册成功啦')
          this.$router.push('/login')
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '该用户已经注册，是否直接登录'
          }).then(() => {
            // on confirm
            this.$router.push('/login')
          }).catch(() => {
            // on cancel
          })
        } else {
          Toast('注册失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #fff;
  color: #000;;
}
.van-nav-bar__text{font-size:.14rem;color: #000;}
.van-nav-bar__title {
  color: #000;
  font-weight:800;
  font-size:.16rem;
}
.van-nav-bar .van-icon {
    color: #000;
}
.van-button--default {
  color:#fff;
  background-color: #6FAAFC;
  border-radius: .05rem;
}
</style>
