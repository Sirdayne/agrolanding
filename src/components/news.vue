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

  .main-section.main-section-news#first
    .shadow
      .wrap
        h1.main-title НОВОСТИ

  .section.news(v-loading="loading")
    .wrap(v-if="news.length > 0")
      .new(v-for="item in news", @click="toNew(item.id)")
        .img-container
          img(:src="item.introImage")
        h4 {{ item.name }}
        p {{ item.intro }}
    .wrap(v-else)
      p Нет новостей

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
  name: 'news',
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
      news: [],
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
    toNew(id) {
      this.$router.push(`/news/${id}`)
    },
    toggleBurger() {
      this.burgerActive = !this.burgerActive
    },
    getData() {
      this.loading = true
      let endpoint = `http://agroplanapi.azurewebsites.net/api/news/`
      http.get(endpoint).then((data) => {
        this.news = data
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
  }
}
</script>
