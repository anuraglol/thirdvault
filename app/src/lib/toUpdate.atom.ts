import { atom } from "recoil";

const toUpdateAtom = atom<boolean>({
  key: "toUpdateAtom",
  default: false,
});

export { toUpdateAtom };
