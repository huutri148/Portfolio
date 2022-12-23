import "../styles/globals.css";
import type { AppProps } from "next/app";

const AppContainer = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default AppContainer;
