import { UploadFileModal, UploadImageModal } from "@/components";
import Layout from "@/layouts/Main.layout";
import { useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import { useAccount, useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "@/lib/constants";

const IndexPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data, isLoading } = useContractRead(contract, "getImages");

  console.log(data);

  return (
    <Layout>
      <UploadImageModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {/* <UploadFileModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
    </Layout>
  );
};

export default IndexPage;
