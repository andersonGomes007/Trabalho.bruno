import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../Color";
import Buttone from "../Components/Buttone";

const ShippingInputs = [
  {
    label: "CIDADE",
    type: "text",
  },
  {
    label: "PAÍS",
    type: "text",
  },
  {
    label: "CEP",
    type: "text",
  },
  {
    label: "ENDEREÇO DE ENTREGA",
    type: "text",
  },
];

function ShoppingScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          ENDEREÇO DE ENTREGA
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={i.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <Buttone
              onPress={() => navigation.navigate("Checkout")}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShoppingScreen;
