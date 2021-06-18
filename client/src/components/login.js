
import React, {useState} from'react';
import axios from 'axios';

const  Login = () => {

  const [login, setlogin] = useState({
    email:"",password:""
});
const handleInputs = (e) => {
 
    
  const name = e.target.name;
  const value = e.target.value;
  console.log(`User ${name}`) 
  console.log(`User ${value}`) 
  setlogin({...login, [name]:value});
  }

  const postLogin = (e) => {
    const headers = {
      'Content-Type': 'application/json',
      
    }
    const {email, password} = login;
    const val = JSON.stringify({
       email,password
    })   
    // const val1 = {
    //   "email": "palak@gmail.com",
    //   "password":"pal"
    // }
   
    //window.alert(`Uservalue ${val}`);
   axios.post()
    axios.post('http://localhost:5000/login', val, {
headers: headers
    }).then(() =>{
      console.log("successful")
      }).catch((err) => console.log(err, err.value, err.placeholder))
 
  }

return(
  <div>
   <div className="input-container">
     <label htmlFor="email">
     <i class="zmdi zmdi-email material-icons-name"></i>
     </label>
     <input type = "email" className="input-field" name = "email" id= "email" 
     value = {login.email} onChange= {handleInputs} autoComplete= "off" placeholder = "email"/>  
    </div> 
    <div className="input-container">
     <label htmlFor="password">
     <i class="zmdi zmdi-lock material-icons-name"></i>
     </label>
     <input type = "password" className="input-field" name = "password" id= "password" 
     value = {login.password} onChange= {handleInputs} autoComplete= "off" placeholder = "password"/>  
     
    </div>
    <br/>
    <button type = "submit" className= "btn-css" onClick = {postLogin}>Login</button>
  </div>
)


}
export default Login;