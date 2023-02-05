import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={{base: "left", md: "left", lg: "center"}} bg="#6846C1" pt={"90px"} pb={"250"} color="white" pl="20px">

<Heading>Simple pricing for your business</Heading>
<Text pt="15px"> Plans that are carefully crafted to suit your business.</Text>
    </Box>

  )
  
};
//padding top takes space from within box while margin top take space from outside box
//pt is padding top and pb is padding bottom