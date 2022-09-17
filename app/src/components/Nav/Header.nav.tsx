import { Button, Flex, Text } from "@chakra-ui/react";
import { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const Header: NextComponentType = () => {
  const router = useRouter();

  const connectWithMetamask = useMetamask();
  const address = useAddress();

  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="rgb(34, 35, 37)"
      h="14"
      justifyContent="space-between"
      position="fixed"
      px={["4", "16"]}
      textColor="white"
      top="0"
      w="full"
    >
      <Link href="/">
        <Text cursor="pointer" fontSize="xl" fontWeight="500">
          solkudos
        </Text>
      </Link>

      <Flex gap="2" align="center">
        {/* <ConnectWallet /> */}

        {address ? (
          <Flex>{address}</Flex>
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

        <Button
          colorScheme="purple"
          fontWeight="500"
          fontSize="md"
          py="1"
          px="6"
          h="2.2rem"
          rounded="full"
          onClick={() => router.push("/app")}
        >
          App
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
