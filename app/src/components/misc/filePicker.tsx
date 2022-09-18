import { Box, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FilePicker = ({
  file,
  setFile,
}: {
  file: File;
  setFile: Dispatch<SetStateAction<File>>;
}) => {
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = () => {
        setFile(acceptedFiles[0]);
      };
    },
    [setFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      h={{base:"52",md:"72"}}
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
      <input {...getInputProps()} />

      {file ? (
        <Text>{file.name}</Text>
      ) : (
        <Text
          fontFamily="body"
          fontWeight="400"
          color="rgba(255, 255, 255, 0.4)"
        >
          {isDragActive
            ? "Drop the file here ..."
            : "Drag n Drop or select any file..."}
        </Text>
      )}
    </Box>
  );
};

export { FilePicker };
