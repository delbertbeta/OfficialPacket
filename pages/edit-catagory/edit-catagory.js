// pages/edit-catagory/edit-catagory.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    editing: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToAddToCatagory() {
      wx.navigateTo({
        url: '/pages/add-to-catagory/add-to-catagory',
      })
    }
  },

})
