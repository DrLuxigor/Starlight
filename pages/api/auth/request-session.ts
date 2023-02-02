import type { NextApiRequest, NextApiResponse } from "next";
import {
  createSession,
  validateToken,
} from "../../../lib/auth/server/server-auth";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    let decoded = await validateToken(token);
    if (decoded) {
      let cookie = await createSession(token);
      if (cookie) {
        res.setHeader(
          "Set-Cookie",
          "session=" +
            cookie +
            "; HttpOnly; Secure; SameSite=Strict; Path=/; Priority=High"
        );
        res.status(200).json({ success: "success" });
      } else {
        res.status(402).json({ error: "error creating session" });
      }
    } else {
      res.status(401).json({ error: "not authorized. invalid header" });
    }
  } else {
    res.status(401).json({ error: "not authorized. missing header" });
  }
}
