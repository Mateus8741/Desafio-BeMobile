import { ScrollView, KeyboardAvoidingView as KeyView } from "native-base";
import { ReactNode } from "react";
import { Platform } from "react-native";

interface Props {
  children: ReactNode;
}

export function KeyboardAvoidingView({ children }: Props) {
  return (
    <ScrollView bounces={false} bg="white">
      <KeyView
        h="100%"
        w="100%"
        px={5}
        flex={1}
      >
        {children}
      </KeyView>
    </ScrollView>
  );
}
