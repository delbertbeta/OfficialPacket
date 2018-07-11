const orderType = {
  catagory: 'catagory',
  recentlyPushed: 'recentlyPushed',
  recentlySubscribed: 'recentlySubscribed'
}

const subscribe = (openId, orderBy, callback) => {
  wx.request({
    url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/subscribe',
    method: 'POST',
    dataType: 'json',
    data: {
      openId: openId,
      orderBy: orderBy
    },
    success: (res) => {
      callback(res.data);
    }
  })
}

const makeSubscribe = (openId, officialAccountId, callback) => {
  wx.request({
    url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/make-subscribe',
    method: 'POST',
    dataType: 'json',
    data: {
      openId: openId,
      officialAccountId: officialAccountId
    },
    success: (res) => {
      callback(res.data)
    }
  })
}

const cancelSubscribe = (openId, officialAccountId, callback) => {
  wx.request({
    url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/cancel-subscribe',
    method: 'POST',
    dataType: 'json',
    data: {
      openId: openId,
      officialAccountId: officialAccountId
    },
    success: (res) => {
      callback(res.data);
    }
  })
}

module.exports = {
  orderType: orderType,
  subscribe: subscribe,
  makeSubscribe: makeSubscribe,
  cancelSubscribe: cancelSubscribe
}