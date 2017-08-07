var friendsData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res){
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var newFriendScore = req.body.scores;
    var scoredArr = [];
    var total = 0;
      for (var i = 0; i < friendsData.length; i++){
       var FriendArr = friendsData[i].scores;
       for (var x = 0; x < newFriendScore.length; x++) {
         total += (Math.abs(parseInt(FriendArr[x]) - parseInt(newFriendScore[x])));
       }
      scoredArr.push(total);
      total = 0;
    }
    var bestMatchScore = Math.min.apply(null, scoredArr);
    var key = scoredArr.indexOf(bestMatchScore);
    friendsData.push(req.body);
    res.json(friendsData[key]);
  });
};
