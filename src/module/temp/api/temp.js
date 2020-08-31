import http from '@/base/api/http'

export default {
  // 分页查询装备列表
  test (query) {
    return http.requestPost('system/test/', query)
  }
}
