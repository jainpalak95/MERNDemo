const express = require('express');
const router = express.Router();
const User = require('../model/user_schema');
const bcrypt = require('bcrypt');
require('../db/connection');

// Basic Get Request
router.get('/', (req, res) => {
  res.send(`Hello world from auth.js`)
});

//Signup API
router.post('/register', (req, res) => {
  console.log(req.body);

  const { name, email, phone, work, password, cpassword } = req.body
  if (!name || !email || !phone || !work || !password || !cpassword) {
    res.status(422).json({ error: 'all fields are mendatory' })
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: 'email already registered' })
      }
      else if (password != cpassword){
        return res.status(422).json({ error: 'password is not matching' })
      }
      else{
      const user = new User({ name, email, phone, work, password, cpassword })
      user.save().then(() => {
        res.status(201).json({ error: 'User Successfully Registered' })
        console.log(`userdetails ${user}`)
      }).catch(error => {
        res.status(500).json({ error: 'Registration Failed' })
      })
    }
    }).catch(error => {
      console.log(error);
    })

})

//Login API
router.post('/login', async(req,res) => {
  console.log(req.body);
try{
  const {email, password} = req.body
  if(!email || !password){
    return res.status(400).json({error : 'All the fields are mendatory'});
  }
  const userLogin = await User.findOne({email: email})

  console.log(userLogin);
  if (userLogin){
    const isMatch = await bcrypt.compare(password, userLogin.password)
    if (!isMatch){
      res.status(400).json({error : 'invalid credentials'});
    }
    else{
      res.status(201).json({error : 'succssfully loggedin'});
    }
  }
  else{
    res.status(400).json({error : 'invalid credentials'});
  }
  

}
catch(error){
  console.log(error);
}
});
module.exports = router;