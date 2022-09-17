import { Header, UploadFileModal, UploadImageModal } from "@/components";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "@/lib/constants";
import { BoringAva } from "@/components/misc/boringAva";
import { UploadCard } from "@/components/Cards/Upload.card";
import AppNavBar from "@/components/Nav/AppNavBar";
import { FileCard } from "@/components/Cards/File.card";

const IndexPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const { contract } = useContract(
    "0xffBF525780441bAfA954743FA61928D8BB54530b"
  );
  const { data, isLoading } = useContractRead(contract, "getFiles");

  console.log(data);

  const address = useAddress();

  return (
    <>
      <UploadImageModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <UploadFileModal isOpen={isOpen2} onOpen={onOpen2} onClose={onClose2} />

      <Box minH="100vh" w="full" bgColor="#080910" px="40" color="white" pt="4">
        <AppNavBar />
        <Flex align="center" justify="space-between" w="full" pt="28">
          <Flex align="center" gap="2">
            <BoringAva address={address} />

            <Text fontSize="2xl" fontWeight="500">
              Hello
            </Text>
          </Flex>

          <Flex
            gap="4"
            color="rgba(255, 255, 255, 0.8)"
            fontSize="xl"
            fontWeight="400"
            align="center"
          >
            <Text>Images</Text>
            <Text>Files</Text>
          </Flex>
        </Flex>

        <Flex my="8" gap="10">
          <UploadCard type="Image" onClick={onOpen} />
          <UploadCard type="File" onClick={onOpen2} />
        </Flex>

        <Text fontSize="2xl" fontWeight="500">
          Files
        </Text>

        <Flex my="8" gap="10">
          <FileCard />
        </Flex>
      </Box>
    </>
  );
};

export default IndexPage;
