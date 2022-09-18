import { Encrypter } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { hash } = req.body;
    if (hash) {
      const decrypted = await Encrypter.decrypt(hash);

      const utf8 = Buffer.from(decrypted, "hex").toString("utf8");

      res.status(200).json({
        cid: utf8,
      });
    } else {
      res.status(400).json({ error: "Missing hash" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
