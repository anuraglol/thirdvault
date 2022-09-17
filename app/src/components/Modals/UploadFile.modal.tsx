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
import axios from "axios";

const UploadFileModal: FC<modalProps> = ({ isOpen, onOpen, onClose }) => {
  const [file, setFile] = useState<IFile>(null);

  const handleUpload = async () => {
    console.log("uploading file");
    let res = await axios.post("/api/upload", {
      hash: file.hash,
      name: file.name,
      type: file.type,
    });

    console.log(res.data);
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
            isDisabled={file === null}
          >
            Upload File
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UploadFileModal;
