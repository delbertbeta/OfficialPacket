// pages/edit-catagory/edit-catagory.js
let selected = [];

const app = getApp();
const api = require('../../apis/api.js');

Page({
  onLoad: function(option) {
    const data = JSON.parse(option.catagory);
    this.setData({
      catagory: data,
      catagoryName: option.name,
      catagoryId: option.id
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    editing: false,
    catagory: [],
    catagoryName: '',
    catagoryId: ''
  },

  goToAddToCatagory() {
    wx.navigateTo({
      url: '/pages/add-to-catagory/add-to-catagory?info=' + JSON.stringify({
        catagoryId: this.data.catagoryId,
        catagory: this.data.catagory
      }),
    })
  },

  checkboxChange(e) {
    selected = e.detail.value;
  },

  deleteCatagory() {
    api.catagory.editCatagory(app.globalData.openId, this.data.catagoryId, 'delete', selected, res => {
      wx.navigateBack();
    })
  }

})
