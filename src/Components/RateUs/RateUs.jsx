import React from 'react'
import { useState } from 'react'
import Container from '../Container/Container'
import Title from '../Title/Title';
import Text from '../Text/Text';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';
import Image from '../Image/Image';
import Star from '../../assets/icon-star.svg';
import RoundButton from '../RoundButton/RoundButton';
import { useNavigate } from 'react-router-dom';



const RateUs = () => {
    const [currentlyClicked, setCurrentlyClicked] = useState(0);
    const navigate = useNavigate();

    const onClick = (value) => {
      setCurrentlyClicked(previous => {
        if (previous === value) return 0;
        return value;
      });
    }

    const onSubmit = () => {
        navigate(`/success/${currentlyClicked}`);
    };


  return (
   <section>
      <Container className="backgroundContainer">
        <RoundButton>
          <Image src={Star} alt="Star Icon" width="20px" height="20px"></Image>
        </RoundButton>
        <Title as="h3">How did we do?</Title>
        <Text>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</Text>
        <Container className="flexRow">
          <Rating isClicked={currentlyClicked} setValue={onClick} >1</Rating>
          <Rating isClicked={currentlyClicked} setValue={onClick} >2</Rating>
          <Rating isClicked={currentlyClicked} setValue={onClick} >3</Rating>
          <Rating isClicked={currentlyClicked} setValue={onClick} >4</Rating>
          <Rating isClicked={currentlyClicked} setValue={onClick} >5</Rating>
        </Container>
        <Button  onClick={onSubmit} disabled={currentlyClicked === 0} type='button'>Submit</Button>
      </Container>
    </section>
  )
}

export default RateUs