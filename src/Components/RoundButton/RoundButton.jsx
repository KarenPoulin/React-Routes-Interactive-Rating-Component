import React from 'react'
import './RoundButton.css'

const RoundButton = (props) => {
    const classnames = ["circle"];
    let type = "button";

    if (props.className) {classnames.push(props.className)};
    if (props.type) {type = props.type};

  return (
    <button
        onClick={props.onClick}
        type={type}
        className={classnames.join(" ")}
    >
        {props.children}
    </button>
  )
}

export default RoundButton