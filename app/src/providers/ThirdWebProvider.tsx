import { useSigner } from "wagmi";
import {
  ChainId,
  ThirdwebSDKProvider,
  ThirdwebProvider as RealThirdwebProvider,
} from "@thirdweb-dev/react";

const ThirdwebProvider = ({ wagmiClient, children }: any) => {
  const { data: signer } = useSigner();

  return (
    <RealThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      signer={signer}
      provider={wagmiClient.provider}
      queryClient={wagmiClient.queryClient as any}
    >
      {children}
    </RealThirdwebProvider>
  );
};

export { ThirdwebProvider };
