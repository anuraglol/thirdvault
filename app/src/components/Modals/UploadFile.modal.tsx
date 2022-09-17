import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { modalProps } from "types/modalProps.types";
import { FC, useState } from "react";
import { FilePicker } from "../misc/filePicker";
import { IFile } from "types/file.types";
import { encryptBlob } from "@/utils/helpers/handleFile";
import { useAccount } from "wagmi";

const UploadFileModal: FC<modalProps> = ({ isOpen, onOpen, onClose }) => {
  const [file, setFile] = useState<IFile>(null);
  const { address } = useAccount();
  console.log(file);

  const handleUpload = async () => {
    const encryptedHash = encryptBlob(file.hash, address);

    console.log(encryptedHash);
  };

  return (
    <Modal isOpen onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent bgColor="#080910" color="white">
        <ModalHeader
          textAlign="center"
          fontFamily="argentum"
          fontWeight="500"
          fontSize="md"
        >
          UPLOAD FILE
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          py="8"
          px="14"
          gap="4"
        >
          <FilePicker setFile={setFile} file={file} />

          <Button
            colorScheme="purple"
            fontWeight="500"
            fontSize="md"
            py="1"
            px="6"
            h="2.3rem"
            w="52"
            onClick={handleUpload}
          >
            Upload File
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UploadFileModal;
