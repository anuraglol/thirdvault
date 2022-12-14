import { client } from "@/lib/web3Storage.client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { cid } = req.body;

    try {
      const response = await client.get(cid);

      res.status(200).json({
        success: true,
        data: response,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
