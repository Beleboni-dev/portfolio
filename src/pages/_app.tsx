// _app.tsx
import { ChakraProvider, ColorModeScript, CSSReset, useColorMode } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "@/styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { colorMode, setColorMode } = useColorMode();
  
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
