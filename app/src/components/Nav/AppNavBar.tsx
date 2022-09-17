import { Button, Flex, Text } from "@chakra-ui/react";
import { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const AppNavBar: NextComponentType = () => {
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
      textColor="white"
      w="full"
    >
      <Text cursor="pointer" fontSize="2xl" fontWeight="500">
        vault
      </Text>

      <Flex gap="2" align="center">
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

export default AppNavBar;
