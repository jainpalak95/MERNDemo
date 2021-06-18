const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
email:{
    type: String,
    required: true

},
phone:{
    type: Number,
    required: true
},
work:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true
},
cpassword:{
    type: String,
    required: true
}
})

//Password Hashing
// userSchema.pre('save', async function(next){
//     console.log("first");
// if (this.isModified('password')){
//     console.log("second");
//   this.password = await bcrypt.hash(this.password, 12);
//   this.cpassword = await bcrypt.hash(this.cpassword, 12);  
// }
// next()
// });
const User = mongoose.model('USER', userSchema)
module.exports = User;