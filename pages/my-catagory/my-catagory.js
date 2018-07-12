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
    // api.catagory.catagory(app.globalData.openId, res => {
    //   this.setData({
    //     catagories: res.data
    //   })
    // })
    this.initializer();
  },

  initializer: function() {
    let obj = {};
    api.subscribe.subscribe(app.globalData.openId, api.subscribe.orderType.catagory, res => {
      res.data.forEach(v => {
        v.catagory.forEach(key => {
          if (obj[key.name]) {
            obj[key.name].push(v);
          } else {
            obj[key.name] = [];
            obj[key.name].push(v);
          }
        })
      })
      this.setData({
        catagories: obj
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
  deleteCatagory(e) {
    const index = e.currentTarget.dataset.index;
    const target = this.data.catagories[index];
    wx.showModal({
      title: '提示',
      content: '您确定要删除这个分类吗？',
      success: (res) => {
        if (res.confirm) {
          api.catagory.deleteCatagory(app.globalData.openId, target.id, (res) => {
            wx.showToast({
              title: '成功',
              icon: 'success'
            })
            this.initializer();
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
  goToEditCatagory(e) {
    const catagoryName = e.currentTarget.dataset.index;
    let catagory;
    let catagoryId;
    for (let key in this.data.catagories) {
      if (this.data.catagories.hasOwnProperty(key)) {
        if (key === catagoryName) {
          catagory = this.data.catagories[key];
          catagory[0].catagory.forEach(i => {
            if (i.name === catagoryName) {
              catagoryId = i.id;
            }
          })
          break;
        }
      }
    }
    wx.navigateTo({
      url: '/pages/edit-catagory/edit-catagory?catagory=' + JSON.stringify(catagory) + '&name=' + catagoryName + '&id=' + catagoryId,
    })
  }
})