import { HStack, Icon, Image, Stack, Text } from "native-base";
import { ListItem } from "@rneui/themed";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { TData } from "./TData";
import { EmployeesDTO } from "../../../DTOs/EmployeesDTO";

type TRowProps = EmployeesDTO;

export function TRow({ image, name, job, admission_date, phone }: TRowProps) {
  const [expanded, setExpanded] = useState(false);

  const data = {
    job,
    admission_date,
    phone,
  } as EmployeesDTO;

  return (
    <ListItem.Accordion
      content={
        <HStack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          w="full"
          space={20}
        >
          <Image
            size="xs"
            rounded="full"
            source={{
              uri: image,
            }}
            alt="Imagem do usuário"
          />

          <Text alignSelf="center" fontFamily="mono" fontSize="md">
            {name}
          </Text>

          <Icon
            color="blue.500"
            size={17}
            as={
              <Entypo
                name={expanded ? "chevron-thin-up" : "chevron-thin-down"}
              />
            }
          />
        </HStack>
      }
      noIcon
      bottomDivider
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      <TData data={data} />
    </ListItem.Accordion>
  );
}
