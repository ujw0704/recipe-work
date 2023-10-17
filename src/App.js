import  React from "react"
import './App.css';
import Recipe from './Components/Recipe';
// import RecipeCart from './Components/RecipeCart';
import { createContext,useState } from 'react';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/CartData";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Adminlogin from "./Components/Admin/Login"
import AdminRegister from "./Components/Admin/Registration"
import Addrecipe from "./Components/Admin/Addrecipe";
import {BrowserRouter,Route,Routes} from "react-router-dom"


export const food = createContext({})

function App() {

  const [recipe,setRecipe] = useState([]);

  
   const [CartData,setCartData] =  useState([])
  return (
    <>
    <div className="App">
      
     <food.Provider value={{recipe,setRecipe , CartData, setCartData }}>
      <BrowserRouter>
      <Header/>
        <Routes>
    
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login/>}></Route>
          <Route  path="/register" element={<Register/>}></Route>
          <Route   path ="/recipe" element={<Recipe/>}></Route>
          <Route  path="/Adminlogin" element={<Adminlogin/>}></Route>
          <Route  path="/AdminRegister" element={<AdminRegister/>}></Route>
          <Route path="/Addrecipe" element={<Addrecipe/>}></Route>
          <Route path="/Cart"element={<Cart/>}></Route>
          
      
        </Routes>
      </BrowserRouter>
     </food.Provider>
    
    </div>
    </>
  );
}

export default App;
