// pages/timeline.js
const app = getApp();
const api = require('../../apis/api.js');

let pageCounter = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: [],
    catagories: [],
    selectedCatagoryIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取用户信息
    if (app.globalData.userInfo) {
    } else {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                app.globalData.userInfo = res.userInfo;
              }
            })
          } else {
            wx.redirectTo({
              url: '/pages/index/index',
            })
          }
        },
        fail: res => {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
      })
    }
    if (app.globalData.openId) {
      this.initialRequest();
    } else {
      app.openIdWatcher = (res) => {
        this.initialRequest();
      }
    }
  },

  initialRequest: function () {
    api.timeline(app.globalData.openId, 0 + 20 * (pageCounter++), 20, 'all', (res) => {
      this.setData({
        messages: res.data
      })
    })
    api.catagory.catagory(app.globalData.openId, res => {
      this.setData({
        catagories: res.data
      })
    })
  },

  openArticle(e) {
    wx.navigateTo({
      url: '/pages/browser/browser?url=' + e.currentTarget.dataset.url,
    })
  },

  changeCatagory(e) {
    pageCounter = 0;
    const index = e.currentTarget.dataset.index;
    const catagory = index === 0 ? 'all' : this.data.catagories[index - 1].name;
    api.timeline(app.globalData.openId, 0 + 20 * (pageCounter++), 20, catagory, res => {
      this.setData({
        messages: res.data,
        selectedCatagoryIndex: index
      })
    })
  },

  nextPage() {
    const catagory = this.data.selectedCatagoryIndex === 0 ? 'all' : this.data.catagories[this.data.selectedCatagoryIndex - 1].name;
    api.timeline(app.globalData.openId, 0 + 20 * (pageCounter++), 20, catagory, res => {
      const result = this.data.messages.concat(res.data)
      this.setData({
        messages: result
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})