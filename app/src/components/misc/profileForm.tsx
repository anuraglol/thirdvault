import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  chakra,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useRecoilState } from "recoil";
import { profileFormAtom } from "@/lib/atoms";
import toast from "react-hot-toast";
import { submitProfile } from "@/utils";
import { useAccount } from "wagmi";

const inputStyles = {
  h: "10",
  w: "80",
  border: "2px solid",
  borderColor: "rgba(255, 255, 255, 0.4)",
  bgColor: "rgba(0, 0, 0, 0.4)",
  _placeholder: {
    color: "rgba(255, 255, 255, 0.4)",
  },
};

const ProfileForm: FC = () => {
  const [formData, setFormData] = useRecoilState(profileFormAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { address } = useAccount();

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoading(true);
        // toast.loading("Updating profile...");

        submitProfile(formData, address);

        setIsLoading(false);
      }}
    >
      <Flex
        direction="column"
        gap="4"
        align="center"
        justifyContent="space-between"
        h="72"
      >
        <Flex direction="column" gap="2" align="center">
          <FormControl isRequired>
            <FormLabel>Enter your Name</FormLabel>
            <Input
              {...inputStyles}
              placeholder="John Doe"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Choose a username</FormLabel>
            <Input
              {...inputStyles}
              placeholder="defaults to your address"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  username: e.target.value,
                });
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Enter a short bio</FormLabel>
            <Input
              {...inputStyles}
              placeholder="bio goes here..."
              onChange={(e) => {
                setFormData({
                  ...formData,
                  bio: e.target.value,
                });
              }}
            />
          </FormControl>
        </Flex>
        <Button
          colorScheme="purple"
          fontWeight="500"
          fontSize="md"
          py="1"
          px="6"
          h="2.3rem"
          w="52"
          type="submit"
          isLoading={isLoading}
        >
          Create Profile
        </Button>
      </Flex>
    </chakra.form>
  );
};

export { ProfileForm };
