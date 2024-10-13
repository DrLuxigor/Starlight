import { RequestCookie } from "next/dist/server/web/spec-extension/cookies";
import { auth } from "../../firebase-admin/firebase-admin";

export async function validateToken(token: string) {
  let checkRevoked = false;
  try {
    let verified = await auth.verifyIdToken(token, checkRevoked);
    return verified;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export async function verifySession(sessionCookie: RequestCookie | undefined) {
  if(!sessionCookie?.value) {
    return undefined;
  }
  try {
    let decodedToken = await auth.verifySessionCookie(sessionCookie.value);
    return decodedToken;
  } catch(err) {
    return undefined;
  }
}

export async function createSession(token: string, remember = false) {
  let expire = 24 * 60 * 60 * 1000 * 7;
  try {
    let cookie = await auth.createSessionCookie(token, { expiresIn: expire });
    return cookie;
  } catch (err) {
    console.log("Failed to create Session cookie: " + err);
    return null;
  }
}