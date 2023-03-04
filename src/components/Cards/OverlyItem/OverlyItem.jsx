import React from 'react'
import classes from './overly-item.module.css';
const OverlyItem = (props) => {
  console.log(props.image)
  return (
    <div className={classes.overly}>
      
        <img src={require('../../../cards/logo.jpg')} alt="cover" />
    </div>
  )
}

export default OverlyItem