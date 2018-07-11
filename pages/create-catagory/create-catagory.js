// pages/create-catagory/create-catagory.js
const app = getApp();
const api = require('../../apis/api.js');

let name = '';
let list = [];

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
  onLoad: function(options) {
    api.subscribe.subscribe(app.globalData.openId, api.subscribe.orderType.recentlySubscribed, res => {
      this.setData({
        accounts: res.data
      })
    });
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

  },
  inputName(e) {
    name = e.detail.value;
  },
  checkboxChange(e) {
    list = e.detail.value;
  },
  create() {
    api.catagory.addCatagory(app.globalData.openId, name, (res) => {
      api.catagory.editCatagory(app.globalData.openId, res.id, 'add', list, (res) => {
        wx.navigateBack();
      })
    });

  }
})