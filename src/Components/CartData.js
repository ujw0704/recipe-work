import React, { useContext } from 'react'
import { food } from "../App"


function CartData() {
  const { CartData } = useContext(food)
  // idCategory
  // // : 
  // "2"
  // strCategory
  // : 
  // "Chicken"
  // strCategoryDescription
  // : 
  // "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
  // strCategoryThumb
  
  return (
    <div>
      <h1>Cart{CartData.length}</h1>
      {

        CartData.map((item, index) => {
          return (<div key={index}>
          <h1>{item.strCategory}</h1>
          <p>{item.trCategoryDescription}</p>
        <img src={item.strCategoryThumb} alt='image'/>
          
          
          </div>)
        })



      }

    </div>

  )
}

export default CartData;
