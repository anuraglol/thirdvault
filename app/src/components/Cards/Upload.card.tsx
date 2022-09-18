import { Box, Flex, Image, Text } from "@chakra-ui/react";

const UploadCard = ({ type, onClick }: any) => {
  return (
    <Box
      w={{ base: "80", md: "72" }}
      h="28"
      bgColor="#11131E"
      _hover={{
        bgColor: "#11121E",
      }}
      transition="all 0.2s"
      rounded="md"
      display="flex"
      justifyContent="space-between"
      cursor="pointer"
      onClick={onClick}
    >
      <Flex direction="column" justifyContent="space-between" py="4" ml="8">
        <Text fontSize={{ base: "md", md: "lg" }}>Upload a new {type}</Text>
        <Text fontSize="14px">Max Size: 5MB</Text>
      </Flex>

      <Image
        src="/assets/add.svg"
        alt="add"
        height="10"
        width="10"
        alignSelf="flex-end"
        mt="3"
      />
    </Box>
  );
};

export { UploadCard };
