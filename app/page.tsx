"use client";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
//chakra is a component library and has given replacement for existing components and therefore, we write between Chakra provider tags.
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Feature from './Feature';
import Header from './Header';


import Practice from './practice';
import Pricing from './Pricing';

export default function Home() {
  return <ChakraProvider>
    
    {/* <Practice/> */}
    
    
    <Header/>
    <Pricing/>
    <Feature/>
    </ChakraProvider>; //in simple hi we have to put style first but in react h1 no need for style. ChakraUi is component library and default html tags are now replaced by its own 
//components are made with capital letters
//position of tags also matter a lot here
}