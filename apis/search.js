const search = (openId, searchKey, callback) => {
  wx.request({
    // url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/search',
    url: 'http://ali.delbertbeta.cc:5000/api/v1/search',
    method: 'POST',
    data: {
      openId: openId,
      searchKey: searchKey
    },
    dataType: 'json',
    success: res => {
      callback(res.data);
    }
  })
}

module.exports = {
  search: search
}