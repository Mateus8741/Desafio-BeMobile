import { Heading } from "native-base";

import { Header } from "../components/Header";
import { KeyboardAvoidingView } from "../components/KeyboardAvoidingView";
import { TBody } from "../components/Table/TBody";

export function Home() {
  return (
    <>
      <Header />

      <KeyboardAvoidingView>
        <Heading py={5} color="gray.700" fontFamily="body">
          Funcionários
        </Heading>

        <TBody />
      </KeyboardAvoidingView>
    </>
  );
}
