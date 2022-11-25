import { MD3DarkTheme as DefaultTheme, Provider as PaperProvider, Text } from "react-native-paper";
import Stopwatch from './src/Stopwatch'
import { WeightLogger } from "./src/WeightLogger";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#212121",
    onBackground: "#424242",

    // surface: "#212121",
    // onSurface: "#212121",

    // surfaceVariant: "#212121",
    // onSurfaceVariant: "#212121",

    primary: "#FAFAFA",
    onPrimary: "#FFFFFF",
    // primaryContainer: "#FFFFFF",
    // onPrimaryContainer: "#FFFFFF",

    // secondary: "#FAFAFA",
    // onSecondary: "#FFFFFF",
    // secondaryContainer: "#FFFFFF",
    // onSecondaryContainer: "#FFFFFF",

    // tertiary: "#FFFFFF",
    // onTertiary: "#FFFFFF",
    // tertiaryContainer: "#FFFFFF",
    // onTertiaryContainer: "#FFFFFF",
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Stopwatch />
    </PaperProvider>
  )
}