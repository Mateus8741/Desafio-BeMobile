import { HStack } from "native-base";

import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <HStack
      w="full"
      py={3}
      px={4}
      pt={10}
      bg="gray.700"
      _ios={{
        paddingTop: 70,
      }}
    >
      <Logo width="120" height="35.16" />
    </HStack>
  );
}
