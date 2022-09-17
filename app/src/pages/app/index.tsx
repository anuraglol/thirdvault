import { UploadFileModal, UploadImageModal } from "@/components";
import Layout from "@/layouts/Main.layout";
import { useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <UploadImageModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {/* <UploadFileModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
    </Layout>
  );
};

export default IndexPage;
