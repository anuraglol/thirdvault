import { createCipheriv, createDecipheriv } from "crypto";

export class Encrypter {
  static encrypt = async (data: string) => {
    const cipher = createCipheriv(
      "aes256",
      Buffer.from(process.env.KEY!, "hex"),
      Buffer.from(process.env.IV!, "hex")
    );
    const encryptedData =
      cipher.update(data, "utf8", "hex") + cipher.final("hex");

    return encryptedData;
  };

  static decrypt = async (data: string) => {
    const decipher = createDecipheriv(
      "aes256",
      Buffer.from(process.env.KEY!, "hex"),
      Buffer.from(process.env.IV!, "hex")
    );
    const decryptedData =
      decipher.update(data, "hex", "utf-8") + decipher.final("utf8");

    return decryptedData;
  };
}

export default Encrypter;
