var request = require('pr-request')

console.log('Are we winning yet?')

request('http://judgingjs.herokuapp.com/leaderboard.json')
  .then(function (res) {
    var teams = JSON.parse(res.body)

    console.log(teams[14])

    // TODO: check to see if we have the highest score
  })