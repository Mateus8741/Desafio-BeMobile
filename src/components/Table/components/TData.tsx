import { Heading, HStack, VStack, Text } from "native-base";
import { Platform } from "react-native";

export function TData() {
  const border = Platform.OS === "android" ? "dashed" : "solid";

  return (
    <VStack space="5" px={5} mt={5}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        borderStyle={border}
        borderBottomWidth="1px"
        borderBottomColor="gray.300"
      >
        <Heading
          color="gray.700"
          fontFamily="body"
          fontSize="md"
          fontWeight="bold"
        >
          Cargo
        </Heading>

        <Text fontSize="md" fontFamily="mono" color="gray.700">
          Front-end
        </Text>
      </HStack>

      <HStack
        alignItems="center"
        justifyContent="space-between"
        borderStyle={border}
        borderBottomWidth="1px"
        borderBottomColor="gray.300"
      >
        <Heading
          color="gray.700"
          fontFamily="body"
          fontSize="md"
          fontWeight="bold"
        >
          Data de admissão
        </Heading>

        <Text fontSize="md" fontFamily="mono">
          00/00/0000
        </Text>
      </HStack>

      <HStack
        alignItems="center"
        justifyContent="space-between"
        borderStyle={border}
        borderBottomWidth="1px"
        borderBottomColor="gray.300"
      >
        <Heading
          color="gray.700"
          fontFamily="body"
          fontSize="md"
          fontWeight="bold"
        >
          Telefone
        </Heading>

        <Text fontSize="md" fontFamily="mono">
          +55 (55) 55555-555
        </Text>
      </HStack>
    </VStack>
  );
}
