

import React from 'react';
import './Home.css';
import homeImage from './images/home.jpg';
import homeImag from "./images/second.jpg"
import homeeImg from "./images/third.jpg"
import Recipe from "../Components/Recipe"
import "./Recipe.css"
// import homgeImgess from "./images/fouth.jpg"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='body'>
      <div className='image'>
        <img src={homeImage} alt='Home' />
      </div>
      <div className='image'>
        <img src={homeImag} alt='home' />
      </div>
      <div className='image'>

        <img src={homeeImg} alt='home' />
        {/* <Link to ="/recipe"></Link> */}
      </div>
      {/* <div className='fouthimg'>

        <img src ={homgeImgess} alt="home"/>
      </div> */}

         {/* <div className='recipe-link'> */}

         {/* </div> */}
      
    </div>
         <Recipe />
</>
  );
}

export default Home;
