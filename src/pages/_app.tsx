// libs
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// others
import styles from "@/themes";
import "@/styles/globals.scss";

const AppContainer = ({ Component, pageProps }: AppProps) => {
  const themeData = extendTheme({
    styles
  });
  return (
    <ChakraProvider theme={themeData}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default AppContainer;
