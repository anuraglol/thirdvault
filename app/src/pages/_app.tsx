import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import "@fontsource/argentum-sans/400.css";
import "@fontsource/argentum-sans/500.css";
import "@fontsource/argentum-sans/900.css";
import "@/styles/fonts.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { ThirdwebProvider } from "@/providers/ThirdWebProvider";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Toaster />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme()}
          modalSize="compact"
          coolMode
        >
          <ThirdwebProvider wagmiClient={wagmiClient}>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </ThirdwebProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </RecoilRoot>
  );
}

export default MyApp;
