import React from 'react'
import './Image.css';

const Image = (props) => {
    let loading = "lazy";
    const classnames = ["img"];

    if (props.className) {
        classnames.push(props.classnames);
    }

    if (props.loading) loading - props.loading;

    return (
        <img fill={props.fill} src={props.src} alt={props.alt} width={props.width} height={props.height} className={classnames.join(" ")} loading={loading} />
    )
}

export default Image