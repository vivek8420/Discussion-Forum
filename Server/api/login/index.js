var express = require('express');  
var User = require('../models/user');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  let userData = req.body
  User.findOne({user_id: userData.user_id}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid User')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user.user_id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})



module.exports = router;