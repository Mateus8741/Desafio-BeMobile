import { Heading, HStack, Icon } from "native-base";

import { Octicons } from "@expo/vector-icons";

export function THeader() {
  return (
    <HStack
      bg="blue.400"
      alignItems="center"
      justifyContent="space-between"
      borderTopRadius={5}
      px={5}
      py={4}
    >
      <Heading color="white" fontSize="md" fontFamily="body">
        FOTO
      </Heading>
      <Heading color="white" fontSize="md" fontFamily="body">
        NOME
      </Heading>

      <Icon color="white" as={<Octicons name="dot-fill" />} />
    </HStack>
  );
}
