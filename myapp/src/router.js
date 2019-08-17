import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/home/index.vue'),
        footer: () => import('./components/footer.vue')
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('./views/detail/index.vue')
      }
    },
    {
      path: '/playVideo/:url',
      name: 'playVideo',
      components: {
        default: () => import('./views/playVideo/index.vue')
      }
    },
    {
      path: '/urlVideo/:url/:name',
      name: 'urlVideo',
      components: {
        default: () => import('./views/urlVideo/index.vue')
      }
    },
    {
      path: '/tool',
      name: 'tool',
      components: {
        default: () => import('./views/tool/index.vue'),
        footer: () => import('./components/footer.vue')
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: () => import('./views/search/index.vue'),
        footer: () => import('./components/footer.vue')
      }
    },
    {
      path: '/user',
      redirect: '/user/nologin'
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/register/index.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/login/index.vue')
      }
    },
    {
      path: '/sc',
      name: 'sc',
      components: {
        default: () => import('./components/user/sc.vue')
      }
    },
    {
      path: '/zs',
      name: 'zs',
      components: {
        default: () => import('./components/user/zs.vue')
      }
    },
    {
      path: '/ls',
      name: 'ls',
      components: {
        default: () => import('./components/user/ls.vue')
      }
    },
    {
      path: '/yb',
      name: 'yb',
      components: {
        default: () => import('./components/user/yb.vue')
      }
    },
    {
      path: '/gy',
      name: 'gy',
      components: {
        default: () => import('./components/user/gy.vue')
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./views/user/index.vue'),
        footer: () => import('./components/footer.vue')
      },
      children: [
        {
          path: 'nologin', // /user/nologin
          component: () => import('@/components/user/NoLogin.vue')
        },
        {
          path: 'login', // /user/login
          component: () => import('@/components/user/Login.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/components/error.vue')
    }
  ]
})
