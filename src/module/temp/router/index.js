import temp from '@/module/temp/page/temp.vue'

export default [
  {
    path: '/',
    component: temp,
    name: '模板页面',
    hidden: false,
    meta: {
      requiresAuth: false,
      permission: 'SYSTEM:TEMP',
      name: 'temp'
    }
  }
]
