var friendsData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/data/friends', function(req, res){
    console.log(res);
    res.json(friendsData);
  });
};
