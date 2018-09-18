<template lang="pug">
#main-page
  .navigation#js-navigation
    .wrap
      .nav-burger(@click="toggleBurger()", :class="{'vue-active': burgerActive}")
        .nav-line.nav-line-1
        .nav-line.nav-line-2
        .nav-line.nav-line-3
      .nav-logo
        img(src="@/assets/logo-head.png")
      .navs(:class="{'vue-active': burgerActive}")
        .nav(v-for="nav in navs", @click="toMainPage()") {{nav.text}}
        .nav(@click="toNews()") НОВОСТИ

  .main-new(v-loading="loading")
    img(:src="article.introImage")
    h1.main-new-title {{article.name}}

  .section(v-loading="loading")
    .wrap
      p {{ article.content }}
      p(@click="toNews()", style="margin-top: 30px; text-decoration: underline; cursor: pointer;") назад в новости

  .section.footer
    .wrap
      .footer-navigation
        .footer-nav
          img(src="@/assets/logo-head.png")
          span AGROSTREAM
        .footer-nav(v-for="nav in navs")
          p(@click="toMainPage()") {{nav.text}}
        .footer-nav
          p(@click="toNews()") НОВОСТИ
      .footer-contacts
        .footer-contacts-left Республика Казахстан </br>г. Астана ул.Иманова 13, офис 309
        .footer-contacts-right Телефон: 8 7172 73 11 53</br>Email: info@agrostream.kz
</template>

<script>
import http from '@/services/httpQuery'

export default {
  data () {
    return {
      navs: [
        {
          id: 0,
          text: 'ГЛАВНАЯ',
          url: 'first'
        },
        {
          id: 1,
          text: 'ФУНКЦИОНАЛ',
          url: 'functional'
        },
        {
          id: 2,
          text: 'ОТЗЫВЫ',
          url: 'review'
        },
        {
          id: 3,
          text: 'МОДУЛИ',
          url: 'module'
        },
        {
          id: 4,
          text: 'КОНТАКТЫ',
          url: 'contact'
        },
      ],
      burgerActive: false,
      article: {},
      loading: true
    }
  },
  created() {
    this.getData()
  },
  methods: {
    toMainPage() {
      this.$router.push('/')
    },
    toNews() {
      this.$router.push('/news')
    },
    getData() {
      this.loading = true
      let endpoint = `http://agroplanapi-test.azurewebsites.net/api/news/` + this.$route.params.id
      http.get(endpoint).then((data) => {
        this.article = data
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
  }
}
</script>
