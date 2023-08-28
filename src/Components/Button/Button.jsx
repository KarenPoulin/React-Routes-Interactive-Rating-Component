import React from 'react'
import './Button.css'

const Button = (props) => {
    const classnames = ["button"];

    if (props.className) {
        classnames.push(props.className);
    }

  return (
    <button onClick={props.onClick} disabled={props.disabled} className={classnames.join(" ")}>{props.children}
        
    </button>
  )
}

export default Button