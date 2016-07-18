var request = require('request')

request('https://beta.furrynetwork.com/api/character/connorthefox/stats', {headers:{'authorization':'Bearer a3e1ebdb3d71cd93cfa00630f735ec188cf2eac0'}}, function(err, res, body) {
  var json = JSON.parse(body)
  console.log(json)
})

var connor = '0e55a86791fa857c97bc1e8e91ec9b32b0ac561f'
var other = '9a4a944e39ca2ae77e5e06fd350063e835273993'
