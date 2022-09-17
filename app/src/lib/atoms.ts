import { atom } from "recoil";
import { IProfileForm } from "types/profileForm.types";

const profileFormAtom = atom<IProfileForm>({
  key: "profileForm",
  default: {
    name: "",
    username: "",
    bio: "",
    address: "",
    avatar: "",
  },
});

export { profileFormAtom };
