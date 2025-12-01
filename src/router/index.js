import { createRouter, createWebHistory } from 'vue-router'
import HomePages from '../page/home_page.vue'
import RKKA from '../page/rkka_page.vue'
import militaryRKKA from '../page/military-rkka_page.vue'
import childrenWar from '../page/children-war_page.vue'
import staffLaw from '../page/staff-law_page.vue'
import prisonersCamps from '../page/prisoners-camps_page.vue'
import frontWorkers from '../page/front-workers_page.vue'
import compositionArmy from '../page/composition-army_page.vue'
import intelligenceOfficers from '../page/intelligence-officers_page.vue'
import employeesEnterprises from '../page/employees-enterprises_page.vue'
import membersMovement from '../page/members-partisan-movement_page.vue'
import card_frontWorkers from '../components/card_detail-frontWorkers.vue'
import card_staffLaw from '../components/card_detail-staffLaw.vue'
import card_prisonersCamps from '../components/card_detail-prisonersCamps.vue'
import card_detailRkka from '../components/card_detail-rkka.vue'
import card_detailmilitaryRKKA from '../components/card_detail-militaryRKKA.vue'
import card_detailChildrenWar from '../components/card_detail-childrenWar.vue'
import card_compositionArmy from '../components/card_detail-compositionArmy.vue'
import card_detailIntelligenceOfficers from '../components/card_detail-intelligenceOfficers.vue'
import card_detailEmployeesEnterprises from '../components/card_detail-employeesEnterprises.vue'
import card_detailMembersMovement from '../components/card_detail-membersMovement.vue'

const routes = [
  {
    path: '/',
    component: HomePages,
    name: 'home',
  },
  {
    path: '/rkka_page.vue',
    component: RKKA,
    name: 'rkka',
    meta: { title: 'РАБОЧЕ-КРЕСТЬЯНСКАЯ КРАСНАЯ АРМИЯ' },
  },
  {
    path: '/military-rkka_page.vue',
    component: militaryRKKA,
    name: 'militaryRKKA',
    meta: { title: 'ВОЕННОСЛУЖАЩИЕ (РККА)' },
  },
  {
    path: '/children-war_page.vue',
    component: childrenWar,
    name: 'childrenWar',
    meta: { title: 'ДЕТИ ВОЙНЫ' },
  },
  {
    path: '/staff-law_page.vue',
    component: staffLaw,
    name: 'staffLaw',
    meta: { title: 'СОТРУДНКИ ОРГАНОВ ВНУТРЕННИХ ДЕЛ И ОРГАНОВ ГОСУДАРСТВЕННОЙ БЕЗОПАСНОСТИ' },
  },
  {
    path: '/prisoners-camps_page.vue',
    component: prisonersCamps,
    name: 'prisonersCamps',
    meta: { title: 'УЗНИКИ КОНЦЕНТРАЦИОННЫХ ЛАГЕРЕЙ' },
  },
  {
    path: '/front-workers_page.vue',
    component: frontWorkers,
    name: 'frontWorkers',
    meta: { title: 'ТРУЖЕНИКИ ТЫЛА' },
  },
    {
    path: '/composition-army_page.vue',
    component:compositionArmy,
    name: 'compositionArmy',
    meta: { title: 'ВОЛЬНОНАЁМНЫЙ СОСТАВ АРМИИ И ФЛОТА, ВОЙСК И ОРГАНОВ ВНУТРЕННИХ ДЕЛ, ОРГАНОВ ГОСУДАРСТВЕННОЙ БЕЗОПАСНОСТИ' },
  },
    {
    path: '/intelligence-officers_page.vue',
    component:  intelligenceOfficers,
    name: 'intelligenceOfficers',
    meta: { title: 'СОТРУДНИКИ РАЗВЕДКИ И КОНТРРАЗВЕДКИ' },
  },
    {
    path: '/employees-enterprises_page.vue',
    component: employeesEnterprises,
    name: 'employeesEnterprises',
    meta: { title: 'РАБОТНИКИ ПРЕДПРИЯТИЙ, ВОЕННЫХ ОБЪЕКТОВ, НАРКОМАТОВ, ВЕДОМСТВ, ОРГАНИЗАЦИЙ, КОРРЕСПОНДЕНТЫ, ДИКТОРЫ, КИНООПЕРАТОРЫ' },
  },
    {
    path: '/members-partisan-movement_page.vue',
    component: membersMovement,
    name: 'membersMovement',
    meta: { title: 'УЧАСТНИКИ ПАРТИЗАНСКОГО И ПОДПОЛЬНОГО ДВИЖЕНИЯ' },
  },
  {
    path: '/card_compositionArmy/:id',
    component: card_compositionArmy,
    name: 'card_compositionArmy',
  },
  {
    path: '/card_detailIntelligenceOfficers/:id',
    component: card_detailIntelligenceOfficers,
    name: 'card_detailIntelligenceOfficers',
  },
  {
    path: '/card_detailEmployeesEnterprises/:id',
    component: card_detailEmployeesEnterprises,
    name: 'card_detailEmployeesEnterprises',
  },
  {
    path: '/card_detail-membersMovement/:id',
    component: card_detailMembersMovement,
    name: 'card_detailMembersMovement',
  },
  {
    path: '/card_frontWorkers/:id',
    component: card_frontWorkers,
    name: 'card_frontWorkers',
  },
  {
    path: '/card_prisonersCamps/:id',
    component: card_prisonersCamps,
    name: 'card_prisonersCamps',
  },
  {
    path: '/card_staffLaw/:id',
    component: card_staffLaw,
    name: 'card_staffLaw',
  },
  {
    path: '/card_detail-rkka/:id',
    component: card_detailRkka,
    name: 'card-detail-rkka',
  },
  {
    path: '/card_detail-militaryRKKA/:id',
    component: card_detailmilitaryRKKA,
    name: 'card_detail-militaryRKKA',
  },
  {
    path: '/card_detail-childrenWar/:id',
    component: card_detailChildrenWar,
    name: 'card_detail-childrenWar',
  },
]

const router = createRouter({
  history: createWebHistory('/gpw_people/'), // или другой базовый путь
  routes,
})

export default router
