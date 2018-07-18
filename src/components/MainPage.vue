<template lang="pug">
#main-page
  .main-section
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
  .effectiveness-section
    .wrap
      .title-prim ПОВЫШЕНИЕ ЭФФЕКТИВНОСТИ
      .title-sec СЕЛЬХОЗПРЕДПРИЯТИЯ
      .effectiveness-section-image
        img(src="@/assets/program.png")
      .effectiveness-section-text
        p Программное решение, которое сфокусировано на повышении эффективности управления процессами агропредприятия.
        p Со всей информацией одновременно могут работать несколько специалистов - вводить данные, анализировать, корректировать. Информацию можно получать как в режиме реального времени, также можно видеть отчеты о ранее выполненных работах.
        p Все данные детализированы и точны, весь учет и статистика - доступны крулосуточно. Эффективные отчеты по работе легко сформировать, распечатать на принтере или сохрнаить в памяти компьютера.

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
