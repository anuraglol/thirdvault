import { UploadFileModal, UploadImageModal } from "@/components";
import { Box, Flex, Spinner, Text, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "@/lib/constants";
import { BoringAva } from "@/components/misc/boringAva";
import { UploadCard } from "@/components/Cards/Upload.card";
import AppNavBar from "@/components/Nav/AppNavBar";
import { FileCard } from "@/components/Cards/File.card";
import { useMemo } from "react";
import { IFile } from "types/file.types";

const IndexPage: NextPage = () => {
  const address = useAddress();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data, isLoading } = useContractRead(contract, "getFiles");

  const userData = useMemo(() => {
    if (data && address && !isLoading) {
      let newArr = data.filter((file: IFile) => file.owner === address);

      newArr = newArr.map((item: any) => {
        return {
          cid: item.cid,
          owner: item.owner,
          name: item.name,
          size: item.size,
          type: item.file_type,
          uid: item.uid,
        };
      });

      return newArr;
    }
  }, [address, data, isLoading]);

  return (
    <Box
      minH="100vh"
      w="full"
      bgColor="#080910"
      px="40"
      color="white"
      pt="4"
      overflowX="hidden"
    >
      <UploadImageModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <UploadFileModal isOpen={isOpen2} onOpen={onOpen2} onClose={onClose2} />
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
      {address ? (
        <>
          {isLoading ? (
            <Flex justifyContent="center" w="full">
              <Spinner size="xl" color="purple.400" />
            </Flex>
          ) : (
            <>
              {userData?.length > 0 ? (
                <Flex my="8" gap="10" flexWrap="wrap">
                  {userData.map((file: IFile) => (
                    <FileCard file={file} key={file.uid} />
                  ))}
                </Flex>
              ) : (
                <Text
                  fontSize="lg"
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.6)"
                  fontFamily="argentum"
                  textAlign="center"
                  my="4"
                >
                  You have no files
                </Text>
              )}
            </>
          )}
        </>
      ) : (
        <Text
          fontSize="lg"
          fontWeight="400"
          color="rgba(255, 255, 255, 0.6)"
          fontFamily="argentum"
          textAlign="center"
          my="4"
        >
          Connect your wallet to view your files
        </Text>
      )}
    </Box>
  );
};

export default IndexPage;
