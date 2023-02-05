import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Practice() {
  return <>
  <h1 style={{color: 'beige', fontSize: '35px' }}>Hello World h1</h1>
    <h2>Hello World h2</h2>
    <p>Hello World p1</p>
    <Heading> Hello by chakra h3</Heading>
    <Heading as = "h1" color="red" fontSize={'55px'}> Hello by chakra h1</Heading>
    <Text color={'bisque'} fontWeight='extrabold'>Hello by chakra p2</Text>
  <Heading> Flexbox in HTML/CSS</Heading>

  <div style={{
    color: "white", 
    display: "flex", 
    justifyContent: "center", 
    backgroundColor: "greenyellow", 
    height: "300px", 
    alignItems: "center"}}>
    <div style={{backgroundColor: "red", padding: "50px", height: "90px"}}>Div1</div>
    <div style={{backgroundColor: "blue", padding: "50px", height: "90px"}}>Div2</div>
    <div style={{backgroundColor: "orange", padding: "50px", height: "90px"}}>Div3</div>
  </div>
  
  </>
}; //to reverse flex we use flexDirection: "column", also we use justifyContent: "end"/"around"/"center"
