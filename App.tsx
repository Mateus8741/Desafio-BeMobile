import { NativeBaseProvider, StatusBar } from "native-base";
import { Home } from "./src/screens/home";
import { THEME } from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { AppContextProvider } from "./src/context/AppContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AppContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Home /> : <Loading />}
      </AppContextProvider>
    </NativeBaseProvider>
  );
}
