import { profileFormAtom } from "@/lib/atoms";
import { Box, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { IFile } from "types/file.types";
import { useAccount } from "wagmi";

const ImagePicker = ({
  img,
  setImage,
}: {
  img: IFile;
  setImage: Dispatch<SetStateAction<IFile>>;
}) => {
  const [formData, setFormData] = useRecoilState(profileFormAtom);
  const { address } = useAccount();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = () => {
        setFormData({
          ...formData,
          avatar: reader.result,
        });
        setImage({
          name: acceptedFiles[0].name,
          size: acceptedFiles[0].size,
          owner: address,
          type: acceptedFiles[0].type,
          hash: reader.result,
        });
      };
    },
    [setFormData, formData, address, setImage]
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
