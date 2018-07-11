//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      wx.switchTab({
        url: '/pages/timeline/timeline',
      })
    }
  },
  getUserInfo: function(e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      wx.showLoading({
        title: '正在登录...'
      })
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/timeline/timeline',
        })
      }, 1000)
    }
    else {
      wx.showToast({
        title: '我们需要您的登录以记录您的订阅信息哦~😉',
        icon: 'none'
      })
    }
  },
})
