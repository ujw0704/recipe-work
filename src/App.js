import  React from "react"
import './App.css';
import Recipe from './Components/Recipe';
// import RecipeCart from './Components/RecipeCart';
import { createContext,useState } from 'react';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header"
import Home from "./Components/Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
export const food = createContext({})

function App() {

  const [recipe, setRecipe] = useState();

  
  //  const [cart ,setCart] =  useState()
  return (
    <div className="App">
      
     <food.Provider value={{recipe,setRecipe}}>
      <BrowserRouter>
      <Header/>
        <Routes>
    
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login/>}></Route>
          <Route  path="/register" element={<Register/>}></Route>
          <Route   path ="/recipe" element={<Recipe/>}></Route>
        {/* <Recipe/> */}
       {/* <Login/> */}
       {/* <Register/> */}
      
        </Routes>
      </BrowserRouter>
     </food.Provider>
    
    </div>
  );
}

export default App;
