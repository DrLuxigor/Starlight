import { auth } from "../../firebase-admin/firebase-admin";

export async function validateToken(token: string) {
    let checkRevoked = false;
    try {
        let verified = await auth.verifyIdToken(token, checkRevoked);
        return verified;
    } catch(err) {
        return undefined;
    }
}

export async function createSession(token: string, remember = false) {
    let expire = 24 * 60 * 60 * 1000 * 7;
    try {
        let cookie = await auth.createSessionCookie(token, {expiresIn: expire});
        return cookie;
    } catch(err) {
        console.log("Failed to create Session cookie: " + err)
        return null;
    }
}