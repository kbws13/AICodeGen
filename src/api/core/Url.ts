export const User = {
  register: '/user/register',
  login: '/user/login',
  getLoginUser: '/user/get/login',
  logout: '/user/logout',
  add: '/user/add',
  getUserById: '/user/get',
  getUserVOById: '/user/get/vo',
  delete: '/user/delete',
  update: '/user/update',
  listUserVOByPage: '/user/list/page/vo',
}

export const App = {
  chatGenCode: '/app/chat/gen/code',
  add: '/app/add',
  update: '/app/update',
  delete: '/app/delete',
  getVoById: '/app/get/vo',
  listMyAppVOByPage: '/app/my/list/page/vo',
  listGoodAppVOByPage: '/app/good/list/page/vo',
  deleteAppByAdmin: '/app/admin/delete',
  updateAppByAdmin: '/app/admin/update',
  listAppVOByPageByAdmin: '/app/admin/list/page/vo',
  getAppVOByIdByAdmin: '/app/admin/get/vo',
  deployApp: '/app/deploy',
}

export const Static = {
  serveStaticResource: '/static'
}
