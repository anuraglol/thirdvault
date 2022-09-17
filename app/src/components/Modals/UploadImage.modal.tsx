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
import axios from "axios";
import { client } from "@/lib/web3Storage.client";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "@/lib/constants";
import { uuid } from "uuidv4";

const UploadImageModal: FC<modalProps> = ({ isOpen, onOpen, onClose }) => {
  const [img, setImage] = useState<File>(null);
  const [loading, setLoading] = useState(false);

  const { contract } = useContract(
    "0xffBF525780441bAfA954743FA61928D8BB54530b"
  );
  const { mutateAsync: addFile, isLoading } = useContractWrite(
    contract,
    "addFile"
  );

  const handleUpload = async () => {
    setLoading(true);

    try {
      const cid = await client.put([img]);

      let res = await axios.post("/api/upload", {
        cid: cid,
      });

      console.log(res.data.hash);
      const uid = uuid();

      const data = await addFile([img.name, uid, img.type, img.size, res.data.hash]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }

    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
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
            isDisabled={img === null}
            isLoading={loading}
          >
            Upload Image
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UploadImageModal;
