import React,{useState}from 'react'
import "./Addrecipe.css"
import axios from 'axios'
function Addrecipe() {
    let[name, SetName]=useState("")
    let [price,setPrice] =useState("")
    let [strCategory,SetstrCatergory]= useState("")
    let [image,setImages]= useState(null)
    let[discripition, setDiscription]= useState("")

     function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted")
        console.log('Name:', name);
    console.log('Price:', price);
    console.log('Category:', strCategory);
    console.log('Discription:', discripition);
    console.log('Image:', image);

    
    
    
    const formData = new FormData();
    formData.append('file', image); 
    formData.append('name', name);
    formData.append('price', price);
    formData.append('strCategory', strCategory);
    formData.append('discription',discripition );
    
    axios
    .post('http://localhost:4000/add', formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response.data);
    });
    
  }
  
     
  return (
    <div className='Addrecipe' >
        <form onSubmit={handleSubmit} className='FormAddrecipe' >

        <input type='text'placeholder='enter name'value={name}onChange={(e)=>SetName(e.target.value)}/>
        <input type='text'placeholder='enter  price'value={price}onChange={(e)=>setPrice(e.target.value)}/>
        <input type = 'text' placeholder='enter category'value={strCategory}onChange={(e)=>SetstrCatergory(e.target.value)}/>
         <input type='text'placeholder='enter discripition'value={discripition} onChange={(e)=>setDiscription(e.target.value)}/>
         <input type='file'  onChange={(e)=>setImages(e.target.files[0])}/>
         <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Addrecipe
