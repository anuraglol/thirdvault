import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { FC, useEffect, useMemo, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsDownload, BsTrash } from "react-icons/bs";
import { IFile } from "types/file.types";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "@/lib/constants";
import toast from "react-hot-toast";
import download from "downloadjs";
import { useRecoilState } from "recoil";
import { toUpdateAtom } from "@/lib/toUpdate.atom";
import { ConfirmDeleteModal } from "../Modals/ConfirmDelete.modal";

interface IProps {
  file: IFile;
}

const FileCard: FC<IProps> = ({ file }) => {
  const [toUpdate, setToUpdate] = useRecoilState(toUpdateAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setIsLoading] = useState(false);

  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync: deleteFile, isLoading } = useContractWrite(
    contract,
    "deleteFile"
  );

  const [fileUrl, setFileUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post("/api/decrypt", {
        hash: file.cid,
      });

      const url = `https://ipfs.io/ipfs/${res.data.cid}/${file.name}`;
      setFileUrl(url);
    };

    fetchData();
  }, [file.cid, file.name, toUpdate]);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const data = await deleteFile([file.uid]);

      toast.success("File deleted successfully");
      setToUpdate(!toUpdate);
      onClose();
    } catch (err) {
      toast.error("Something went wrong");
      onClose();
    }
    setIsLoading(false);
  };

  const isImage = useMemo(() => {
    if (file.type.split("/")[0] === "image") {
      return true;
    } else {
      return false;
    }
  }, [file.type]);

  return (
    <>
      <ConfirmDeleteModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleDelete={handleDelete}
        loading={loading}
      />
      <Box
        w="72"
        h="48"
        bgColor="#11131E"
        _hover={{
          bgColor: "#11121E",
        }}
        transition="all 0.2s"
        rounded="md"
        display="flex"
        flexDir="column"
        cursor="pointer"
      >
        {isImage ? (
          <Box
            h="60%"
            bgColor="#fafafa"
            roundedTop="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={fileUrl} alt={file.name} h="80%" />
          </Box>
        ) : (
          <Box
            h="60%"
            bgColor="#fff"
            roundedTop="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="blackAlpha.800"
            px="8"
          >
            <Text fontWeight="500" noOfLines={1}>
              {file.name.length > 10
                ? file.name.substring(0, 12) + "..." + file.name.split(".")[1]
                : file.name}
            </Text>
          </Box>
        )}

        <Flex h="40%" px="8" align="center" justifyContent="space-between">
          <Text fontSize="lg" color="rgba(255, 255, 255, 0.8)" noOfLines={1}>
            {file.name.length > 18
              ? file.name.substring(0, 12) + "..." + file.name.split(".")[1]
              : file.name}
          </Text>

          <Menu>
            <MenuButton>
              <BiDotsHorizontalRounded size={25} />
            </MenuButton>

            <MenuList>
              <MenuItem
                icon={<BsDownload size={18} />}
                color="blue.500"
                onClick={() => {
                  download(fileUrl);
                }}
              >
                Download
              </MenuItem>
              <MenuDivider />
              <MenuItem
                icon={<BsTrash size={18} />}
                color="red.500"
                onClick={onOpen}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </>
  );
};

export { FileCard };
