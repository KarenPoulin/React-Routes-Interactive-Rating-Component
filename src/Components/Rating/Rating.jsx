import React from 'react'
import RoundButton from '../RoundButton/RoundButton';
import './Rating.css';

const Rating = (props) => {
    const className = 
        props.isClicked === Number(props.children) ? "hover isActive" : "hover isInactive";

    const handleClick = () => {
        props.setValue(Number(props.children));
    };


  return (
    <RoundButton className={className} onClick={handleClick}>
        {props.children}
    </RoundButton>
  )
}

export default Rating

