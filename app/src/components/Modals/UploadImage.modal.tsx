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
import { ImagePicker } from "../misc/imagePicker";
import { IFile } from "types/file.types";
import { useAccount, useSignMessage } from "wagmi";
import { encryptBlob } from "@/utils/helpers/handleFile";
import { uploadFile } from "@/utils/helpers/uploadFile";
import axios from "axios";

const SetupProfileModal: FC<modalProps> = ({ isOpen, onOpen, onClose }) => {
  const [img, setImage] = useState<IFile>(null);
  const { address } = useAccount();

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: "gm wagmi frens",
  });

  console.log(data, isError, isLoading, isSuccess);

  const handleUpload = async () => {
    signMessage();
    console.log(data);
    // const encryptedHash = encryptBlob(img.hash, address);

    // const data = {
    //   hash: encryptedHash,
    //   name: img.name,
    //   size: img.size,
    //   type: img.type,
    //   owner: img.owner,
    // };

    // const res = await uploadFile(data, data.name);
    // console.log(res);
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
          UPLOAD IMAGE
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
          <ImagePicker img={img} setImage={setImage} />

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
            Upload Image
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SetupProfileModal;
