const subscribe = require('./subscribe.js');

module.exports = {
  login: require('./login.js').login,
  timeline: require('./timeline.js').timeline,
  catagory: require('./catagory.js'),
  subscribe: subscribe,
  search: require('./search.js').search,
  getMessage: require('./getMessage.js').getMessage
}