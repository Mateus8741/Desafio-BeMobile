import { Avatar, HStack, Icon, Image, Stack, Text } from "native-base";
import { ListItem } from "@rneui/themed";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { TData } from "./TData";

export function TRow() {
  const [expanded, setExpanded] = useState(false);

  const list2 = [
    {
      title: "Amy Farha",
      name: "Amy Farha",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
  ];

  return (
    <ListItem.Accordion
      content={
        <HStack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          w="full"
          px={2}
          space={16}
        >
          <Image
            size="xs"
            rounded="full"
            source={{
              uri: "https://bit.ly/dan-abramov",
            }}
            alt="Imagem do usuário"
          />

          <Text alignSelf="center" fontFamily="mono" fontSize="md">
            Caroline Rocha da Silva
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
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      <TData />
    </ListItem.Accordion>
  );
}
