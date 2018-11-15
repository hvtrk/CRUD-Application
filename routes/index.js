var express = require('express');
var router = express.Router();
var crud = require('./modal/crud');

/* GET home page. */
router.get('/', function(req, res, next) {
  var allUsers = [];
  var allUsersArray = crud.find();
  allUsersArray.exec((err, crud) => {
    if (err) {
      console.log(err);
    }
    crud.forEach(crud => {
      var elem = new Object();
      elem["delId"]=crud._id,
      elem["delName"] = crud.name;
      elem["delEmail"] = crud.email;
      elem["delAge"] = crud.age;
      allUsers.push(elem);
      console.log(allUsers);
    });
  res.render('index', {
    title: 'EXPRESS+MONGODB',
    headding: 'CRUD Application',
    display:'C=> CREATE \n R=>RETRIVE \n U=>UPDATE \n D=>DELETE',
    users: allUsers
  });
    console.log("After Rendring");
  });
});

module.exports = router;
