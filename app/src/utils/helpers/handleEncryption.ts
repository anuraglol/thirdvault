import { AES } from "crypto-js";

class Encrypter {
  static encrypt = async (data: string) => {
    const encryptedVal = AES.encrypt(data, process.env.SECRET_KEY).toString();

    return encryptedVal;
  };

  static decrypt = async (data: string) => {
    const decryptedVal = AES.decrypt(data, process.env.SECRET_KEY).toString();

    return decryptedVal;
  };
}

export { Encrypter };
