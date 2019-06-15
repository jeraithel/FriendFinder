// Load Data
var friendsData = require("../data/friends");

// Routing

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function (req, res) {
    friendsData.push(req.body);
    // res.json(true);
    var totalDiff = 1000;
    var chosenFriend = 0;
    for (var i = 0; i < friendsData.length-1; i++) {
      // var diff = Math.abs(friendsData[i].scores[0] - req.body.scores[0]);
      // console.log(diff);
      var totalDiffNew = 0;
      for (var j = 0; j < friendsData[i].scores.length; j++) {
        var diff = Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
        console.log("Add " + diff + " to total diff");
        totalDiffNew += diff;
        console.log("Total difference is: " + totalDiffNew);
        console.log ("Previous Total Diff was: " + totalDiff);
      }
      if (totalDiffNew < totalDiff) {
        totalDiff = totalDiffNew;
        console.log("For Friend: " + friendsData[i].name);
        console.log("Difference: " + totalDiffNew);
        chosenFriend = i;
        console.log("Chosen Friend: " + i);
      }
    }
    console.log(friendsData[chosenFriend]);

    newFriend = friendsData[chosenFriend];

    console.log("calc done");
    console.log(newFriend);
    res.json(newFriend);
    // res.render("home");
    // res.redirect('back');
    // displayResult();

  });
};
