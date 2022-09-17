import { client } from "@/lib/web3Storage.client";
import { IFile } from "types/file.types";

const uploadFile = async (data: IFile, name: string) => {
  const blob = new Blob([JSON.stringify(data)], {
    type: "application/json",
  });

  const file = new File([blob], name + ".json", {
    type: "application/json",
  });

  const res = await client.put([file]);

  return res;
};

export { uploadFile };
