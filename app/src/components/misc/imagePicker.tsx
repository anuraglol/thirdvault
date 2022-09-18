import { Box, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

const ImagePicker = ({
  img,
  setImage,
}: {
  img: File;
  setImage: Dispatch<SetStateAction<File>>;
}) => {
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = () => {
        setImage(acceptedFiles[0]);
      };
    },
    [setImage]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      h="72"
      w="sm"
      rounded="lg"
      border="dashed 2px"
      borderColor="rgba(255, 255, 255, 0.4)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px="10"
      cursor="pointer"
      _hover={{
        borderColor: "rgba(255, 255, 255, 0.6)",
      }}
      transition="all 0.2s"
      {...getRootProps()}
    >
      <input {...getInputProps()} type="file" accept="image/*" />
      {img ? (
        <>
          <Text>{img.name}</Text>
        </>
      ) : (
        <Text
          fontFamily="body"
          fontWeight="400"
          color="rgba(255, 255, 255, 0.4)"
        >
          {isDragActive
            ? "Drop the file here ..."
            : "Drag n Drop or select an Image..."}
        </Text>
      )}
    </Box>
  );
};

export { ImagePicker };
