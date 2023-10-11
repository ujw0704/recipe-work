import React, { useEffect ,useContext} from 'react';
import axios from 'axios';
import "./Recipe.css"
import DiningIcon from '@mui/icons-material/Dining';
import {food } from "../App"
function Recipe() {
  const { recipe, setRecipe } = useContext(food)

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        console.log(response.data.categories);
        setRecipe(response.data.categories);
      })
      .catch((err) => {
        console.error(`Error in fetching data: ${err}`);
      });
  },[]);

  useEffect(() => {
    axios
      .post('http://localhost:4000/recipe', { recipe })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(`Error in post request ${err}`);
      });
  }, [recipe]);

     function handleClick(e,recipeItem){
         let item=recipe
        e.preventDefault()
       setRecipe([...recipe,recipeItem])

     }  


  return (
    <div className='wrapper'>
      <span><i class="fa-solid fa-utensils-slash"></i></span>
      <h1> <DiningIcon/>  g20 restaurant</h1>
       <h2>menu card</h2>
      <ul className='recipe-list'>
       
      { recipe && recipe.map((recipeItem, index) => (
        <div  className ="recipe"key={index}>
          <p>{recipeItem.strCategory}</p>
          <p>{recipeItem.strCategoryDescription.length>10 ?recipeItem.strCategoryDescription.slice(0,37):recipeItem.strCategoryDescription}</p>
          <div className='images'>

          <img src={recipeItem.strCategoryThumb}alt='img'/>
          </div>
          <div className='btn'>
        <button onClick={(e)=>handleClick(e,recipeItem)}>your order is ready</button>
        </div>
        </div>
        
      ))}
      </ul>
     
    </div>
  );
}

export default Recipe;
