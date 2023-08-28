import React from 'react'
import './Title.css';

const Title = (props) => {
    const Component = props.as || "h1";
    const classnames = ["title"];

    if (props.className) {
        classnames.push(props.className);
    }

  return (
    <Component className={classnames.join(" ")}>{props.children}</Component>
  )
}

export default Title