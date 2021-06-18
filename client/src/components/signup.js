
import React, {useState} from'react';
import {NavLink, useHistory} from 'react-router-dom'
import axios from 'axios';
import Login from './login';
const  Signup = () => {
const history = useHistory();
const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
});

//let name,value;
const handleInputs = (e) => {

console.log(e);
const name = e.target.name;
const value = e.target.value;
console.log(name)
console.log(value)
setUser({...user, [name]:value});
}
const postData1 =  (e) => {
  //  e.prevenDefault();
    const headers = {
        'Content-Type': 'application/json',
        
      }
    console.log("User checking");
    console.log(`User ${user}`) 
    console.log(`name ${user.value}`)
    console.log(`name ${user.name}`)
    //window.alert(`User ${user.name}`);
    const {name, email, phone, work, password, cpassword} = user;
    
    const val = JSON.stringify({
        name,email,phone,work,password,cpassword
    })   
   // window.alert(`User ${val}`);
   
    axios.post('http://localhost:5000/register', val, {
        headers: headers
            }).then( res => console.log("hey done successfully")).catch((err) => console.log("error is here"))
 

}

const postData =  async (e) => {
    // e.prevenDefault();
    console.log("User checking");
    const {name, email, phone, work, password, cpassword} = user;

    console.log(`User ${user}`)
   // const res =  await fetch('/register',{
    const res =  await fetch('http://localhost:5000/register',{
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name,email,phone,work,password,cpassword
        })    
    });
    const data =  await res.json();
  //  const data = await res.json();
    console.log(`data ${data}`)
    if (data.status === 422 || !data){
        window.alert("invalid registration")
        console.log("invalid registration")
    }
    else{
        window.alert("Registered successfully!");
        console.log("Registered successfully!");
        history.push("/login");
    }

}
return(
  <div className="signup-form">
   <h2>Signup</h2>
    
    <div className="input-container">
     <label htmlFor="name">
     <i class="zmdi zmdi-account material-icons-name"></i>
     </label>
     <input type = "text" className="input-field" name = "name" id= "name" 
     value = {user.name} onChange= {handleInputs} autoComplete= "off" placeholder = "Name"/>  
    </div>
    <div className="input-container">
     <label htmlFor="email">
     <i className="zmdi zmdi-email material-icons-name"></i>
     </label>
     <input type = "email" className="input-field" name = "email" id= "email" 
     value = {user.email} onChange= {handleInputs} autoComplete= "off" placeholder = "Email"/>  
    </div>
    <div className="input-container">
     <label htmlFor="phone">
     <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
     </label>
     <input type = "number" className="input-field" name = "phone" id= "phone" 
     value = {user.phone} onChange= {handleInputs} autoComplete= "off" placeholder = "Phone"/>  
    </div>
    <div className="input-container">
     <label htmlFor="work">
     <i className="zmdi zmdi-slideshow material-icons-name"></i>
     </label>
     <input type = "text" className="input-field" name = "work" id= "work" 
     value = {user.work} onChange= {handleInputs} autoComplete= "off" placeholder = "Profession"/>  
    </div>
    <div className="input-container">
     <label htmlFor="password">
     <i className="zmdi zmdi-lock material-icons-name"></i>
     </label>
     <input type = "password" className="input-field" name = "password" id= "password"
     value = {user.password} onChange= {handleInputs} autoComplete= "off" placeholder = "Password"/>  
    </div>
    <div className="input-container">
     <label htmlFor="cpassword">
     <i className="zmdi zmdi-lock material-icons-name"></i>
     </label>
     <input type = "password" className="input-field" name = "cpassword" id= "cpassword"
     value = {user.cpassword} onChange= {handleInputs} autoComplete= "off" placeholder = "Confirm Password"/>  
    </div>
    <br/>
    <button type = "submit" className= "btn-css" onClick={postData}>Signup</button>
    
  </div>
  
)

}
export default Signup;