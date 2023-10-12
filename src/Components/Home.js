

import React from 'react';
import './Home.css';
import homeImage from './images/home.jpg';
import homeImag from "./images/second.jpg"
import homeeImg from "./images/third.jpg"
// import homgeImgess from "./images/fouth.jpg"

function Home() {
  return (
    <div className='body'>
      <div className='image'>
        <img src={homeImage} alt='Home' />
      </div>
      <div className='image'>
        <img src={homeImag} alt ='home'/>
      </div>
      <div className='image'>

        <img src ={homeeImg} alt='home'/>
      </div>
      {/* <div className='fouthimg'>

        <img src ={homgeImgess} alt="home"/>
      </div> */}

    </div>
  );
}

export default Home;
