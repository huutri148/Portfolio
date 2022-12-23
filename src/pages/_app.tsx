// libs
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
// others
import "@/styles/globals.scss";

const AppContainer = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default AppContainer;
