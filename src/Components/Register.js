import React from 'react'
import { useState } from 'react'
 import "./Register.css"
function Register() {
 
const [Data, SetData]= useState({
Name: "",UserName: "",Email: "",Password: "",PhoneNo: ""
})

function handlechange(e){
    e.preventDefault()
    SetData({...Data,[e.target.name]:e.target.value
    })
  

}
    function handleSubmit(e){
        e.preventDefault()
        console.log(Data)
    }
  

  return (

    <div className='register'>
        <form onSubmit={handleSubmit} className='form-register'>

      <input type='text' placeholder='enter your Name '  name ="Name"value={Data.Name} onChange={handlechange}/>
      <input type='text' placeholder='enter your UserName ' name ="UserName"value={Data.UserName} onChange={handlechange}/>
      <input type='text' placeholder='enter your email '  Email ="name"value={Data.Email} onChange={handlechange}/>
      <input type='text' placeholder='enter your Password ' name ="Password"value={Data.Password} onChange={handlechange}/>
      <input type='text' placeholder='enter your PhoneNO '  name ="PhoneNO"value={Data.PhoneNo} onChange={handlechange}/>
      <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Register
