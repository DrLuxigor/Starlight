import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "Set-Cookie",
    "session=deleted; Max-Age=-1; HttpOnly; Secure; SameSite=Strict; Path=/; Priority=High"
  );
  res.status(200);
}