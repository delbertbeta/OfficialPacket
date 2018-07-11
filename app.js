//app.js
const api = require('/apis/api.js');

App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        api.login(res.code, (res) => {
          this.globalData.openId = res.openId;
          if (this.openIdWatcher) {
            this.openIdWatcher(res);
          }
        });
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