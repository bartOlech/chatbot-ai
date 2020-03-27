import React from 'react';
import Chatbot from './Chatbot';
import ArrowIco from './img/arrow.svg';
import styled, { keyframes } from 'styled-components';

const ArrowAnimation = keyframes`
  0% {
    right: 90px
  }
  50% {
    right: 120px
  }
  100% {
    right: 90px
  }
`

const Arrow = styled.div`
  width: 80px;
  height: 40px;
  background-image: url(${ArrowIco});
  background-size: 80px 40px;
  position: absolute;
  bottom: 28px;
  right: 90px;
  animation: ${ArrowAnimation} 1.4s infinite  ;
`
const MainText = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #3C3C3C;
  font-size: 3em;
  text-align: center;
  margin-top: 20px;
`
const Text = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #3C3C3C;
  font-size: 2em;
  text-align: center;
  margin-top: 10px;
  font-weight: 200;
`

function App() {
  return (
    <div >
      <MainText>ChatBot</MainText>
      <Text>React.js + Node.js + DialogFlow</Text>
      <Arrow></Arrow>
        <Chatbot></Chatbot> 
    </div>
  );
}

export default App;
