// pages/edit-catagory/edit-catagory.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  onLoad: function(option) {
    const data = JSON.parse(option.catagory);
    this.setData({
      catagory: data,
      catagoryName: option.name
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    editing: false,
    catagory: [],
    catagoryName: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToAddToCatagory() {
      wx.navigateTo({
        url: '/pages/add-to-catagory/add-to-catagory',
      })
    },
    checkboxChange(e) {
      console.log(e);
    }
  },

})
