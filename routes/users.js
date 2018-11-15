var express = require('express');
var router = express.Router();
var crud = require('./modal/crud');



/* POST (Create) users listing. */
router.post('/create', function (req, res, err) {
    // res.send("Inside the user POST(/users/create)  \n" + req.body.inputName);
  crud.create({
    name: req.body.inputName,
    age: req.body.inputAge,
    email:req.body.inputEmail
  },(err)=>{
    if(err) console.log(err);
    res.redirect('/');
  });
});

/* Post (Update) users listing. */
router.post('/update', function (req, res, err) {  
  // res.send("Inside the user POST(/users/update) \n" + req.body.Email);
  var up={
    name:req.body.Name,
    email:req.body.Email,
    age:req.body.Age
  };
  crud.findOneAndUpdate({ email: req.body.Email},up, (err) => {
    if (err) console.log("Updation Error. \n Email Not Found."+err);
  });
  res.redirect('/');

  
});
/* DELETE (Delete) users listing. */
router.get('/delete/:id', function (req, res, err) { 
  // res.send("Inside the user DELETE(/users/delete) \n" + req.body.inputName);

  crud.findOneAndDelete({_id:req.params.id},(err)=>{
    if(err) console.log("Deletion Error");
  });
  res.redirect('/');
 
  // crud.deleteOne({
  //   email: req.params.Email
  //   }, (err, user) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   crud.find((err, user) => {
  //     if (err) console.log(err);
  //     res.redirect('/');
  //   });
  // });
});

module.exports = router;



