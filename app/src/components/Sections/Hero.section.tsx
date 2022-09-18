import { GitHubBadge, MainText } from "../Landing/Landing.components";
import { Box, Button, Text } from "@chakra-ui/react";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useAddress } from "@thirdweb-dev/react";
import toast from "react-hot-toast";

const Hero: NextComponentType = () => {
  const router = useRouter();
  const address = useAddress();

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDir="column"
      gap="6"
      justifyContent="center"
      textAlign="center"
    >
      <GitHubBadge />
      <MainText />

      <Text color="gray.100" fontSize="xl" opacity="80%">
        Upload files/images/documents, on your own vault. Powered by IPFS!
      </Text>
      <Button
        px="8"
        fontWeight="500"
        colorScheme="purple"
        onClick={() => {
          if (!address) {
            toast.error("Please connect your wallet first");
          } else {
            router.push("/app");
          }
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;
