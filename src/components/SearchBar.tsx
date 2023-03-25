import { HStack, Icon, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export function SeachBar() {
  return (
    <HStack w="full" space={5} alignSelf="center">
      <Input
        placeholder="Pesquisar"
        width="full"
        borderRadius="4"
        bg='white'
        py={3}
        px={4}
        fontSize="16"
        fontFamily="mono"
        InputRightElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.300"
            as={<MaterialIcons name="search" />}
          />
        }
      />
    </HStack>
  );
}
