const login = (code, callback) => {
  wx.request({
    // url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/login',
    url: 'http://ali.delbertbeta.cc:5000/api/v1/login',
    data: {
      code: code
    },
    method: 'POST',
    dataType: 'json',
    success: res => {
      callback(res.data);
    }
  })
}

module.exports = {
  login: login
}