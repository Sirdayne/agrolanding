<template lang="pug">
.section
  .form#contact
    .wrap
      .title-prim ПРИСОЕДИНЯЙТЕСЬ! 
      .title-sec УЖЕ БОЛЕЕ 1000 ПОЛЬЗОВАТЕЛЕЙ AGROSTREAM
      p(style="margin-top: 50px") Экономический эффект от внедрения средств автоматизации может быть лишь косвенным, так как внедренные средства автоматизации не являются прямым источником дохода, а являются либо вспомогательным средством организации получения прибыли, либо помогают минимизировать затраты. Оценить экономический эффект внедрения технологий TerraPoint поможет наш онлайн калькулятор окупаемости технологий. Калькулятор позволяет высчитать среднюю стоимость внедрения новых технологий для Вашего предприятий, рассчитать положительный эффект благодаря сокращению издержек, контролю технологий, исключению краж и минимизации влияния человеческого фактора. Средний срок окупаемости полного комплекса технологий автоматизации TerraPoint составляет всего 1 сезон!
      p Эффективность — прежде всего!
      .form-block
        .form-inputs
          .row
            input.input(placeholder='ВАШЕ ИМЯ', v-model="form.name", @change="openSpoilers()")
          .row
            input.input(placeholder='ВАШ E-MAIL', v-model="form.email", @change="openSpoilers()")
          .row
            input.input(placeholder='ТЕЛЕФОН', v-model="form.phone", @change="openSpoilers()")
        .form-text Бонус : 60 дней без абонентской платы при заказе </br>полного комплекта оборудования TerraPoint </br></br>Ваши данные не передаются третим лицам
  .wrap.calculator

    .title-prim(style="margin-top: 30px") Ответьте пожалуйста на следующие вопросы:
    .table
      .row
        .left
          p Какова у вас посевная площадь?
        .right
          input.input(v-model="valSowingArea", @change="openSpoilers()")
          p га
      .row
        .left
          p Какова у вас средняя реализация 1 тонны товарного зерна?
        .right
          input.input(v-model="valRealizationTonne", @change="openSpoilers()")
          p тг
      .row
        .left
          p Количество голов?
        .right
          input.input(v-model="valHeads", @change="openSpoilers()")
          p шт
      .row
        .left
          p Количество техники, которые необходимо контролировать?
        .right
          input.input(v-model="valVehicles", @change="openSpoilers()")
          p шт
      .row
        .left
          p Количество электронных весов
        .right
          input.input(v-model="valElectronic", @change="openSpoilers()")
          p шт
      .row
        .left
          p Объем хранения зерна на элеваторе
        .right
          input.input(v-model="valVolumeElevator", @change="openSpoilers()")
          p т
      .row
        .left
          p Какова средняя урожайность?
        .right
          input.input(v-model="valAverageYield", @change="openSpoilers()")
          p ц/га
      .row
        .left
          p Какова средняя рефакция?
        .right
          input.input(v-model="valAverageRefaction", @change="openSpoilers()")
          p %
      .row
        .left
          p Каков средний надой/привес 1 головы в год?
        .right
          input.input(v-model="valAverageNadoi", @change="openSpoilers()")
          p л
      .row
        .left
          p Какова средняя реализация 1 единицы мясо/молока?
        .right
          input.input(v-model="valAverageRealization", @change="openSpoilers()")
          p кг

    .title-prim(style="margin-top: 30px") Базовые допушения. Если вы с ними не согласны можете откорректировать:
    .table.spoiler
      .row
        .left
          p Сколько камер видеонаблюдения вы хотели бы установить
        .right
          input.input(v-model="valCameras")
          p шт
      .row
        .left
          p Средние расходы ТМЦ на 1 га (ГСМ, семена, химия)
        .right
          input.input(v-model="valAverageTMC")
          p тг
      .row
        .left
          p Количество краж зерна в машинах за 1 сезон
        .right
          input.input(v-model="valThiefSeason")
          p шт
      .row
        .left
          p Доля краж ТМЦ за 1 сезон
        .right
          input.input(v-model="valPercentTMCSeason")
          p %
      .row
        .left
          p Количество вакансий на более квалифицированный персонал
        .right
          input.input(v-model="valVacancies")
          p шт
      .row
        .left
          p Расходы на 1 вакансию в месяц (зарплата с налогами, проживание, питание)
        .right
          input.input(v-model="valVacanciesMonth")
          p тг
      .row
        .left
          p Доля неээфективных расходов ТМЦ на 1 га, из за "человеческого фактора"
        .right
          input.input(v-model="valPercentNotEffectiveTMC")
          p %
      .row
        .left
          p Сколько электронных весов вы бы хотели установить
        .right
          input.input(v-model="valDesireElectronic")
          p шт
      .row
        .left
          p Сколько влагомеров вы бы хотели установить на элеваторе
        .right
          input.input(v-model="valDesireWater")
          p шт
      .row
        .left
          p Сколько расходомеров вы бы хотели установить на элеваторе
        .right
          input.input(v-model="valDesireRashod")
          p шт
      .row
        .left
          p Контроль технологии позволит увеличить урожайность
        .right
          input.input(v-model="valPercentYield")
          p га
      .row
        .left
          p Контроль технологии позволит увеличить надой/привес
        .right
          input.input(v-model="valPercentNadoi")
          p %
      .row
        .left
          p Контроль технологии позволит сократить рефакцию
        .right
          input.input(v-model="valPercentRefaction")
          p %
      .row
        .left
          p Контроль технологии позволит сократить расходы на ТМЦ
        .right
          input.input(v-model="valPercentTMC")
          p %

    .title-prim(style="margin-top: 30px") Что из новых технологий вы бы хотели применить у себя, отметьте галочкой:
    .table.spoiler
      .row
        .left
          p GPS-мониторинг техники
        .right
          input(type="checkbox", v-model="boolGPS")
          .unit 60,000 тг/шт
          .overall {{this.setFixed(multiGPS)}}
      .row
        .left
          p Автопилоты и курсоуказатели для сельхозтехники
        .right
          input(type="checkbox", v-model="boolPilot")
          .unit 3,500,000 тг/шт
          .overall {{this.setFixed(multiPilot)}}
      .row
        .left
          p IP видеонаблюдение
        .right
          input(type="checkbox", v-model="boolVideo")
          .unit 10,0000 тг/шт
          .overall {{this.setFixed(multiVideo)}}
      .row
        .left
          p Контроль, учет движения зерна на току
        .right
          input(type="checkbox", v-model="boolControl")
          .unit 3,700,000 тг/шт
          .overall {{this.setFixed(multiControl)}}
      .row
        .left
          p Картирование полей на БПЛА
        .right
          input(type="checkbox", v-model="boolKart")
          .unit 112 тг/шт
          .overall {{this.setFixed(multiKart)}}
      .row
        .left
          p Контроль вегетации (NDVI) на БПЛА
        .right
          input(type="checkbox", v-model="boolNDVI")
          .unit 150 тг/шт
          .overall {{this.setFixed(multiNDVI)}}
      .row
        .left
          p Чипирование для идентификации КРС
        .right
          input(type="checkbox", v-model="boolChip")
          .unit 1,000 тг/шт
          .overall {{this.setFixed(multiChip)}}
      .row
        .left
          p Системы для внутреннего мониторинга здоровья, активности и питания КРС
        .right
          input(type="checkbox", v-model="boolMonitor")
          .unit 60,000 тг/шт
          .overall {{this.setFixed(multiMonitor)}}
      .row
        .left
          p Влагомеры
        .right
          input(type="checkbox", v-model="boolWater")
          .unit 3,000,000 тг/шт
          .overall {{this.setFixed(multiWater)}}
      .row
        .left
          p Расходомеры
        .right
          input(type="checkbox", v-model="boolRashod")
          .unit 4,500,000 тг/шт
          .overall {{this.setFixed(multiRashod)}}
      .row
        .left
          p Автоматизация элеваторов и сушилок
        .right
          input(type="checkbox", v-model="boolElevator")
          .unit 2,000 тг/шт
          .overall {{this.setFixed(multiElevator)}}
      .row
        .left
          p Автоматизация уведомления об отключении оборудования
        .right
          input(type="checkbox", v-model="boolNotification")
          .unit 60,000 тг/шт
          .overall {{this.setFixed(multiNotification)}}
      .row
        .left
          p Программное обеспечение по управлению производством
        .right
          input(type="checkbox", v-model="boolSoftware")
          .unit 300 тг/шт
          .overall {{this.setFixed(multiSoftware)}}
      .row
        .left
          p Внедрение программного обеспечения
        .right
          input(type="checkbox", v-model="boolProg")
          .unit 300 тг/шт
          .overall {{this.setFixed(multiProg)}}
      .row
        .left
          p Сервисное обслуживание
        .right
          .overall {{this.setFixed(multiService)}}

    .btn-container
      button.btn(@click="calculate()") РАССЧИТАТЬ

    .title-prim(style="margin-top: 30px") Итого расходов на новые технологии:
      .title-prim-right {{this.setFixed(totalCost)}} тг
    .table
      .row
        .left
          p Капитальные расходы
        .right
          p {{this.setFixed(capitalCost)}} тг
      .row
        .left
          p Накладные расходы
        .right
          p {{this.setFixed(constantCost)}} тг

    .title-prim(style="margin-top: 30px") Итого доходов на новые технологии за сезон:
      .title-prim-right {{this.setFixed(incomeTotal)}} тг
    .table
      .row
        .left
          p Животноводство
        .right
          p {{this.setFixed(incomeAnimal)}} тг
      .row
        .left
          p Растениеводство
        .right
          p {{this.setFixed(incomePlant)}} тг
      .row
        .left
          p Человеческий фактор
        .right
          p {{this.setFixed(incomeHuman)}} тг
      .row
        .left
          p Кражи
        .right
          p {{this.setFixed(incomeThief)}} тг

    .title-prim(style="margin-top: 30px") Окупаемость (количество сезонов):
      .title-prim-right {{recoupment.toFixed(2)}}
