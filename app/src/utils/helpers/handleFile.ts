import { client } from "@/lib/web3Storage.client";
import AES from "crypto-js/aes";

const fetchFile = async (cid: string) => {
  const res = await client.fetch(cid);

  return res;
};

const encryptBlob = (hash: ArrayBuffer | string, address: string) => {
  const encrypted = AES.encrypt(hash.toString(), address).toString();

  return encrypted;
};

const decryptBlob = (encrypted: string, address: string) => {
  const decrypted = AES.decrypt(encrypted, address).toString();

  return decrypted;
};

export { encryptBlob, decryptBlob, fetchFile };
