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


// const [isClicked, setIsClicked] = useState(false);

// if (props.className) {
//     classnames.push(props.className);
// }

// const handleClick = () => {
//     props.setValue(Number(props.children));
// };

// if (isClicked) {
//     classnames.push('isActive');
// }


// const handleClick = () => {
//     setIsClicked(!isClicked);
// }





// import React from 'react'
// import { useState } from 'react';
// import './Rating.css';
// import Text from '../Text/Text';

// const Rating = (props) => {
//     /* const [isClicked, setIsClicked] = useState(darkBlue); */
//     const classnames = ["circle"];
//     const darkBlue = "hsl(213, 19%, 18%)";
//     const mediumGrey = "hsl(216, 12%, 54%)";
    
//     if (props.className) {
//         classnames.push(props.className);
//     }


//     const handleClick = event => {
//         event.currentTarget.classList.toggle('isActive');
//     }

//   return (
//     <div className={classnames.join(" ")} onClick={handleClick}>
//         {props.children}
//         <Text as="small">{props.content}</Text>
//     </div>
//   )
// }

// export default Rating