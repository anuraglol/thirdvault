import { Button, Flex, Image } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoIosArrowDown } from "react-icons/io";

const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    colorScheme="purple"
                    onClick={openConnectModal}
                    fontWeight="500"
                    fontSize="md"
                    py="1"
                    px="6"
                    h="2.3rem"
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    colorScheme="red"
                    onClick={openChainModal}
                    fontWeight="500"
                    fontSize="md"
                    py="1"
                    px="6"
                    h="2.3rem"
                  >
                    Wrong Network
                  </Button>
                );
              }
              return (
                <Flex
                  _hover={{ bg: "#131314", textDecoration: "none" }}
                  align="center"
                  justify="center"
                  bg="rgb(34, 35, 37)"
                  border="thin solid"
                  borderColor="rgb(34, 35, 37)"
                  color="white"
                  cursor="pointer"
                  fontSize="md"
                  h="10"
                  px="4"
                  rounded="md"
                  transition="all 0.2s"
                  onClick={openAccountModal}
                  fontFamily="argentum"
                  gap="2"
                >
                  {chain.hasIcon && (
                    <Image src={chain.iconUrl} alt={chain.name} h="6" w="6" />
                  )}

                  {account.address.slice(0, 4) +
                    "...." +
                    account.address.slice(-4)}

                  <IoIosArrowDown />
                </Flex>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export { ConnectWallet };
