import { FC } from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

const ConnectWallet: FC = () => {
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const address = useAddress();

  return (
    <Flex alignItems="center" gap="2">
      {address ? (
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
          fontFamily="argentum"
          gap="2"
        >
          {address.slice(0, 4) + "...." + address.slice(-4)}
        </Flex>
      ) : (
        <Button
          colorScheme="purple"
          onClick={connectWithMetamask}
          fontWeight="500"
          fontSize="md"
          py="1"
          px="6"
          h="2.3rem"
        >
          Connect Wallet
        </Button>
      )}

      <Box
        color="red.500"
        cursor="pointer"
        _hover={{
          color: "red.400",
        }}
      >
        {address && <FiLogOut size={24} onClick={disconnectWallet} />}
      </Box>
    </Flex>
  );
};

export { ConnectWallet };
