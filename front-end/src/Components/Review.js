import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../Color";
import Rating from "./Rating";
import Message from "./Notfications/Message";
import Buttone from "./Buttone";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>      
      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Avaliações 
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Estou muito satisfeito com este produto! A qualidade é excelente e atendeu completamente às minhas expectativas. Altamente recomendado!"
          }
        />
      </Box>
    </Box>
  );
}
