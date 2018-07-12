const catagory = (openId, callback) => {
  wx.request({
    url: 'http://ali.delbertbeta.cc:5000/api/v1/catagory',
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

const addCatagory = (openId, catagoryName, callback) => {
  wx.request({
    // url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/add-catagory',
    url: 'http://ali.delbertbeta.cc:5000/api/v1/add-catagory',
    method: 'POST',
    dataType: 'json',
    data: {
      openId: openId,
      catagoryName: catagoryName
    },
    success: (res) => {
      callback(res.data);
    }
  })
}

const deleteCatagory = (openId, catagoryId, callback) => {
  wx.request({
    // url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/delete-catagory',
    url: 'http://ali.delbertbeta.cc/api/v1/delete-catagory',
    method: 'POST',
    dataType: 'json',
    data: {
      openId: openId,
      catagoryId: catagoryId
    },
    success: (res) => {
      callback(res.data);
    }
  })
}

const editCatagory = (openId, catagoryId, operationType, offcialAccounts, callback) => {
  const targetString = JSON.stringify({
    "openId": openId,
    "catagoryId": catagoryId,
    "type": operationType,
    "officialAccounts:": offcialAccounts
  });
  wx.request({
    // url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/edit-catagory',
    url: 'http://ali.delbertbeta.cc/api/v1/edit-catagory',
    method: 'POST',
    dataType: 'json',
    data: targetString,
    success: (res) => {
      callback(res.data);
    }
  })
}


module.exports = {
  catagory: catagory,
  addCatagory: addCatagory,
  deleteCatagory: deleteCatagory,
  editCatagory: editCatagory
}