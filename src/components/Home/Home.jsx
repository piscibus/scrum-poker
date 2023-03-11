import React from 'react';
import Card from '../Cards/Card';
const Home = () => {
  return (
    <div>
      <h2 style={{textShadow:'3px 3px 3px #000000'}} className='text-center  mb-50 bg-dark text-white'>Choose a Card</h2>
   <div className = 'container '>
    
          <Card/>
   </div>
   </div>
  )
}

export default Home