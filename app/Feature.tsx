import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import iconfeature1 from "./icons/iconfeature1";
import iconfeature2 from "./icons/iconfeature2";
import iconfeature3 from "./icons/iconfeature3";

export default function Feature() {
  return (
    <Box maxW={"800px"} m="auto" mt="25px" px="50px">
        <Flex direction={{base: "column", lg: "row"}}>
      <HStack mb="20px">
        <Icon as={iconfeature1} />
        <Text>30 days money back Guarantee</Text>
      </HStack>

      <HStack mb="20px">
        <Icon as={iconfeature2} />
        <Text>No setup fees 100% hassle-free</Text>
      </HStack>

      <HStack mb="20px">
        <Icon as={iconfeature3} />
        <Text>No monthly subscription Pay once and for all</Text>
      </HStack>
      </Flex>
    </Box>
  );
}
