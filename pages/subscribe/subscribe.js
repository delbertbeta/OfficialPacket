// pages/subscribe/subscribe.js
const app = getApp();
const api = require('../../apis/api.js');

let pageCounter = 0;

let tempData = [];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    accounts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.subscribe.subscribe(app.globalData.openId, api.subscribe.orderType.recentlyPushed, res => {
      tempData = res.data;
      this.setData({
        accounts: tempData.slice(0, 20 * (++pageCounter))
      })
    });
  },

  nextPage() {
    if (20 * (pageCounter) < tempData.length) {
      this.setData({
        accounts: tempData.slice(0, 20 * (++pageCounter))
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    api.subscribe.subscribe(app.globalData.openId, api.subscribe.orderType.recentlyPushed, res => {
      tempData = res.data;
      this.setData({
        accounts: tempData.slice(0, 20 * (++pageCounter))
      })
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  goToSearch (e) {
    wx.navigateTo({
      url: '/pages/search/search?search_key=' + e.detail.value,
    });
  },
  goToOfficialAccountDetail(e) {
    wx.navigateTo({
      url: '/pages/official-account-detail/official-account-detail?account=' + e.currentTarget.dataset.account,
    })
  }
})