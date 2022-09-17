import { Box } from "@chakra-ui/react";
import { default as BoringAvatar } from "boring-avatars";

const BoringAva = ({ address }: { address: string }) => {
  return (
    <BoringAvatar
      size="2rem"
      name={address || "address"}
      variant="ring"
      colors={["#FCD8AF", "#FEC49B", "#FE9B91", "#FD6084", "#045071"]}
    />
  );
};

export { BoringAva };