</template>

<script>
import http from '@/services/httpQuery'
import { Message } from 'element-ui'
import $ from 'jquery'

export default {
  name: 'calculator',
  data () {
    return {
      valSowingArea: 0,
      valRealizationTonne: 0,
      valHeads: 0,
      valVehicles: 0,
      valElectronic: 0,
      valVolumeElevator: 0,
      valAverageYield: 0,
      valAverageRefaction: 0,
      valAverageNadoi: 0,
      valAverageRealization: 0,

      valCameras: 10,
      valAverageTMC: 20000,
      valThiefSeason: 1,
      valPercentTMCSeason: 5,
      valVacancies: 3,
      valVacanciesMonth: 200000,
      valPercentNotEffectiveTMC: 30,
      valDesireElectronic: 0,
      valDesireWater: 1,
      valDesireRashod: 2,
      valPercentYield: 10,
      valPercentNadoi: 10,
      valPercentRefaction: 50,
      valPercentTMC: 10,

      boolGPS: true,
      multiGPS: 0,
      boolPilot: true,
      multiPilot: 0,
      boolVideo: true,
      multiVideo: 0,
      boolControl: true,
      multiControl: 0,
      boolKart: true,
      multiKart: 0,
      boolNDVI: true,
      multiNDVI: 0,
      boolChip: true,
      multiChip: 0,
      boolMonitor: true,
      multiMonitor: 0,
      boolWater: true,
      multiWater: 0,
      boolRashod: true,
      multiRashod: 0,
      boolElevator: true,
      multiElevator: 0,
      boolNotification: true,
      multiNotification: 0,
      boolSoftware: true,
      multiSoftware: 0,
      boolProg: true,
      multiProg: 0,
      multiService: 0,

      totalCost: 0,
      capitalCost: 0,
      constantCost: 0,
      incomeTotal: 0,
      incomeAnimal: 0,
      incomePlant: 0,
      incomeHuman: 0,
      incomeThief: 0,
      recoupment: 0,

      checkCounter: 0,
      form: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  created() {
  },
  methods: {
    calculate() {
      this.setDataInputs()
      this.calculateData()
      this.postData()
    },
    setDataInputs() {
      this.valSowingArea = 5000
      this.valRealizationTonne = 50000
      this.valHeads = 1000
      this.valVehicles = 30
      this.valElectronic = 1
      this.valVolumeElevator = 10000
      this.valAverageYield = 15
      this.valAverageRefaction = 4
      this.valAverageNadoi = 4500
      this.valAverageRealization = 120
    },
    calculateData() {
      //GPS-мониторинг техники
      this.multiGPS = this.boolGPS ? 60000 * this.valVehicles : 0

      //Автопилоты и курсоуказатели для сельхозтехники
      this.multiPilot = this.boolPilot ? 3500000 * this.valVehicles : 0

      //IP видеонаблюдение
      this.multiVideo = this.boolVideo ? 100000 * this.valCameras : 0

      //Контроль, учет движения зерна на току
      this.multiControl = this.boolControl ? 3700000 * (this.valElectronic + this.valDesireElectronic) : 0

      //Картирование полей на БПЛА
      this.multiKart = this.boolKart ? 112 * this.valSowingArea : 0

      //Контроль вегетации (NDVI) на БПЛА
      this.multiNDVI = this.boolNDVI ? 150 * this.valSowingArea * 3 : 0

      //Чипирование для идентификации КРС
      this.multiChip = this.boolChip ? 1000 * this.valHeads : 0

      //Системы для внутреннего мониторинга здоровья, активности и питания КРС
      this.multiMonitor = this.boolMonitor ? 60000 * this.valHeads : 0

      //Влагомеры
      this.multiWater = this.boolWater ? 3000000 * this.valDesireWater : 0

      //Расходомеры
      this.multiRashod = this.boolRashod ? 4500000 * this.valDesireRashod : 0

      //Автоматизация элеваторов и сушилок
      this.multiElevator = this.boolElevator ? 2000 * this.valVolumeElevator : 0

      //Автоматизация уведомления об отключении оборудования
      this.multiNotification = this.boolNotification ? 60000 : 0

      //Программное обеспечение по управлению производством
      this.multiSoftware = this.boolSoftware ? 300 * this.valSowingArea : 0

      //Внедрение программного обеспечения
      this.multiProg = this.boolProg ? 300 * this.valSowingArea : 0

      this.countCheckboxes()

      this.multiService = 600000

      if (this.checkCounter > 2) {
        this.multiService = this.multiService * this.checkCounter / 2
      }

      //Капитальные расходы
      this.capitalCost = this.multiGPS + this.multiPilot + this.multiVideo + this.multiControl + this.multiKart + this.multiChip + this.multiMonitor + this.multiWater + this.multiRashod + this.multiElevator + this.multiProg

      //Накладные расходы
      this.constantCost = this.multiNDVI + this.multiSoftware + this.multiNotification + this.multiService

      //Итого расходов на новые технологии
      this.totalCost = this.capitalCost + this.constantCost

      //Животноводство
      this.incomeAnimal = this.valHeads * this.valAverageNadoi * this.valAverageRealization * this.valPercentNadoi/100

      //Растениеводство
      this.incomePlant = this.valAverageYield * this.valPercentYield/100 * this.valSowingArea / 10 * this.valRealizationTonne + (this.valAverageYield + this.valAverageYield * this.valPercentYield/100 * this.valSowingArea / 10) * this.valAverageRefaction/100 * this.valPercentRefaction/100 * this.valRealizationTonne + this.valAverageTMC * this.valPercentTMC/100 * this.valSowingArea


      //Человеческий фактор
      this.incomeHuman = this.valVacanciesMonth * 12 * this.valVacancies + this.valAverageTMC * this.valPercentNotEffectiveTMC/100 * this.valSowingArea

      //Кражи
      this.incomeThief = this.valThiefSeason * 35 * this.valRealizationTonne + this.valAverageTMC * this.valPercentTMCSeason/100 * this.valSowingArea

      //Итого доходов на новые технологии за сезон
      this.incomeTotal = this.incomeAnimal + this.incomeHuman + this.incomePlant + this.incomeThief

      //Окупаемость (количество сезонов)
      this.recoupment = this.totalCost / this.incomeTotal

    },
    countCheckboxes() {
      this.checkCounter = 0
      if (this.boolGPS)
        this.checkCounter++
      if (this.boolPilot)
        this.checkCounter++
      if (this.boolVideo)
        this.checkCounter++
      if (this.boolControl)
        this.checkCounter++
      if (this.boolNDVI)
        this.checkCounter++
      if (this.boolChip)
        this.checkCounter++
      if (this.boolMonitor)
        this.checkCounter++
      if (this.boolWater)
        this.checkCounter++
      if (this.boolRashod)
        this.checkCounter++
      if (this.boolElevator)
        this.checkCounter++
      if (this.boolNotification)
        this.checkCounter++
      if (this.boolSoftware)
        this.checkCounter++
      if (this.boolProg)
        this.checkCounter++
    },
    setFixed(num) {
      return num.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')
    },
    postData() {
      let body = ''
      if (this.form.name.length > 0 && this.form.email.length > 0 && this.form.phone.length > 0) {
        body=`Имя=${this.form.name}&Почта=${this.form.email}&Телефон=${this.form.phone}`
        body = this.setBody(body)
        console.log(body)
        http.postMail('mail.php', body).then(() => {
          this.nullForm()
        })
      } else {
        Message({
          message: 'Заполните данные',
          duration: 2000,
          showClose: true,
        })
      }
    },
    setBody(body) {
      body += `&Какова у вас посевная площадь?=${this.valSowingArea}`
      body += `&Какова у вас средняя реализация 1 тонны товарного зерна?=${this.valRealizationTonne}`
      body += `&Количество голов?=${this.valHeads}`
      body += `&Количество техники, которые необходимо контролировать?=${this.valVehicles}`
      body += `&Количество электронных весов=${this.valElectronic}`
      body += `&Объем хранения зерна на элеваторе=${this.valVolumeElevator}`
      body += `&Какова средняя урожайность?=${this.valAverageYield}`
      body += `&Какова средняя рефакция?=${this.valAverageRefaction}`
      body += `&Каков средний надой/привес 1 головы в год? рефакция?=${this.valAverageNadoi}`
      body += `&Какова средняя реализация 1 единицы мясо/молока?=${this.valAverageRealization}`

      body += `&Сколько камер видеонаблюдения вы хотели бы установить=${this.valCameras}`
      body += `&Средние расходы ТМЦ на 1 га (ГСМ, семена, химия)=${this.valAverageTMC}`
      body += `&Количество краж зерна в машинах за 1 сезон=${this.valThiefSeason}`
      body += `&Доля краж ТМЦ за 1 сезон=${this.valPercentTMCSeason}`
      body += `&Количество вакансий на более квалифицированный персонал=${this.valVacancies}`
      body += `&Расходы на 1 вакансию в месяц (зарплата с налогами, проживание, питание)=${this.valVacanciesMonth}`
      body += `&Доля неээфективных расходов ТМЦ на 1 га, из за "человеческого фактора"=${this.valPercentNotEffectiveTMC}`
      body += `&Сколько электронных весов вы бы хотели установить=${this.valDesireElectronic}`
      body += `&Сколько влагомеров вы бы хотели установить на элеваторе=${this.valDesireWater}`
      body += `&Сколько расходомеров вы бы хотели установить на элеваторе=${this.valDesireRashod}`
      body += `&Контроль технологии позволит увеличить урожайность=${this.valPercentYield}`
      body += `&Контроль технологии позволит увеличить надой/привес=${this.valPercentNadoi}`
      body += `&Контроль технологии позволит сократить рефакцию=${this.valPercentRefaction}`
      body += `&Контроль технологии позволит сократить расходы на ТМЦ=${this.valPercentTMC}`

      body += `&GPS-мониторинг техники=${this.multiGPS}`
      body += `&Автопилоты и курсоуказатели для сельхозтехники=${this.multiPilot}`
      body += `&IP видеонаблюдение=${this.multiVideo}`
      body += `&Контроль, учет движения зерна на току=${this.multiControl}`
      body += `&Картирование полей на БПЛА=${this.multiKart}`
      body += `&Контроль вегетации (NDVI) на БПЛА=${this.multiNDVI}`
      body += `&Чипирование для идентификации КРС=${this.multiChip}`
      body += `&Системы для внутреннего мониторинга здоровья, активности и питания КРС=${this.multiMonitor}`
      body += `&Влагомеры=${this.multiWater}`
      body += `&Расходомеры=${this.multiRashod}`
      body += `&Автоматизация элеваторов и сушилок=${this.multiElevator}`
      body += `&Автоматизация уведомления об отключении оборудования=${this.multiNotification}`
      body += `&Программное обеспечение по управлению производством=${this.multiSoftware}`
      body += `&Внедрение программного обеспечения=${this.multiProg}`
      body += `&Сервисное обслуживание=${this.multiService}`

      body += `&Итого расходов на новые технологии=${this.totalCost}`
      body += `&Капитальные расходы=${this.capitalCost}`
      body += `&Капитальные расходы=${this.constantCost}`
      body += `&Итого доходов на новые технологии за сезон=${this.incomeTotal}`
      body += `&Животноводство =${this.incomeAnimal}`
      body += `&Растениеводство=${this.incomePlant}`
      body += `&Человеческий фактор=${this.incomeHuman}`
      body += `&Кражи=${this.incomeThief}`
      body += `&Окупаемость (количество сезонов)=${this.recoupment}`
      return body
    },
    nullForm() {
      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
    },
    openSpoilers() {
      $('.spoiler').slideDown(500)
    }
  }
}
</script>
