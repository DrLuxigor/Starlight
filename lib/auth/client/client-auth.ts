import { clientAuth } from "../../firebase-client/firebase-client";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export async function signInWithEmailAndPw(email: string, password: string) {
  try {
    let user = await signInWithEmailAndPassword(clientAuth, email, password);
    return [user, null];
  } catch (err) {
    let error = err as FirebaseError;
    return [null, error.code];
  }
}

export async function autoSignIn() {
  let user = clientAuth.currentUser;
  console.log("current user: " + user?.email);
  if (user) {
    let token = await user.getIdToken(true);
    let response = await fetch("/api/auth/request-session", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}

export async function signOut() {
  try {
    await clientAuth.signOut();
    var res = await fetch("/api/auth/signout");
    console.log("log out request: " + res.status);
    location.reload();
  } catch (err) {
    console.log("sign out failed: " + err);
  }
}
