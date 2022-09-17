import { client } from "@/lib/web3Storage.client";
import { Encrypter } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { hash } = req.body;

    // const decrypted = await Encrypter.decrypt(hash);

    // const utf8 = Buffer.from(decrypted, "hex").toString("utf8");

    // const file = await client.get(hash);
    // console.log(file);

    res.status(200).json({
      hash: hash,
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
