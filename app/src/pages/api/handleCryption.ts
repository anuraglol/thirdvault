import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { cid } = req.body;

  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
