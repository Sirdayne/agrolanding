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
  .section.effectiveness
    .wrap
      .title-prim ПОВЫШЕНИЕ ЭФФЕКТИВНОСТИ
      .title-sec СЕЛЬХОЗПРЕДПРИЯТИЯ
      .effectiveness-image
        img(src="@/assets/program.png")
      .effectiveness-text
        p Программное решение, которое сфокусировано на повышении эффективности управления процессами агропредприятия.
        p Со всей информацией одновременно могут работать несколько специалистов - вводить данные, анализировать, корректировать. Информацию можно получать как в режиме реального времени, также можно видеть отчеты о ранее выполненных работах.
        p Все данные детализированы и точны, весь учет и статистика - доступны крулосуточно. Эффективные отчеты по работе легко сформировать, распечатать на принтере или сохрнаить в памяти компьютера.
  .section.functional
    .wrap
      .title-prim ФУНКЦИОНАЛ
      .title-sec УПРАВЛЯЙ БИЗНЕСОМ ЛЕГКО
      .functional-blocks
        .functional-block
          .wrap-img
            img(src="@/assets/icon-head.png")
          h4 Планирование
          p План проведения СЗР и внесения удобрений, план агротехнологических работ. План себестоимости работ, план работы сельхозтехники. Технологические карты на каждое поле и культуру.
        .functional-block
          .wrap-img
            img(src="@/assets/icon-graph.png")
          h4 Анализ
          p Автоматический расчет выработки, расчет норм высева семян, внесения СЗР и удобрений, документооборот по учету фактических расходов. План-фактный анализ. Исторический анализ продуктивности полей, количественный и качественный учет зерна.
        .functional-block
          .wrap-img
            img(src="@/assets/icon-loup.png")
          h4 Контроль
          p Прием зерна с поля,  контроль процесса уборки зерна. Контроль скоростных режимов, простоев и перегонов техники, контроль просевов. Блокнот агронома, история поля, химкарты и метеокарты.
  .section.usability
    .wrap
      .usability-texts
        .title-prim ЮЗАБИЛИТИ
        .title-sec  УДОБНЫЙ ДИЗАЙН,
        .title-sec ИНТУИТИВНОСТЬ ИНТЕРФЕЙСА
        p Эффективные отчеты по работе легко сформировать, распечатать на принтере или сохранить в памяти компьютера. Наглядное отображение нарушений, внештатных ситуаций.
      .usability-img
        img(src="@/assets/macbook.png")
  .section.review
    .wrap
      .title-prim ОТЗЫВЫ
      .title-sec КЛИЕНТОВ
      .review-blocks
        .review-block
          .wrap-img
            img(src="@/assets/client-vas.png")
          h4 Василий Тарасенко
          h5 ТОО “АРША-2”
          p “Ребята «держат марку во всем» - от качества работ, до профессиональных консультаций и коротких сроков монтажа.”
        .review-block
          .wrap-img
            img(src="@/assets/client-vic.png")
          h4 Виктор Жумагулов
          h5 ТОО «Атамекен-Агро-Есиль»
          p “Такие программные продукты помогают компьютеризировать управленческие процессы, рассчитать заранее предстоящие затраты на посевы и обработку, а также ожидаемую прибыль.”
        .review-block
          .wrap-img
            img(src="@/assets/client-aid.png")
          h4 Айдарбек Ходжаназаров
          h5 ТОО «Иволга-Холдинг»
          p “Мы только начинаем сотрудничество, но уже специалисты AgroStream зарекомендовали себя как надежные партнеры”
  .section.partner
    .wrap
      .title-prim НАШИ
      .title-sec ПАРТНЕРЫ
      .partner-blocks
        .partner-block
          img(src="@/assets/logo-terra.png")
        .partner-block
          img(src="@/assets/logo-silos.png")
        .partner-block
          img(src="@/assets/logo-schneider.png")
        .partner-block
          img(src="@/assets/logo-atameken.png")
  .section.module
    .wrap
      .title-prim ОСНОВНЫЕ МОДУЛИ
      .title-sec ПО “AGROSTREAM”
      .module-graph
        .pie.pie-agroplan(@click="changeModuleText(moduleTexts.agroplan)")
          p AGROPLAN
        .pie.pie-agrofact(@click="changeModuleText(moduleTexts.agrofact)")
          p AGROFACT
        .pie.pie-bz(@click="changeModuleText(moduleTexts.bz)")
          p БАЛАНС ЗЕРНА
        .pie.pie-agromap(@click="changeModuleText(moduleTexts.agromap)")
          p AGROMAP
      .module-text(v-html="moduleText")
  .section.form
    .wrap
      .title-prim ПРИСОЕДИНЯЙТЕСЬ! 
      .title-sec УЖЕ БОЛЕЕ 1000 ПОЛЬЗОВАТЕЛЕЙ AGROSTREAM
      .form-block
        .form-inputs
          .row
            input.input(placeholder='ВАШЕ ИМЯ')
          .row
            input.input(placeholder='ВАШ E-MAIL')
          .row
            input.input(placeholder='ТЕЛЕФОН')
          .row-btn
            button.btn ЗАКАЗАТЬ
        .form-text Бонус : 60 дней без абонентской платы при заказе </br>полного комплекта оборудования TerrraPoint </br></br>Ваши данные не передаются третим лицам

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
      ],
      moduleTexts: {
        agroplan: `Технологические карты на каждое поле и культуру
                  </br>План проведения СЗР и внесения удобрений
                  </br>План себестоимости работ
                  </br>План работы сельхозтехники
                  </br>Календарный график проведения агротехнологических работ
                  </br>Сравнительный анализ плановой себестоимости продукции компаний покомпонентно  и производственный бюджет`,
        agrofact: `AGROFACT`,
        agromap: `AGROMAP`,
        bz: `BZ`,
      },
      moduleText: ''
    }
  },
  created() {
    this.moduleText = this.moduleTexts.agroplan
  },
  methods: {
    changeModuleText(str) {
      this.moduleText = str
    }
  }
}
</script>
