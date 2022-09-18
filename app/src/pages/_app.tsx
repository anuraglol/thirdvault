import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import "@fontsource/argentum-sans/400.css";
import "@fontsource/argentum-sans/500.css";
import "@fontsource/argentum-sans/900.css";
import "@/styles/fonts.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="thirdvault"
        description="Store all your secret files on your own secured vault, powered by IPFS and thirdweb."
        canonical="https://thirdvault.vercel.app/"
        openGraph={{
          url: "https://thirdvault.vercel.app/",
          title: "thirdvault",
          description:
            "Store all your secret files on your own secured vault, powered by IPFS and thirdweb.",
          images: [
            {
              url: "/assets/og.png",
              width: 800,
              height: 420,
              alt: "og-image",
            },
            {
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1663503678/og_d3lw8l.png",
              width: 800,
              height: 420,
              alt: "og-image",
            },
          ],
        }}
        twitter={{
          handle: "@imanuraglol",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/assets/icon.png" type="image/png" />
      </Head>
      <RecoilRoot>
        <ThirdwebProvider desiredChainId={ChainId.Mumbai} autoConnect>
          <Toaster />
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ThirdwebProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
