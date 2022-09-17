import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsDownload, BsTrash } from "react-icons/bs";

const FileCard: FC = () => {
  return (
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
      <Box h="60%" bgColor="#fff" roundedTop="md"></Box>

      <Flex h="40%" px="8" align="center" justifyContent="space-between">
        <Flex direction="column">
          <Text fontSize="lg" color="rgba(255, 255, 255, 0.8)">
            Nice Image
          </Text>
          <Text fontSize="sm" color="rgba(255, 255, 255, 0.6)">
            690KB
          </Text>
        </Flex>

        <Menu>
          <MenuButton>
            <BiDotsHorizontalRounded size={25} />
          </MenuButton>

          <MenuList>
            <MenuItem icon={<BsDownload size={18} />} color="blue.500">
              Download
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<BsTrash size={18} />} color="red.500">
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export { FileCard };
