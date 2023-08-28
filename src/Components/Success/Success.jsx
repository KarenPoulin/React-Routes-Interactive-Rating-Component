import React from 'react'
import Container from '../Container/Container'
import Title from '../Title/Title';
import Text from '../Text/Text';
import { useParams } from 'react-router-dom';

const Success = () => {
    const params = useParams();
  return (
    <Container>
        <Text as='p'>You selected out <span>{params.rating}</span> of 5</Text>
        <Title>Thank you!</Title>
        <Text as='p'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</Text>
    </Container>
  )
}

export default Success