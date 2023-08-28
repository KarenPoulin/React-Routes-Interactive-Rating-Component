import { useState } from 'react'
import './App.css'
import Container from './Components/Container/Container';
import Title from './Components/Title/Title';
import Text from './Components/Text/Text';
import Rating from './Components/Rating/Rating';
import Button from './Components/Button/Button';
import Image from './Components/Image/Image';
import Star from './assets/icon-star.svg';
import RoundButton from './Components/RoundButton/RoundButton';

function App() {
  const [currentlyClicked, setCurrentlyClicked] = useState(0);

  const onClick = (value) => {
    setCurrentlyClicked(previous => {
      if (previous === value) return 0;
      return value;
    });
  }

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
        <Button>Submit</Button>
      </Container>
    </section>
  )
}

export default App
