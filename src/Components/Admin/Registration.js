import React ,{useState} from 'react'
import axios from "axios"
function Registration() {
    const [Adminregister, setAdminRegister]= useState({
        Name: "",Username: "",Email: "",Password: "",Number: ""
        })
        
        function handleInputchange(e){
         
            console.log("hello")
            setAdminRegister({...Adminregister,[e.target.name]:e.target.value
            })
        }  
        function handleSubmit(e){
          e.preventDefault()
          axios.post("http://localhost:4000/adminregister",{Adminregister})
          .then((response) => {
            console.log(response.data);
            console.log(Adminregister)
            
              
            })
            .catch((err) => {
              console.error(`Error in post request ${err}`);
            });
    
        }



  return (
    <div className='register'>
        <form onSubmit={handleSubmit} className='form-register'>

      <input type='text' placeholder='enter your Name '  name ="Name"value={Adminregister.Name} onChange={handleInputchange}/>
      <input type='text' placeholder='enter your Username ' name ="Username"value={Adminregister.Username} onChange={handleInputchange}/>
      <input type='text' placeholder='enter your Email '  name ="Email"value={Adminregister.Email} onChange={handleInputchange}/>
      <input type='text' placeholder='enter your Password ' name ="Password"value={Adminregister.Password} onChange={handleInputchange}/>
      <input type='text' placeholder='enter your PhoneNO '  name ="Number"value={Adminregister.Number} onChange={handleInputchange}/>
      <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Registration
