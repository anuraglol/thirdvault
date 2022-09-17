import { GitHubBadge, MainText } from "../Landing/Landing.components";
import { Box, Button, Text } from "@chakra-ui/react";
import { NextComponentType } from "next";
import Link from "next/link";

const Hero: NextComponentType = () => {
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
      <Link href="/app">
        <Button px="8" fontWeight="500" colorScheme="purple">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default Hero;
