import { client } from "@/lib/web3Storage.client";
import { Encrypter } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { File } from "web3.storage";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cid } = req.body;

  if (req.method === "POST") {
    const encrypted = await Encrypter.encrypt(cid);

    res.status(200).json({
      hash: encrypted,
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
