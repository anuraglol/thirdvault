import "@rainbow-me/rainbowkit/styles.css";
import { useSigner } from "wagmi";
import { ChainId, ThirdwebSDKProvider } from "@thirdweb-dev/react";

const ThirdwebProvider = ({ wagmiClient, children }: any) => {
  const { data: signer } = useSigner();

  return (
    <ThirdwebSDKProvider
      desiredChainId={ChainId.Mumbai}
      signer={signer as any}
      provider={wagmiClient.provider}
      queryClient={wagmiClient.queryClient as any}
    >
      {children}
    </ThirdwebSDKProvider>
  );
};

export { ThirdwebProvider };
