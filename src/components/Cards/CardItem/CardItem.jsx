import React from 'react';
import classes from './CardItem.module.css'

const CardItem = (props) => {
  // const navigate = useNavigate()
  // const _onClick = ()=>{
  //  return navigate(`cardItem/${props.id}`, {state: {image: props.image, id: props.id}})
  // }
  return (
   <>
    <div className={classes['card-item']} >
      <span className={classes['item-id-top']}>{props.id}</span>
      <img src ={props.image}  alt={props.id}/>
    </div>
    </>
      );
    }

export default CardItem