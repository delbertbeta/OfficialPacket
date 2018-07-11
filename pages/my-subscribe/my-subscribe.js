// pages/my-subscribe/my-subscribe.js
const app = getApp();
const api = require('../../apis/api.js');

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
    api.subscribe.subscribe(app.globalData.openId, api.subscribe.orderType.recentlySubscribed, res => {
      this.setData({
        accounts: res.data.map((v) => {
          v.subscribed = true;
          return v;
        })
      })
    });
  },

  makeOrCancel(e) {
    const index = e.currentTarget.dataset.index;
    const targetAccount = this.data.accounts[index];
    const handle = targetAccount.subscribed ? api.subscribe.cancelSubscribe : api.subscribe.makeSubscribe;
    handle(app.globalData.openId, targetAccount.id, res => {
      const targetString = 'accounts[' + index + '].subscribed';
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