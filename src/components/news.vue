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

  .main-section.main-section-news#first
    .shadow
      .wrap
        h1.main-title НОВОСТИ

  .section.news(v-loading="loading")
    .wrap
      .new(v-for="item in news")
        img(:src="item.introImage")
        h4 {{ item.name }}
        p {{ item.intro }}

  .section.footer
    .wrap
      .footer-navigation
        .footer-nav
          img(src="@/assets/logo-head.png")
          span AGROSTREAM
        .footer-nav(v-for="nav in navs")
          p(@click="toMainPage()") {{nav.text}}
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
      moduleTitle: '',
      moduleText: '',
      modalShow: false,
      burgerActive: false,
      news: [],
      form: {
        name: '',
        email: '',
        phone: ''
      },
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
    openModal() {
      this.modalShow = true
    },
    closeModal() {
      this.modalShow = false
    },
    toggleBurger() {
      this.burgerActive = !this.burgerActive
    },
    getData() {
      this.loading = true
      http.get('http://agroplanapi-test.azurewebsites.net/api/news/').then((data) => {
        this.news = data
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    postData() {
      let body = ''
      if (this.form.name.length > 0 && this.form.email.length > 0 && this.form.phone.length > 0) {
        body=`Имя=${this.form.name}&Почта=${this.form.email}&Телефон=${this.form.phone}`
        http.postMail('mail.php', body).then(() => {
          this.form.name = ''
          this.form.email = ''
          this.form.phone = ''
        })
      } else {
        Message({
          message: 'Заполните данные',
          duration: 2000,
          showClose: true,
        });
      }
    }
  }
}
</script>
