// pages/my-catagory/my-catagory.js
const app = getApp();
const api = require('../../apis/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    catagories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    api.catagory.catagory(app.globalData.openId, res => {
      this.setData({
        catagories: res.data
      })
    })
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
  deleteCatagory(e) {
    const index = e.currentTarget.dataset.index;
    const target = this.data.catagories[index];
    wx.showModal({
      title: '提示',
      content: '您确定要删除这个分类吗？',
      success: function (res) {
        if (res.confirm) {
          api.catagory.deleteCatagory(app.globalData.openId, target.id, (res) => {
            wx.showToast({
              title: '成功',
              icon: 'success'
            })
            api.catagory.catagory(app.globalData.openId, res => {
              this.setData({
                catagories: res.data
              })
            })
          })
        } else if (res.cancel) {
          
        }
      }
    })
  },
  createCatagory() {
    wx.navigateTo({
      url: '/pages/create-catagory/create-catagory',
    })
  },
  goToEditCatagory() {
    wx.navigateTo({
      url: '/pages/edit-catagory/edit-catagory',
    })
  }
})