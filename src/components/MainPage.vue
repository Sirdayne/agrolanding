<template lang="pug">
#main-page
  .wrap-modal(v-if="modalShow")
    .modal-back(@click="closeModal()")
    .modal
      .title-prim ПРИСОЕДИНЯЙТЕСЬ!
      .title-sec УЖЕ БОЛЕЕ 1000 ПОЛЬЗОВАТЕЛЕЙ AGROSTREAM
      .form-inputs(style="margin-top: 20px;")
        .row
          input.input(placeholder='ВАШЕ ИМЯ', v-model="form.name")
        .row
          input.input(placeholder='ВАШ E-MAIL', v-model="form.email")
        .row
          input.input(placeholder='ТЕЛЕФОН', v-model="form.phone")
        .row-btn
          button.btn(@click="postData()") ОТПРАВИТЬ

  .navigation#js-navigation
    .wrap
      .nav-burger(@click="toggleBurger()", :class="{'vue-active': burgerActive}")
        .nav-line.nav-line-1
        .nav-line.nav-line-2
        .nav-line.nav-line-3
      .nav-logo
        img(src="@/assets/logo-head.png")
      .navs(:class="{'vue-active': burgerActive}")
        .nav(v-for="nav in navs", @click="scrollTo(nav.url)") {{nav.text}}
        .nav(@click="toNews()") НОВОСТИ

  .main-section#first
    .shadow
      .wrap
        h1.main-title AGROSTREAM
        p.main-text Система управления </br>сельскохозяйственным производством
        .main-btn
          button.btn(@click="openModal") ЗАКАЗАТЬ
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
  .section.functional#functional
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
  .section.review#review
    .wrap
      .title-prim ОТЗЫВЫ
      .title-sec КЛИЕНТОВ
      .review-blocks
        .review-block
          .wrap-img
            img(src="@/assets/client-vas.jpg")
          h4 Василий Тарасенко
          h5 ТОО “АРША-2”
          p “Ребята «держат марку во всем» - от качества работ, до профессиональных консультаций и коротких сроков монтажа.”
        .review-block
          .wrap-img
            img(src="@/assets/client-vic.jpg")
          h4 Виктор Жумагулов
          h5 ТОО «Атамекен-Агро-Есиль»
          p “Такие программные продукты помогают компьютеризировать управленческие процессы, рассчитать заранее предстоящие затраты на посевы и обработку, а также ожидаемую прибыль.”
        .review-block
          .wrap-img
            img(src="@/assets/client-aid.jpg")
          h4 Рафит Амирдинов
          h5 ТОО "Дихан Плюс"
          p “Система AgroStream позволяет  планировать и контролировать  рабочий процесс в режиме реального времени. Специалисты технической поддержки оперативно решают любые вопросы и обучают пользователей ПО.”
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
        .partner-block#partner-block-atameken
          img(src="@/assets/logo-atameken.png")
  .section.module#module
    .wrap
      .title-prim ОСНОВНЫЕ МОДУЛИ
      .title-sec ПО “AGROSTREAM”
      .module-graph-container
        .module-graph
          .pie.pie-agroplan(@click="changeModuleText(moduleTexts.agroplan)")
            p AGROPLAN
          .pie.pie-agrofact(@click="changeModuleText(moduleTexts.agrofact)")
            p AGROFACT
          .pie.pie-bz(@click="changeModuleText(moduleTexts.bz)")
            p БАЛАНС ЗЕРНА
          .pie.pie-agromap(@click="changeModuleText(moduleTexts.agromap)")
            p AGROMAP
      .module-text
        h5(v-html="moduleTitle")
        p(v-html="moduleText")
  calculator
  .section.footer
    .wrap
      .footer-navigation
        .footer-nav
          img(src="@/assets/logo-head.png")
          span AGROSTREAM
        .footer-nav(v-for="nav in navs")
          p(@click="scrollTo(nav.url)") {{nav.text}}
        .footer-nav
          p(@click="toNews()") НОВОСТИ
      .footer-contacts
        .footer-contacts-left Республика Казахстан </br>г. Астана ул.Иманова 13, офис 309
        .footer-contacts-right Телефон: 8 7172 73 11 53</br>Email: info@agrostream.kz
</template>

<script>
import http from '@/services/httpQuery'
import { Message } from 'element-ui'
import calculator from '@/components/calculator'

export default {
  name: 'MainPage',
  components: {
    calculator
  },
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
      moduleTexts: {
        agroplan: {
          title: 'AGROPLAN',
          text: `Технологические карты на каждое поле и культуру
                  </br>План проведения СЗР и внесения удобрений
                  </br>План себестоимости работ
                  </br>План работы сельхозтехники
                  </br>Календарный график проведения агротехнологических работ
                  </br>Сравнительный анализ плановой себестоимости продукции`,
        },
        agrofact: {
          title: 'AGROFACT',
          text: `Спутниковый мониторинг техники
                  </br>Контроль за выполнением технологических процессов
                  </br>Учет расхода семян, химии, контроль за нормами их внесения
                  </br>Учет выполнения работ`,
        },
        agromap: {
          title: 'AGROMAP',
          text: `Блокнот агронома
                  </br>История поля
                  </br>Химкарта
                  </br>Метеокарта
                  </br>Карта засоренности поля`,
        },
        bz: {
          title: 'БАЛАНС ЗЕРНА',
          text: `Контроль учета движения зерна от поля до элеватора
             </br>Контроль качества зерна
             </br>Контроль  подработки и хранения зерна
             </br>Формирование ежедневного баланса зерна`,
        },
      },
      moduleTitle: '',
      moduleText: '',
      modalShow: false,
      burgerActive: false,
      form: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  created() {
    this.moduleTitle = this.moduleTexts.agroplan.title
    this.moduleText = this.moduleTexts.agroplan.text

    window.onscroll = () => {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop
      let navigation = document.getElementById('js-navigation')
      navigation.classList = scrolled > 50 ? 'navigation js-active' : 'navigation'
    }
  },
  methods: {
    toNews() {
      this.$router.push('/news')
    },
    changeModuleText(obj) {
      this.moduleTitle = obj.title
      this.moduleText = obj.text
    },
    scrollTo(id) {
      let elem = document.getElementById(id)
      window.scrollTo(0, elem.offsetTop)
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
