<template lang="pug">
#main-page
  .main-block
    .shadow
      .wrap
        .navigation
          .nav-logo
            img(src="@/assets/logo-head.png")
          .navs
            .nav(v-for="nav in navs") {{nav.text}}
        h1.main-title AGROSTREAM
        p.main-text Система управления </br>сельскохозяйственным производством
        .main-btn
          button.btn ЗАКАЗАТЬ

</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      navs: [
        {
          id: 0,
          text: 'ГЛАВНАЯ',
          url: ''
        },
        {
          id: 1,
          text: 'ФУНКЦИОНАЛ',
          url: ''
        },
        {
          id: 2,
          text: 'ОТЗЫВЫ',
          url: ''
        },
        {
          id: 3,
          text: 'МОДУЛИ',
          url: ''
        },
        {
          id: 4,
          text: 'КОНТАКТЫ',
          url: ''
        },
      ]
    }
  }
}
</script>
