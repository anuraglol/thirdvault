import { client } from "@/lib/web3Storage.client";
import { IProfileForm } from "types/profileForm.types";

const submitProfile = async (profile: IProfileForm, address: string) => {
  console.log("Submitting profile", profile);
};

export { submitProfile };
