// pages/add-to-catagory/add-to-catagory.js
const app = getApp();
const api = require('../../apis/api.js');

let selected = [];
let id = '';

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
    const info = JSON.parse(options.info);
    const list = info.catagory;
    id = info.catagoryId;
    api.subscribe.subscribe(app.globalData.openId, api.subscribe.orderType.recentlySubscribed, res => {
      this.setData({
        accounts: res.data.filter(v => {
          for (let item of list) {
            if (item.id === v.id) {
              return false;
            }
          }
          return true;
        })
      })
    });
  },

  checkboxChange: function(e) {
    this.selected = e.detail.value;
  },

  finish: function () {
    api.catagory.editCatagory(app.globalData.openId, id, 'add', selected, res => {
      wx.navigateBack({
        delta: 2
      })
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