import { Heading, HStack, VStack, Text } from "native-base";
import { Platform } from "react-native";
import { EmployeesDTO } from "../../../DTOs/EmployeesDTO";
import { dateMask, phoneMask } from "../../../utils/Mask";

type TDataProps = {
  data: EmployeesDTO;
};

export function TData({ data }: TDataProps) {
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
          {data.job}
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
          {dateMask(data.admission_date)}
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
          {phoneMask(data.phone)}
        </Text>
      </HStack>
    </VStack>
  );
}
