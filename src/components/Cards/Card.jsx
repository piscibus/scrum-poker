import React, { useState } from 'react';
import CardItem from './CardItem/CardItem';
import data from '../../data/data'
import { Link } from 'react-router-dom';
import OverlyItem from './OverlyItem/OverlyItem';

const Card = (props) => {
  const [itemChecked, setItemChecked] = useState(null)

  return (
    <>    <div className="row g-2">
      {!itemChecked && data.map(element=>{
        return (
      <div key={element.id} onClick={()=>setItemChecked(element)} className='col-3 d-flex mx-auto '>
      <CardItem  id={element.id} {...props} image={element.image}/>
      </div>)
    })}  
    </div>
        {itemChecked && <Link to={`/cardItem/${itemChecked.id}`} state={itemChecked}>
          <OverlyItem  id={itemChecked.id} image={itemChecked.image}/></Link> }
        </>

  )
}

export default Card;