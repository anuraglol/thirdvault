import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import "@fontsource/argentum-sans/400.css";
import "@fontsource/argentum-sans/500.css";
import "@fontsource/argentum-sans/900.css";
import "@/styles/fonts.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai} autoConnect>
      <Toaster />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
