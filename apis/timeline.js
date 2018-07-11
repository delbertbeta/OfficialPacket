const timeline = (openId, start, num, catagory, callback) => {
  wx.request({
    url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/timeline',
    method: 'POST',
    data: {
      "openId": openId,
      "from": start,
      "num": num,
      "catagory": catagory
    },
    dataType: 'json',
    success: res => {
      callback(res.data);
    }
  })
}

module.exports = {
  timeline: timeline
}
