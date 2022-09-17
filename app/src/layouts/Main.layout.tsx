import { Header } from "@/components";
import Blob from "@/components/Landing/Blob";
import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Box
      alignItems="center"
      bgColor="#060607"
      display="flex"
      justifyContent="center"
      minH="100vh"
      overflowX="hidden"
      textAlign="center"
      w="100vw"
    >
      {children}
      <Header />
      <Blob bg="purple.600" left="0" zIndex="0" />
      <Blob bg="pink.600" right="0" zIndex="0" />
    </Box>
  );
};

export default Layout;
