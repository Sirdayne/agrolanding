<template lang="pug">
  #main-page
    .first-block
      .navigation
        .nav-logo
          img(src="@/assets/logo-header.png")
        .navs
          .nav(v-for="nav in navs") {{nav.text}}


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
          text: 'AGROSTREAM',
          url: ''
        },
        {
          id: 2,
          text: 'ФУНКЦИОНАЛ',
          url: ''
        },
        {
          id: 3,
          text: 'ОТЗЫВЫ',
          url: ''
        },
        {
          id: 4,
          text: 'МОДУЛИ',
          url: ''
        },
        {
          id: 5,
          text: 'КОНТАКТЫ',
          url: ''
        },
        {
          id: 6,
          text: 'О КОМПАНИИ',
          url: ''
        },
      ]
    }
  }
}
</script>
