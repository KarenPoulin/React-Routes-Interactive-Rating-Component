import React from 'react'
import './Button.css'

const Button = (props) => {
    const classnames = ["button"];

    if (props.className) {
        classnames.push(props.className);
    }

  return (
    <div className={classnames.join(" ")}>{props.children}
        
    </div>
  )
}

export default Button