

import React, {useState} from'react';
import {NavLink, useHistory} from 'react-router-dom'
import Login from './login';

const  Signup = () => {
const history = useHistory();
const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
});
let name,value;

const handleInputs = (e) => {
console.log(e);
name = e.target.name;
value = e.target.value;
setUser({...user, [name]:value});
}

const postData = async (e) => {
    e.prevenDefault();
    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch('http://localhost:3000/register',{
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name,email,phone,work,password,cpassword
        })    
    });
    const data = await res.json();
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
    <form method = "POST">
    <div className="input-container">
     <label htmlFor="name">
     <i class="zmdi zmdi-account material-icons-name"></i>
     </label>
     <input type = "text" className="input-field" name = "name" id= "name" 
     value = {user.name} onChange= {handleInputs} autoComplete= "off" placeholder = "Name"/>  
    </div>
    <div className="input-container">
     <label htmlFor="email">
     <i class="zmdi zmdi-email material-icons-name"></i>
     </label>
     <input type = "email" className="input-field" name = "email" id= "email" 
     value = {user.email} onChange= {handleInputs} autoComplete= "off" placeholder = "Email"/>  
    </div>
    <div className="input-container">
     <label htmlFor="phone">
     <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
     </label>
     <input type = "number" className="input-field" name = "phone" id= "phone" 
     value = {user.phone} onChange= {handleInputs} autoComplete= "off" placeholder = "Phone"/>  
    </div>
    <div className="input-container">
     <label htmlFor="work">
     <i class="zmdi zmdi-slideshow material-icons-name"></i>
     </label>
     <input type = "text" className="input-field" name = "work" id= "work" 
     value = {user.work} onChange= {handleInputs} autoComplete= "off" placeholder = "Profession"/>  
    </div>
    <div className="input-container">
     <label htmlFor="password">
     <i class="zmdi zmdi-lock material-icons-name"></i>
     </label>
     <input type = "password" className="input-field" name = "password" id= "password"
     value = {user.password} onChange= {handleInputs} autoComplete= "off" placeholder = "Password"/>  
    </div>
    <div className="input-container">
     <label htmlFor="cpassword">
     <i class="zmdi zmdi-lock material-icons-name"></i>
     </label>
     <input type = "password" className="input-field" name = "cpassword" id= "cpassword"
     value = {user.cpassword} onChange= {handleInputs} autoComplete= "off" placeholder = "Confirm Password"/>  
    </div>
    <br/>
    <button type = "submit" className= "btn-css" onClick = {postData}>Signup</button>
    </form> 
  </div>
  
)

}
export default Signup;