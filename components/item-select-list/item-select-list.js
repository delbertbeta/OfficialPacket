// components/item-select-list/item-select-list.js
const app = getApp();
const api = require('../../apis/api.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    accounts: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    // accounts: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkboxChange: function(event) {
      let detail = event.detail;
      this.triggerEvent('checkboxChange', detail);
    }
  },
  attached() {
    // api.subscribe.subscribe(app.globalData.openId, api.subscribe.orderType.recentlySubscribed, res => {
    //   this.setData({
    //     accounts: res.data
    //   })
    // });
  }
})