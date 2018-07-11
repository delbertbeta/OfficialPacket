// pages/seach/search.js
const api = require('../../apis/api.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    officialAccountList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.search(app.globalData.openId, options.search_key, res => {
      this.setData({
        officialAccountList: res.data
      })
    })
  },

  makeOrCancel (e) {
    const index = e.currentTarget.dataset.index;
    const targetAccount = this.data.officialAccountList[index];
    const handle = targetAccount.subscribed ? api.subscribe.cancelSubscribe : api.subscribe.makeSubscribe;
    handle(app.globalData.openId, targetAccount.id, res => {
      const targetString = 'officialAccountList[' + index + '].subscribed';
      const data = {};
      data[targetString] = !targetAccount.subscribed
      this.setData(data);
    })
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
  
  }
})