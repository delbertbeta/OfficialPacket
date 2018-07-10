//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/login',
          data: {
            code: res.code
          },
          method: 'POST',
          dataType: 'json',
          success: res => {
            this.globalData.openId = res.data.openId
          }
        })
      },
      fail: res => {
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    openId: null
  }
})