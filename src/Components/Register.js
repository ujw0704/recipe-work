import React from 'react'
import { useState } from 'react'
 import "./Register.css"
 import axios from "axios"
function Register() {
 
const [Data, SetData]= useState({
Name: "",Username: "",Email: "",Password: "",Number: ""
})

function handlechange(e){
    
    SetData({...Data,[e.target.name]:e.target.value
    })
  

}
    function handleSubmit(e){
        e.preventDefault()
      
        axios.post("http://localhost:4000/signup",{Data})
        .then((response) => {
          console.log(response.data);
          console.log(Data)
        })
        .catch((err) => {
          console.error(`Error in post request ${err}`);
        });
    }
  

  return (

    <div className='register'>
        <form onSubmit={handleSubmit} className='form-register'>

      <input type='text' placeholder='enter your Name '  name ="Name"value={Data.Name} onChange={handlechange}/>
      <input type='text' placeholder='enter your Username ' name ="Username"value={Data.Username} onChange={handlechange}/>
      <input type='text' placeholder='enter your Email '  name ="Email"value={Data.Email} onChange={handlechange}/>
      <input type='text' placeholder='enter your Password ' name ="Password"value={Data.Password} onChange={handlechange}/>
      <input type='text' placeholder='enter your PhoneNO '  name ="Number"value={Data.Number} onChange={handlechange}/>
      <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Register
