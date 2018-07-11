const catagory = (openId, callback) => {
  wx.request({
    url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/catagory',
    method: 'POST',
    dataType: 'json',
    data: {
      openId: openId
    },
    success: res => {
      callback(res.data);
    }
  })
}

module.exports = {
  catagory: catagory
}