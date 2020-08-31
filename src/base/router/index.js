import Vue from 'vue'
import Router from 'vue-router'

// // 导入路由规则
import temp from '@/module/temp/router'

Vue.use(Router)
// 定义路由配置
let routes = []
let concat = (router) => {
  routes = routes.concat(router)
}

// 合并路由规则
concat(temp)

// 导出路由规则
export default routes
