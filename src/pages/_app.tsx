// libs
import type { AppProps } from "next/app";
// others
import "@/styles/globals.scss";

const AppContainer = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default AppContainer;
