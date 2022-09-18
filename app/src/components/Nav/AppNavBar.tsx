import { Flex, Text } from "@chakra-ui/react";
import { NextComponentType } from "next";
import { ConnectWallet } from "../misc/connectWallet";

const AppNavBar: NextComponentType = () => {
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

      <ConnectWallet />
    </Flex>
  );
};

export default AppNavBar;
